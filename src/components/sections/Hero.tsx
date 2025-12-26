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
    let animationFrameId: number;

    const CONFIG = {
        fov: 700,
        speed: 30,
        viewDistance: 3000,
        camHeight: 250,
    };

    const ship = {
        x: 0, 
        targetX: 0,
        width: 40
    };

    class Building {
        w: number;
        h: number;
        x: number;
        z: number;
        color: string;
        sideColor: string;

        constructor(z: number) {
            this.w = 150 + Math.random() * 200; 
            this.h = 500 + Math.random() * 800; 
            this.z = z;
            
            const laneOffset = (Math.random() - 0.5) * 800;
            
            if (Math.random() > 0.5) {
                this.x = laneOffset + 400 + (this.w/2); 
            } else {
                this.x = laneOffset - 400 - (this.w/2);
            }
            
            this.color = '#ffffff'; 
            this.sideColor = '#dcdcdc';
        }
    }

    function init() {
        resize();
        window.addEventListener('resize', resize);
        
        for(let z = 500; z < CONFIG.viewDistance; z += 300) {
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

        let closestBuilding = null;
        // The buildings are sorted by z, so the first one is the closest
        for(let b of buildings) {
            if(b.z > 0 && b.z < 1000) {
                closestBuilding = b;
                break;
            }
        }

        if (closestBuilding) {
            if (closestBuilding.x > ship.x) {
                ship.targetX = closestBuilding.x - (closestBuilding.w/2) - 300;
            } 
            else {
                ship.targetX = closestBuilding.x + (closestBuilding.w/2) + 300;
            }
        } else {
            ship.targetX = ship.targetX * 0.99;
        }

        ship.x += (ship.targetX - ship.x) * 0.05;

        if (buildings[buildings.length-1].z < CONFIG.viewDistance) {
            buildings.push(new Building(buildings[buildings.length-1].z + 300));
        }

        for (let i = buildings.length - 1; i >= 0; i--) {
            let b = buildings[i];
            b.z -= CONFIG.speed;
            if (b.z < -200) {
                buildings.splice(i, 1);
            }
        }

        buildings.sort((a, b) => b.z - a.z);

        buildings.forEach(b => {
            if (b.z < 10) return;

            let alpha = 1.0;
            
            if (b.z < 400) {
                alpha = (b.z) / 400; 
            }
            
            if (b.z > 2000) {
                alpha = Math.min(alpha, 1 - (b.z - 2000) / 1000);
            }

            if (alpha <= 0.01) return;

            ctx.globalAlpha = alpha;

            const scale = CONFIG.fov / b.z;
            const x = cx + ((b.x - ship.x) * scale);
            const y = cy + (CONFIG.camHeight * scale);
            const w = b.w * scale;
            const h = b.h * scale;

            ctx.fillStyle = b.sideColor;
            const sideSize = w * 0.6;
            if (x > cx) {
                ctx.fillRect(x - w/2 - sideSize, y - h, sideSize, h);
            } else {
                ctx.fillRect(x + w/2, y - h, sideSize, h);
            }

            ctx.fillStyle = b.color;
            ctx.fillRect(x - w/2, y - h, w, h);
            
            ctx.globalAlpha = 1.0;
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
