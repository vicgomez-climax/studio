'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- CONFIGURATION ---
    const CONFIG = {
        buildingColor: '#0a0a12',
        windowColorOn: '#4db8ff',  // Cyan tech lights
        windowColorOff: '#141420',
        fogColor: '#020205',       // Must match CSS background
        speed: 2,                  // Drone flight speed
        density: 300,              // Number of buildings
        fov: 600                   // Field of view
    };

    let width: number, height: number;
    let buildings: Building[] = [];
    let camZ = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let animationFrameId: number;

    // --- BUILDING CLASS ---
    class Building {
        x: number;
        y: number;
        z: number;
        w: number;
        h: number;
        d: number;
        windows: { r: number, c: number }[];

        constructor(x: number, z: number, w: number, h: number, d: number) {
            this.x = x;          // X position (left/right)
            this.y = 200;        // Y position (floor level, below camera)
            this.z = z;          // Z depth
            this.w = w;          // Width
            this.h = h;          // Height (grows upwards)
            this.d = d;          // Depth (thickness)
            this.windows = [];   // Pre-calculate window lights
            
            // Generate random windows
            const rows = Math.floor(this.h / 15);
            const cols = Math.floor(this.w / 10);
            for(let r=0; r<rows; r++) {
                for(let c=0; c<cols; c++) {
                    if(Math.random() > 0.7) { // 30% chance of light
                        this.windows.push({r, c});
                    }
                }
            }
        }

        project(cx: number, cy: number, fov: number, viewZ: number) {
            // Relative Z from camera
            const relZ = this.z - viewZ;
            
            // If behind camera or too far, don't draw
            if (relZ <= 0 || relZ > 4000) return null;

            const scale = fov / relZ;
            const screenX = cx + (this.x * scale);
            const screenY = cy + (this.y * scale); // Floor Y on screen
            
            const projW = this.w * scale;
            const projH = this.h * scale; // Height grows UP from floor
            
            return { x: screenX, y: screenY, w: projW, h: projH, scale: scale, relZ: relZ };
        }
    }

    // --- INITIALIZATION ---
    function init() {
        resize();
        createCity();
        window.addEventListener('resize', resize);
        document.addEventListener('mousemove', handleMouseMove);
        
        requestAnimationFrame(() => {
          if(canvas) canvas.style.opacity = '1'
        });
        loop();
    }
    
    function handleMouseMove(e: MouseEvent) {
      // Normalize mouse from -1 to 1
      targetMouseX = (e.clientX / width) * 2 - 1;
      targetMouseY = (e.clientY / height) * 2 - 1;
    }

    function createCity() {
        buildings = [];
        const spacing = 150;
        
        for(let z = 0; z < 5000; z += spacing) {
            for(let x = -2000; x < 2000; x += spacing) {
                if(Math.random() > 0.8) continue;
                
                const w = 40 + Math.random() * 60;
                const h = 100 + Math.random() * 600;
                const d = 40 + Math.random() * 60;
                
                const jx = x + (Math.random() * 50 - 25);
                const jz = z + (Math.random() * 50 - 25);
                
                buildings.push(new Building(jx, jz, w, h, d));
            }
        }
    }

    function resize() {
      if (canvas) {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
      }
    }

    // --- RENDER LOOP ---
    function loop() {
        mouseX += (targetMouseX - mouseX) * 0.05;
        mouseY += (targetMouseY - mouseY) * 0.05;

        camZ += CONFIG.speed;
        
        buildings.forEach(b => {
            if (b.z - camZ < -200) {
                b.z += 5000;
            }
        });

        if (!ctx) return;
        ctx.fillStyle = CONFIG.fogColor;
        ctx.fillRect(0, 0, width, height);

        const cx = width / 2 - (mouseX * 200);
        const cy = height / 2 + (mouseY * 100);

        const renderList: {b: Building, proj: any}[] = [];
        for(let b of buildings) {
            const proj = b.project(cx, cy, CONFIG.fov, camZ);
            if(proj) renderList.push({ b, proj });
        }
        renderList.sort((a, b) => b.proj.relZ - a.proj.relZ);

        renderList.forEach(item => {
            const { b, proj } = item;
            const { x, y, w, h, scale, relZ } = proj;

            const fogDensity = Math.min(1, Math.pow(relZ / 3500, 2));
            
            const roofY = y - h;
            
            ctx.fillStyle = CONFIG.buildingColor;
            ctx.fillRect(x - w/2, roofY, w, h);
            
            ctx.fillStyle = CONFIG.windowColorOn;
            const winW = w * 0.1;
            
            if(scale > 0.2) {
                ctx.globalAlpha = (1 - fogDensity) * 0.8;
                for(let win of b.windows) {
                    const winX = (x - w/2) + (win.c * (w/10)) + 2;
                    const winY = roofY + (win.r * 15 * scale) + 5;
                    
                    if (winY < y) {
                        ctx.fillRect(winX, winY, winW, 3 * scale);
                    }
                }
                ctx.globalAlpha = 1.0;
            }

            const roofDepth = b.d * scale;
            
            ctx.beginPath();
            ctx.moveTo(x - w/2, roofY);
            ctx.lineTo(x + w/2, roofY);
            ctx.lineTo(x + w/2 + (mouseX * 50 * scale), roofY - roofDepth);
            ctx.lineTo(x - w/2 + (mouseX * 50 * scale), roofY - roofDepth);
            ctx.closePath();
            ctx.fillStyle = '#0f0f18';
            ctx.fill();

            if(fogDensity > 0.01) {
                ctx.fillStyle = CONFIG.fogColor;
                ctx.globalAlpha = fogDensity;
                ctx.fillRect(x - w/2 - 10, roofY - roofDepth -10, w + 40, h + roofDepth + 20);
                ctx.globalAlpha = 1.0;
            }
        });

        animationFrameId = requestAnimationFrame(loop);
    }

    init();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <section className="tech-hero">
      <canvas ref={canvasRef} id="city-canvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            Put Your Building in Cruise Control.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80">
            Our mission is to create optimal and efficient building environments that enable people and businesses to achieve their highest potential.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="#methodology">Our Methodology</Link>
            </Button>
            <Button asChild size="lg" variant="accent">
              <Link href="#services">Our Services</Link>
            </Button>
        </div>
        <div className="mt-12">
            <Image
              src="/images/AutomatedLogic_logo_AD_wr_300.png"
              alt="Automated Logic Authorized Dealer"
              width={300}
              height={85}
              priority
            />
        </div>
      </div>
    </section>
  );
}
