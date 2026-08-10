'use client';

import { gsap } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { useRef } from 'react';

export default function CargoTransparent() {
  const cargoRef = useRef<null | HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(cargoRef.current, {
      scrollTrigger: {
        trigger: cargoRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 1,
      duration: 1,
    });
    gsap.to('#cargo', {
      scrollTrigger: {
        trigger: cargoRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      opacity: 0,
      duration: 1,
    });
  });

  return (
    <div
      ref={cargoRef}
      className="relative z-20 mt-35 w-screen scale-200 opacity-0 sm:mt-40 md:h-screen md:pr-40 lg:-mt-20 lg:scale-95"
    >
      <div className="relative mt-36.75 ml-2.75 md:mt-13 md:ml-7.5">
        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute top-0 left-0 block origin-center -translate-x-[36px] translate-y-[26px] scale-127 md:mt-4 md:pr-3"
          style={{ filter: 'brightness(0)', opacity: 0.45 }}
          aria-hidden
        />

        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="relative block scale-115"
        />
      </div>
    </div>
  );
}
