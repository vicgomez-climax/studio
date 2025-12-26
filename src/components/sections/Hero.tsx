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

    const ALC_COLORS = {
      RED: '#cc2936',
      YELLOW: '#f9dc5c',
      BLUE: '#2c5291',
      GREEN: '#00cc66',
      BG: '#060a14',
      WALL: 'rgba(255, 255, 255, 0.1)',
      SCAN: '#00ff88',
      GRID: 'rgba(59, 130, 246, 0.1)',
    };

    let zones: Zone[] = [];
    let scanX = 0;
    let width: number, height: number;
    let isWaiting = false;
    let frameCount = 0; // For flashing animation

    const ROOM_NAMES = [
      'Lobby', 'Office 101', 'Conf. Room', 'IT Closet', 'Breakroom', 'Office 102',
      'Huddle Space', 'Reception', 'Workspace A', 'Server Room', 'Office 103'
    ];
    let roomNameIndex = 0;

    class Zone {
      x: number;
      y: number;
      w: number;
      h: number;
      startColor: string;
      currentColor: string;
      isOptimized: boolean;
      name: string;
      badTemp: string;

      constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        
        const palette = [ALC_COLORS.RED, ALC_COLORS.YELLOW, ALC_COLORS.BLUE];
        this.startColor = palette[Math.floor(Math.random() * palette.length)];
        this.currentColor = this.startColor;
        this.isOptimized = false;
        
        this.name = ROOM_NAMES[roomNameIndex % ROOM_NAMES.length];
        roomNameIndex++;

        if (this.startColor === ALC_COLORS.RED) this.badTemp = '81.4°';
        else if (this.startColor === ALC_COLORS.YELLOW) this.badTemp = '78.2°';
        else this.badTemp = '64.2°';
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.currentColor;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        ctx.strokeStyle = ALC_COLORS.WALL;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
        
        const fontSize = Math.min(12, this.w / 8, this.h / 5);
        ctx.fillStyle = 'rgba(255,255,255,0.7)';
        ctx.font = `${fontSize}px "Roboto Mono", monospace`;
        ctx.fillText(this.name, this.x + 8, this.y + 18);

        const temp = this.isOptimized ? "72.0°" : this.badTemp;
        ctx.font = `bold ${fontSize + 2}px "Roboto Mono", monospace`;
        ctx.fillStyle = this.isOptimized ? "#fff" : "rgba(255,255,255,0.5)";
        ctx.fillText(temp, this.x + 8, this.y + 36);
      }

      update(currentScanX: number) {
        if (currentScanX > this.x && !this.isOptimized) {
          this.isOptimized = true;
          this.currentColor = ALC_COLORS.GREEN;
        }
      }
    }

    function generateFloorPlan(x: number, y: number, w: number, h: number, depth: number) {
      const minSize = 80; 
      if (depth <= 0 || (w < minSize * 2 && h < minSize * 2)) {
        if(w >= minSize && h >= minSize) {
          zones.push(new Zone(x, y, w, h));
        }
        return;
      }

      const splitHorizontally = Math.random() > 0.5;

      if (splitHorizontally && h > minSize * 2) {
        const splitH = minSize + Math.random() * (h - minSize * 2);
        generateFloorPlan(x, y, w, splitH, depth - 1);
        generateFloorPlan(x, y + splitH, w, h - splitH, depth - 1);
      } else if (w > minSize * 2) {
        const splitW = minSize + Math.random() * (w - minSize * 2);
        generateFloorPlan(x, y, splitW, h, depth - 1);
        generateFloorPlan(x + splitW, y, w - splitW, h, depth - 1);
      } else {
         if(w >= minSize && h >= minSize) {
            zones.push(new Zone(x, y, w, h));
         }
      }
    }

    function createNewBuilding() {
      zones = [];
      roomNameIndex = 0;
      const bW = width * (0.4 + Math.random() * 0.15);
      const bH = height * (0.5 + Math.random() * 0.2);
      const bX = width * 0.95 - bW;
      const bY = (height - bH) / 2;

      generateFloorPlan(bX, bY, bW, bH, 4);
      scanX = bX - 100;
      isWaiting = false;
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createNewBuilding();
    }

    function draw() {
      if (!ctx) return;
      frameCount++;
      requestAnimationFrame(draw);
      
      ctx.fillStyle = ALC_COLORS.BG;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = ALC_COLORS.GRID;
      ctx.lineWidth = 1;
      for (let i = 0; i < width; i += 60) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 0; j < height; j += 60) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      zones.forEach((z) => {
        z.update(scanX);
        z.draw();
      });

      const buildingStartX = zones.length > 0 ? zones.reduce((min, z) => Math.min(min, z.x), Infinity) : 0;
      const buildingEndX = zones.length > 0 ? zones.reduce((max, z) => Math.max(max, z.x + z.w), 0) : width;
      const buildingMinY = zones.length > 0 ? zones.reduce((min, z) => Math.min(min, z.y), Infinity) : 0;
      const buildingMaxY = zones.length > 0 ? zones.reduce((max, z) => Math.max(max, z.y + z.h), 0) : 0;
      const buildingCenterX = buildingStartX + (buildingEndX - buildingStartX) / 2;

      if (scanX < buildingEndX + 100) {
        scanX += 4;

        const grad = ctx.createLinearGradient(scanX - 150, 0, scanX, 0);
        grad.addColorStop(0, 'rgba(0, 255, 136, 0)');
        grad.addColorStop(1, 'rgba(0, 255, 136, 0.15)');
        ctx.fillStyle = grad;
        ctx.fillRect(scanX - 150, 0, 150, height);

        ctx.strokeStyle = ALC_COLORS.SCAN;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(scanX, 0);
        ctx.lineTo(scanX, height);
        ctx.stroke();

      } else {
        if (!isWaiting) {
          isWaiting = true;
          setTimeout(() => {
             zones.forEach(z => {
                z.isOptimized = false;
                z.currentColor = z.startColor;
            });
            createNewBuilding();
          }, 4000);
        }
      }

      if (isWaiting) {
          // Draw "AUTOPILOT COMPLETE" below the building
          ctx.font = 'bold 16px "Roboto Mono", monospace';
          ctx.fillStyle = ALC_COLORS.GREEN;
          ctx.textAlign = 'center';
          ctx.globalAlpha = Math.min(1, (frameCount - (scanX/4)) / 60); // Fade in
          ctx.fillText("AUTOPILOT COMPLETE", buildingCenterX, buildingMaxY + 30);
          ctx.globalAlpha = 1;
          ctx.textAlign = 'left';
      } else {
          // Draw "ANALYZING" bubble above the building
          const flashAlpha = 0.6 + Math.sin(frameCount * 0.1) * 0.4;
          ctx.globalAlpha = flashAlpha;
          ctx.fillStyle = ALC_COLORS.RED;
          ctx.beginPath();
          ctx.roundRect(buildingCenterX - 60, buildingMinY - 35, 120, 25, 12);
          ctx.fill();
          
          ctx.fillStyle = 'white';
          ctx.font = 'bold 10px "Roboto Mono", monospace';
          ctx.textAlign = 'center';
          ctx.fillText('● ANALYZING', buildingCenterX, buildingMinY - 19);
          ctx.globalAlpha = 1.0;
          ctx.textAlign = 'left';
      }
    }
    
    let animationFrameId: number;
    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      if(animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="tech-hero">
      <canvas ref={canvasRef} id="thermalCanvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="mb-12">
            <Image
                src="/images/AutomatedLogic_logo_AD_wr_300.png"
                alt="Automated Logic Authorized Dealer"
                width={300}
                height={85}
                priority
            />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white">
          Put Your Building in Cruise Control.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-xl">
          Our mission is to create optimal and efficient building environments
          that enable people and businesses to achieve their highest potential.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-start justify-start gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="#methodology">Our Methodology</Link>
          </Button>
          <Button asChild size="lg" variant="accent">
            <Link href="#services">Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
