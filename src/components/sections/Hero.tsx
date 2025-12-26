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

    let width: number, height: number;
    let buildings: Building[] = [];
    
    const CONFIG = {
        speed: 25,
        fov: 600,
        viewDist: 3000,
        nearPlane: 100
    };

    const ship = { x: 0, width: 60 };

    class Building {
        w: number;
        h: number;
        x: number;
        z: number;
        color: string;
        sideColor: string;

        constructor(zStart: number) {
            this.w = 150 + Math.random() * 200; 
            this.h = 400 + Math.random() * 600; 
            this.x = (Math.random() * 6000) - 3000;
            this.z = zStart;
            this.color = '#ffffff'; 
            this.sideColor = '#cccccc';
        }
    }

    let animationFrameId: number;

    function init() {
        resize();
        window.addEventListener('resize', resize);
        
        window.addEventListener('mousemove', e => {
            const ratio = (e.clientX / width) * 2 - 1;
            ship.x = ratio * 2000;
        });

        for(let z=500; z<CONFIG.viewDist; z+=300) {
            buildings.push(new Building(z));
        }

        loop();
    }

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    function loop() {
        if (!ctx) return;

        ctx.fillStyle = "#87CEEB"; 
        ctx.fillRect(0, 0, width, height);
        
        const cx = width / 2;
        const cy = height / 2;

        if(buildings.length > 0 && buildings[buildings.length-1].z < CONFIG.viewDist) {
            buildings.push(new Building(buildings[buildings.length-1].z + 300));
        }

        for(let i = buildings.length - 1; i >= 0; i--) {
            let b = buildings[i];
            b.z -= CONFIG.speed;

            if(b.z < -200) {
                buildings.splice(i, 1);
            }
        }

        buildings.sort((a, b) => b.z - a.z);

        buildings.forEach(b => {
            if(b.z < CONFIG.nearPlane) return;

            const scale = CONFIG.fov / b.z;
            const x = cx + (b.x * scale);
            const y = cy + (150 * scale);
            const w = b.w * scale;
            const h = b.h * scale;

            ctx.fillStyle = b.sideColor;
            const sideSize = w * 0.4; 
            if (x > cx) {
                ctx.fillRect(x - w/2 - sideSize, y - h, sideSize, h);
            } else {
                ctx.fillRect(x + w/2, y - h, sideSize, h);
            }

            ctx.fillStyle = b.color;
            ctx.fillRect(x - w/2, y - h, w, h);
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
