import { useEffect, useRef } from 'react';

const SPACING = 30;
const BASE_RADIUS = 1.4;
const MAX_RADIUS = 4.5;
const MOUSE_RADIUS = 160;
const BASE_OPACITY = 0.13;
const MAX_OPACITY = 0.65;
const MAX_PUSH = 10;
const LERP_SPEED = 0.075;
/* const DOT_COLOR = '0, 82, 255'; */
const DOT_COLOR = '59, 130, 246';

export default function HeroBackground() {
  const canvasRef = useRef(null);
  const targetMouse = useRef({ x: -9999, y: -9999 });
  const smoothMouse = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let width, height;

    const resize = () => {
      width = canvas.parentElement.offsetWidth;
      height = canvas.parentElement.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';
      ctx.scale(dpr, dpr);
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      smoothMouse.current.x = lerp(smoothMouse.current.x, targetMouse.current.x, LERP_SPEED);
      smoothMouse.current.y = lerp(smoothMouse.current.y, targetMouse.current.y, LERP_SPEED);

      const mx = smoothMouse.current.x;
      const my = smoothMouse.current.y;

      const cols = Math.ceil(width / SPACING) + 1;
      const rows = Math.ceil(height / SPACING) + 1;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const bx = i * SPACING;
          const by = j * SPACING;
          const dx = bx - mx;
          const dy = by - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const influence = dist < MOUSE_RADIUS ? 1 - dist / MOUSE_RADIUS : 0;

          const radius = BASE_RADIUS + (MAX_RADIUS - BASE_RADIUS) * influence;
          const opacity = BASE_OPACITY + (MAX_OPACITY - BASE_OPACITY) * influence;

          const angle = Math.atan2(dy, dx);
          const px = bx + Math.cos(angle) * MAX_PUSH * influence;
          const py = by + Math.sin(angle) * MAX_PUSH * influence;

          ctx.beginPath();
          ctx.arc(px, py, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${DOT_COLOR}, ${opacity})`;
          ctx.fill();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      targetMouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const onMouseLeave = () => {
      targetMouse.current = { x: -9999, y: -9999 };
    };

    resize();
    draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* Dot-grid canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Gradient overlays */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(52%_40%_at_50%_50%,#ffffff_31.73%,rgba(255,255,255,0)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-64 pointer-events-none bg-[linear-gradient(to_bottom,#ffffff_0%,rgba(255,255,255,0.6)_40%,transparent_100%)]" />
      <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-white to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 pointer-events-none bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
