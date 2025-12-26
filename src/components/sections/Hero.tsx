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
    };

    let zones: Zone[] = [];
    let scanX = 0;
    let width: number, height: number;
    let isWaiting = false;
    let optimizationTextAlpha = 0;

    class Zone {
      x: number;
      y: number;
      w: number;
      h: number;
      startColor: string;
      currentColor: string;
      isOptimized: boolean;

      constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        const palette = [ALC_COLORS.RED, ALC_COLORS.YELLOW, ALC_COLORS.BLUE];
        this.startColor = palette[Math.floor(Math.random() * palette.length)];
        this.currentColor = this.startColor;
        this.isOptimized = false;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.currentColor;
        ctx.fillRect(this.x, this.y, this.w, this.h);

        ctx.strokeStyle = ALC_COLORS.WALL;
        ctx.lineWidth = 1;
        ctx.strokeRect(this.x, this.y, this.w, this.h);
      }

      update(currentScanX: number) {
        if (currentScanX > this.x && !this.isOptimized) {
          this.isOptimized = true;
          this.currentColor = ALC_COLORS.GREEN;
        }
      }
    }

    function generateFloorPlan(x: number, y: number, w: number, h: number, depth: number) {
      const minSize = 50;
      if (depth <= 0 || (w < minSize * 2 && h < minSize * 2)) {
        zones.push(new Zone(x, y, w, h));
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
        zones.push(new Zone(x, y, w, h));
      }
    }

    function createNewBuilding() {
      zones = [];
      const bW = width * (0.4 + Math.random() * 0.15);
      const bH = height * (0.5 + Math.random() * 0.2);
      const bX = width * 0.9 - bW;
      const bY = (height - bH) / 2;

      generateFloorPlan(bX, bY, bW, bH, 4);
      scanX = bX - 100;
      isWaiting = false;
      optimizationTextAlpha = 0;
    }

    function resize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      createNewBuilding();
    }

    function draw() {
      if (!ctx) return;
      animationFrameId = requestAnimationFrame(draw);
      
      ctx.fillStyle = ALC_COLORS.BG;
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
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

      const buildingEndX = zones.length > 0 ? zones.reduce((max, z) => Math.max(max, z.x + z.w), 0) : width;

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
          setTimeout(createNewBuilding, 4000);
        }
        
        if (optimizationTextAlpha < 1) {
            optimizationTextAlpha += 0.02;
        }
        
        if (zones.length > 0) {
            const minX = zones.reduce((min, z) => Math.min(min, z.x), Infinity);
            const maxX = zones.reduce((max, z) => Math.max(max, z.x + z.w), -Infinity);
            const minY = zones.reduce((min, z) => Math.min(min, z.y), Infinity);
            const maxY = zones.reduce((max, z) => Math.max(max, z.y + z.h), -Infinity);

            const gridWidth = maxX - minX;
            const centerX = minX + gridWidth / 2;
            const centerY = minY + (maxY - minY) / 2;

            const fontSize = gridWidth / 10;

            ctx.globalAlpha = Math.min(1, optimizationTextAlpha);
            ctx.fillStyle = 'white';
            ctx.font = `bold ${fontSize}px "Inter", sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Optimization', centerX, centerY - fontSize / 2);
            ctx.fillText('Complete', centerX, centerY + fontSize / 2);
            ctx.globalAlpha = 1;
        }
      }
    }
    
    let animationFrameId: number;
    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="tech-hero">
      <canvas ref={canvasRef} id="thermalCanvas"></canvas>
      <div className="hero-overlay"></div>
      <div className="hero-content">
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
