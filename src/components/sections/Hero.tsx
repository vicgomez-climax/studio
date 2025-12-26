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
        fov: 800,
        cameraHeight: 200,
        speed: 40,
        buildingColor: '#ffffff',
        buildingSideColor: '#e0e0e0',
        fogColor: '#87CEEB',
        viewDistance: 4000
    };

    let width: number, height: number;
    let buildings: Building[] = [];
    let animationFrameId: number;

    const ship = {
        x: 0,
        y: 0,
    };

    class Building {
        w: number;
        h: number;
        d: number;
        x: number;
        z: number;

        constructor(z: number) {
            this.w = 100 + Math.random() * 150;
            this.h = 400 + Math.random() * 800;
            this.d = 100 + Math.random() * 100;
            this.x = (Math.random() * 4000) - 2000;
            this.z = z;
        }
        
        project(cx: number, cy: number, fov: number) {
            const scaleF = fov / Math.max(1, this.z);
            const scaleB = fov / Math.max(1, this.z + this.d);
            const xF = cx + (this.x * scaleF);
            const wF = this.w * scaleF;
            const hF = this.h * scaleF;
            const yF = cy + (CONFIG.cameraHeight * scaleF);
            const xB = cx + (this.x * scaleB);
            const wB = this.w * scaleB;
            
            return { xF, yF, wF, hF, xB, wB, scaleF, scaleB };
        }
    }

    function init() {
        resize();
        window.addEventListener('resize', resize);
        
        document.addEventListener('mousemove', (e) => {
            const ratio = (e.clientX / width) * 2 - 1;
            ship.x = ratio * 1500;
        });

        for (let z = 500; z < CONFIG.viewDistance; z += 400) {
            buildings.push(new Building(z));
        }

        loop();
    }

    function resize() {
        if (!canvas) return;
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function loop() {
        if (!ctx) return;
        ctx.fillStyle = CONFIG.fogColor;
        ctx.fillRect(0, 0, width, height);

        const cy = height / 2;
        const cx = width / 2;

        const lastB = buildings[buildings.length - 1];
        if (lastB.z < CONFIG.viewDistance) {
            buildings.push(new Building(lastB.z + 400));
        }

        for (let i = buildings.length - 1; i >= 0; i--) {
            buildings[i].z -= CONFIG.speed;
            if (buildings[i].z < -500) {
                buildings.splice(i, 1);
            }
        }
        
        const cameraOffsetX = -ship.x;
        
        buildings.sort((a, b) => b.z - a.z);

        buildings.forEach(b => {
            const proj = b.project(cx + (cameraOffsetX * CONFIG.fov / Math.max(1, b.z)), cy, CONFIG.fov);
            const { xF, yF, wF, hF, xB, wB, scaleF, scaleB } = proj;

            const alpha = Math.max(0, 1 - (b.z / CONFIG.viewDistance));
            
            if (alpha > 0) {
                ctx.globalAlpha = alpha;

                const finalXF = xF - wF/2;
                const finalXB = xB - wB/2;
                
                // Draw Side Face
                ctx.fillStyle = CONFIG.buildingSideColor;
                ctx.beginPath();
                 if (finalXB > finalXF) { // Left side visible
                    ctx.moveTo(finalXF, yF);
                    ctx.lineTo(finalXF, yF - hF);
                    ctx.lineTo(finalXB, yF - hF * (scaleB / scaleF));
                    ctx.lineTo(finalXB, yF);
                } else { // Right side visible
                    const rightXF = xF + wF/2;
                    const rightXB = xB + wB/2;
                    ctx.moveTo(rightXF, yF);
                    ctx.lineTo(rightXF, yF - hF);
                    ctx.lineTo(rightXB, yF - hF * (scaleB / scaleF));
                    ctx.lineTo(rightXB, yF);
                }
                ctx.closePath();
                ctx.fill();

                // Draw Front Face
                ctx.fillStyle = CONFIG.buildingColor;
                ctx.fillRect(finalXF, yF - hF, wF, hF);
                
                ctx.globalAlpha = 1.0;
            }
        });

        animationFrameId = requestAnimationFrame(loop);
    }

    init();
    
    return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
    }
  }, []);

  return (
    <section className="tech-hero">
      <canvas ref={canvasRef} id="game-canvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
            Put Your Building in Cruise Control.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
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
