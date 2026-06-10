import { useEffect, useRef } from 'react';
import type { ResolvedTheme } from './theme';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
};

export function ParticleTrail({ theme }: { theme: ResolvedTheme }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const coarsePointer = window.matchMedia('(pointer: coarse)').matches;
    if (reduceMotion || coarsePointer) return;

    const particles: Particle[] = [];
    let frame = 0;
    let lastX = -100;
    let lastY = -100;
    let active = true;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      const distance = Math.hypot(event.clientX - lastX, event.clientY - lastY);
      if (distance > 5) {
        const amount = Math.min(3, Math.ceil(distance / 16));
        for (let index = 0; index < amount; index += 1) {
          particles.push({
            x: event.clientX + (Math.random() - 0.5) * 8,
            y: event.clientY + (Math.random() - 0.5) * 8,
            vx: (Math.random() - 0.5) * 0.55,
            vy: (Math.random() - 0.5) * 0.55 - 0.15,
            life: 1,
            size: 1.2 + Math.random() * 2.6,
          });
        }
        if (particles.length > 90) particles.splice(0, particles.length - 90);
        lastX = event.clientX;
        lastY = event.clientY;
      }
    };

    const draw = () => {
      if (!active) return;
      context.clearRect(0, 0, width, height);
      const color = theme === 'dark' ? '255, 184, 51' : '240, 145, 0';

      for (let index = particles.length - 1; index >= 0; index -= 1) {
        const particle = particles[index];
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy -= 0.002;
        particle.life -= 0.026;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          continue;
        }

        context.beginPath();
        context.fillStyle = `rgba(${color}, ${particle.life * 0.42})`;
        context.shadowColor = `rgba(${color}, ${particle.life * 0.55})`;
        context.shadowBlur = 10;
        context.arc(
          particle.x,
          particle.y,
          particle.size * particle.life,
          0,
          Math.PI * 2,
        );
        context.fill();
      }

      frame = window.requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    frame = window.requestAnimationFrame(draw);

    return () => {
      active = false;
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="particle-canvas" aria-hidden="true" />;
}

