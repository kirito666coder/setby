'use client';

import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gsap } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function Cargo() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [scale, setScale] = useState(1);
  const [desiredRadius, setDesiredRadius] = useState(120);

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

    const scaleX = rect.width / e.currentTarget.offsetWidth;
    const scaleY = rect.height / e.currentTarget.offsetHeight;

    setScale(scaleX);
    setMouse({
      x: (e.clientX - rect.left) / scaleX,
      y: (e.clientY - rect.top) / scaleY,
    });
  };

  const maskRadius = desiredRadius / scale;
  const circleSize = (desiredRadius * 2) / scale;

  const cargoRef = useRef<null | HTMLDivElement>(null);

  const { isTablet } = useBreakpoint();

  const mTop = isTablet ? -80 : -600;
  const s = isTablet ? 1.8 : 0.8;

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(cargoRef.current, {
      marginTop: mTop,
      duration: 1,
      ease: 'power2.inOut',
      delay: 0.5,
    });
    tl.from(cargoRef.current, {
      scale: s,
      duration: 1,
      ease: 'power2.inOut',
    });
  });

  return (
    <div
      id="cargo"
      ref={cargoRef}
      className="relative z-20 mt-35 w-screen scale-200 sm:mt-40 md:h-screen md:pr-40 lg:-mt-20 lg:scale-95"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="relative">
        <Image
          src="/cargo-white.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute top-0 left-0 block origin-center -translate-x-[36px] translate-y-[26px] scale-110 md:mt-4 md:pr-3"
          style={{ filter: 'brightness(0)', opacity: 0.45 }}
          aria-hidden
        />

        <Image
          src="/cargo-white.png"
          alt=""
          width={2000}
          height={2000}
          className="relative block"
        />
      </div>

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
