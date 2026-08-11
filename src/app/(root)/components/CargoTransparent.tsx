'use client';

import { useBreakpoint } from '@/hooks/useBreakpoint';
import { gsap } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function CargoTransparent() {
  const cargoRef = useRef<null | HTMLDivElement>(null);

  const { isTablet } = useBreakpoint();

  const mTop = isTablet ? -290 : -400;
  const s = isTablet ? 1.8 : 0.8;

  useGSAP(() => {
    gsap.to('#about-cargo', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',

      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: '+=500',
        scrub: true,
      },
    });
    gsap.to('#hero-cargo', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%)',

      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: '+=500',
        scrub: true,
        markers: true,
      },
    });

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
      ref={cargoRef}
      className="relative z-20 -mt-10 w-screen scale-200 sm:mt-40 md:h-screen md:pr-40 lg:-mt-35 lg:scale-95"
    >
      <div className="relative mt-36.75 ml-2.75 md:mt-13 md:ml-7.5">
        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute top-0 left-0 block origin-center -translate-x-[36px] translate-y-[50px] scale-127 md:mt-4 md:translate-y-[80px] md:pr-3"
          style={{ filter: 'brightness(0)', opacity: 0.45 }}
          aria-hidden
        />

        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="relative block origin-top scale-114"
        />
      </div>
    </div>
  );
}
