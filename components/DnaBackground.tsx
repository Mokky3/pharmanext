"use client";

import { useEffect, useRef } from "react";

// Helix geometry, expressed in SVG user units.
const RUNGS = 32;
const GAP = 40; // vertical spacing between base pairs
const TOP = 24;
const CENTER_X = 100;
const VB_WIDTH = 200;
const RADIUS = 74;
const TWIST = 0.5; // radians of twist per rung
const VB_HEIGHT = TOP * 2 + (RUNGS - 1) * GAP;

// How strongly scroll drives rotation, and the gentle idle drift.
const SCROLL_TO_RAD = 0.006; // radians per pixel scrolled
const IDLE_RAD_PER_SEC = 0.09;

export default function DnaBackground() {
  const leftDots = useRef<(SVGCircleElement | null)[]>([]);
  const rightDots = useRef<(SVGCircleElement | null)[]>([]);
  const rungs = useRef<(SVGLineElement | null)[]>([]);
  const leftPath = useRef<SVGPolylineElement | null>(null);
  const rightPath = useRef<SVGPolylineElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let scrollPhase = window.scrollY * SCROLL_TO_RAD;
    let idlePhase = 0;
    let current = scrollPhase;

    const render = (base: number) => {
      const lpts: string[] = [];
      const rpts: string[] = [];
      for (let i = 0; i < RUNGS; i++) {
        const y = TOP + i * GAP;
        const a = i * TWIST + base;
        const cos = Math.cos(a);
        const lx = CENTER_X + RADIUS * cos;
        const rx = CENTER_X - RADIUS * cos;
        // Depth: 1 = node toward the viewer, 0 = away. Drives size + opacity.
        const lDepth = (Math.sin(a) + 1) / 2;
        const rDepth = (Math.sin(a + Math.PI) + 1) / 2;

        const ld = leftDots.current[i];
        if (ld) {
          ld.setAttribute("cx", lx.toFixed(2));
          ld.setAttribute("cy", y.toFixed(2));
          ld.setAttribute("r", (1.6 + lDepth * 2.1).toFixed(2));
          ld.setAttribute("opacity", (0.3 + lDepth * 0.7).toFixed(3));
        }
        const rd = rightDots.current[i];
        if (rd) {
          rd.setAttribute("cx", rx.toFixed(2));
          rd.setAttribute("cy", y.toFixed(2));
          rd.setAttribute("r", (1.6 + rDepth * 2.1).toFixed(2));
          rd.setAttribute("opacity", (0.3 + rDepth * 0.7).toFixed(3));
        }
        const rg = rungs.current[i];
        if (rg) {
          rg.setAttribute("x1", lx.toFixed(2));
          rg.setAttribute("y1", y.toFixed(2));
          rg.setAttribute("x2", rx.toFixed(2));
          rg.setAttribute("y2", y.toFixed(2));
          // Fade the rung as the helix turns edge-on.
          rg.setAttribute("opacity", (0.1 + Math.abs(cos) * 0.22).toFixed(3));
        }
        lpts.push(`${lx.toFixed(2)},${y.toFixed(2)}`);
        rpts.push(`${rx.toFixed(2)},${y.toFixed(2)}`);
      }
      leftPath.current?.setAttribute("points", lpts.join(" "));
      rightPath.current?.setAttribute("points", rpts.join(" "));
    };

    if (reduce) {
      render(scrollPhase);
      return;
    }

    const onScroll = () => {
      scrollPhase = window.scrollY * SCROLL_TO_RAD;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      idlePhase += dt * IDLE_RAD_PER_SEC;
      const target = scrollPhase + idlePhase;
      // Ease toward the target so scrolling feels smooth, not jerky.
      current += (target - current) * Math.min(1, dt * 6);
      render(current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 right-0 -z-10 hidden w-[44vw] max-w-[540px] opacity-70 [mask-image:linear-gradient(to_left,black_22%,transparent_92%)] md:block"
    >
      <svg
        viewBox={`0 0 ${VB_WIDTH} ${VB_HEIGHT}`}
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="dna-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#3ec0f5" />
            <stop offset="100%" stopColor="#14b8a6" />
          </linearGradient>
        </defs>

        <polyline
          ref={leftPath}
          fill="none"
          stroke="url(#dna-grad)"
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />
        <polyline
          ref={rightPath}
          fill="none"
          stroke="url(#dna-grad)"
          strokeWidth="2"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          opacity="0.5"
        />

        {Array.from({ length: RUNGS }).map((_, i) => (
          <line
            key={`rung-${i}`}
            ref={(el) => {
              rungs.current[i] = el;
            }}
            stroke="#7dd3fc"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {Array.from({ length: RUNGS }).map((_, i) => (
          <circle
            key={`l-${i}`}
            ref={(el) => {
              leftDots.current[i] = el;
            }}
            fill="#1aa7ec"
          />
        ))}
        {Array.from({ length: RUNGS }).map((_, i) => (
          <circle
            key={`r-${i}`}
            ref={(el) => {
              rightDots.current[i] = el;
            }}
            fill="#14b8a6"
          />
        ))}
      </svg>
    </div>
  );
}
