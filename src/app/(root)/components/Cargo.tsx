'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Cargo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scale, setScale] = useState(1);
  const [desiredRadius, setDesiredRadius] = useState(120); // on-screen px, independent of container scale

  useEffect(() => {
    const updateRadius = () => {
      // bigger circle on desktop, as requested
      setDesiredRadius(window.innerWidth >= 768 ? 220 : 120);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    // Because the parent is scaled, convert mouse position
    // from the scaled coordinate system back to the original one.
    const scaleX = rect.width / e.currentTarget.offsetWidth;
    const scaleY = rect.height / e.currentTarget.offsetHeight;

    setScale(scaleX); // assume uniform scaling (scaleX ≈ scaleY here)
    setMouse({
      x: (e.clientX - rect.left) / scaleX,
      y: (e.clientY - rect.top) / scaleY,
    });
  };

  // Because everything inside the container gets visually multiplied by
  // the container's own CSS scale, we pre-divide by that scale so the
  // circle/mask always ends up "desiredRadius" px on screen, regardless
  // of whether we're at scale-200 (mobile) or scale-97 (desktop).
  const maskRadius = desiredRadius / scale;
  const circleSize = (desiredRadius * 2) / scale;

  return (
    <div
      className="relative z-20 mt-35 w-screen scale-200 sm:mt-40 md:h-screen md:pr-40 lg:-mt-20 lg:scale-95"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* SECOND IMAGE — exact same position */}
      <div className="relative">
        {/* SHARP SHADOW — scaled up + offset, sharp edges */}
        <Image
          src="/cargo-white.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute top-0 left-0 block origin-center -translate-x-[36px] translate-y-[26px] scale-110 md:mt-4 md:pr-3"
          style={{ filter: 'brightness(0)', opacity: 0.45 }}
          aria-hidden
        />

        {/* ACTUAL IMAGE on top */}
        <Image
          src="/cargo-white.png"
          alt=""
          width={2000}
          height={2000}
          className="relative block"
        />
      </div>

      {/* FIRST IMAGE — only revealed inside the circle when hovering */}
      <div
        className="pointer-events-none absolute top-0 left-0 transition-opacity duration-150"
        style={{
          opacity: isHovering ? 1 : 0,
          WebkitMaskImage: `radial-gradient(
            circle ${maskRadius}px at ${mouse.x}px ${mouse.y}px,
            black 0%,
            black 70%,
            transparent 100%
          )`,
          maskImage: `radial-gradient(
            circle ${maskRadius}px at ${mouse.x}px ${mouse.y}px,
            black 0%,
            black 70%,
            transparent 100%
          )`,
        }}
      >
        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="ml-[0.3340rem] block scale-113 pt-[1.111rem] md:ml-4.75 md:scale-112 md:pt-10.75 md:pr-38"
        />
      </div>

      {/* Circle following cursor */}
      {isHovering && (
        <div
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50"
          style={{
            left: mouse.x,
            top: mouse.y,
            width: circleSize,
            height: circleSize,
          }}
        />
      )}
    </div>
  );
}
