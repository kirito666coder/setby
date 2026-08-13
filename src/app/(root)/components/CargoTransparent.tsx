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
    gsap.to('#cargo-info', {
      scrollTrigger: {
        trigger: '#about-2',
        start: 'bottom bottom',
        end: '+=300',
        scrub: true,
      },
      scale: 1,
      opacity: 1,
    });

    const t = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-4',
        start: 'bottom bottom',
        end: '+=1200 bottom',
        scrub: true,
        markers: true,
      },
    });

    t.to(
      '#cargo-info',
      {
        opacity: 0,
        duration: 2,
      },
      '<',
    );

    t.to(
      '#about-main-cargo',
      {
        opacity: 0,
        duration: 2,
      },
      '<',
    );
    t.to(
      '#about-logo',
      {
        opacity: 1,
      },
      '<',
    );

    t.to(
      '#about-3, #about-4 , #about-5',
      {
        backgroundColor: '#ff5c32',
      },
      '<',
    );

    gsap.to('#hero-cargo', {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 30%, 0% 30%)',

      scrollTrigger: {
        trigger: '#about',
        start: 'top top',
        end: '+=500',
        scrub: true,
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

    const at = gsap.timeline({
      scrollTrigger: {
        trigger: '#about-5',
        start: 'top bottom',
        end: '+=1200 top',
        scrub: true,
        markers: true,
      },
    });

    at.to(
      '#about-logo',
      {
        xPercent: -1500,
        scale: 50,
        opacity: 0,
      },
      '<',
    );

    at.to(
      ' #about-4 , #about-5',
      {
        backgroundColor: '#ffffff',
      },
      '<',
    );
  });

  return (
    <div
      ref={cargoRef}
      className="relative z-20 -mt-10 w-screen scale-200 sm:mt-40 md:h-screen md:pr-40 lg:-mt-35 lg:scale-95"
    >
      <div id="about-main-cargo" className="relative mt-36.75 ml-2.75 md:mt-13 md:ml-7.5">
        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="absolute top-0 left-0 block origin-center -translate-x-[36px] translate-y-[50px] scale-127 md:mt-4 md:translate-y-[80px] md:pr-3"
          style={{ filter: 'brightness(0)', opacity: 0.45 }}
          aria-hidden
        />

        {/* Main image */}
        <Image
          src="/cargo.png"
          alt=""
          width={2000}
          height={2000}
          className="relative block origin-top scale-114"
        />

        <div
          id="cargo-info"
          className="pointer-events-none absolute inset-0 z-30 scale-80 opacity-0"
        >
          <div className="absolute top-[30%] right-[0%]">
            {/* Info box */}
            <div className="relative ml-32 border border-black/40 bg-black/5 px-5 py-3 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.25em] text-black/50">CARGO SYSTEM</p>

              <p className="mt-1 text-sm font-medium text-black">Precision Engineering</p>
            </div>

            {/* Connector */}
            <svg
              className="absolute top-0 -left-6 h-32 w-40 overflow-visible"
              viewBox="0 0 160 130"
              fill="none"
            >
              <path
                d="M0 110 L65 110 L130 35 L160 35"
                stroke="#FF5C32"
                strokeOpacity="0.45"
                strokeWidth="4"
              />

              {/* image-side dot */}
              <circle cx="0" cy="110" r="3" fill="#FF5C32" fillOpacity="0.8" />

              {/* box-side dot */}
              <circle cx="160" cy="35" r="3" fill="#FF5C32" fillOpacity="0.8" />
            </svg>
          </div>

          <div className="absolute top-[40%] left-[0%]">
            <div className="relative mr-32 border border-black/40 bg-black/5 px-5 py-3 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.25em] text-black/50">GLOBAL NETWORK</p>

              <p className="mt-1 text-sm font-medium text-black">190+ Countries</p>
            </div>

            <svg
              className="absolute top-0 -right-6.25 h-32 w-40 overflow-visible"
              viewBox="0 0 160 130"
              fill="none"
            >
              <path
                d="M160 110 L95 110 L30 35 L0 35"
                stroke="#FF5C32"
                strokeOpacity="0.45"
                strokeWidth="4"
              />

              <circle cx="160" cy="110" r="3" fill="#FF5C32" fillOpacity="0.8" />

              <circle cx="0" cy="35" r="3" fill="#FF5C32" fillOpacity="0.8" />
            </svg>
          </div>

          <div className="absolute right-[0%] bottom-[1%]">
            <div className="bg-blackborder-black/5 relative ml-42 border border-black/40 bg-black/5 px-5 py-3 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.25em] text-black/50">CAPACITY</p>

              <p className="mt-1 text-sm font-medium text-black">25M+ Cargo Units</p>
            </div>

            <svg
              className="absolute bottom-0 left-0 h-32 w-44 overflow-visible"
              viewBox="0 0 176 130"
              fill="none"
            >
              <path
                d="M0 20 L70 20 L135 95 L176 95"
                stroke="#FF5C32"
                strokeOpacity="0.45"
                strokeWidth="4"
              />

              <circle cx="0" cy="20" r="3" fill="#FF5C32" fillOpacity="0.8" />

              <circle cx="176" cy="95" r="3" fill="#FF5C32" fillOpacity="0.8" />
            </svg>
          </div>

          <div className="absolute bottom-[1%] left-[0%]">
            <div className="relative mr-36 border border-black/40 bg-black/5 px-5 py-3 backdrop-blur-sm">
              <p className="text-[10px] tracking-[0.25em] text-black/50">RELIABILITY</p>

              <p className="mt-1 text-sm font-medium text-black">99.9% Delivery</p>
            </div>

            <svg
              className="absolute -right-6.5 bottom-0 h-32 w-44 overflow-visible"
              viewBox="0 0 176 130"
              fill="none"
            >
              <path
                d="M176 20 L105 20 L40 95 L0 95"
                stroke="#FF5C32"
                strokeOpacity="0.45"
                strokeWidth="4"
              />

              <circle cx="176" cy="20" r="3" fill="#FF5C32" fillOpacity="0.8" />

              <circle cx="0" cy="95" r="3" fill="#FF5C32" fillOpacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <div
          id="about-logo"
          className="absolute top-1/2 left-1/2 -translate-1/2 scale-100 opacity-0"
        >
          <div className="ml-10 flex h-20 w-50 items-center justify-center">
            <div
              className="h-full w-2/5 bg-white"
              style={{
                clipPath: 'polygon(0 50%, 100% 0, 100% 50%, 0% 100%)',
              }}
            />
            <div
              className="h-full w-2/5 bg-black"
              style={{
                clipPath: 'polygon(0 50%, 100% 0, 100% 50%, 0% 100%)',
              }}
            />
            <div
              className="text-setby flex h-full w-3/5 items-end justify-end bg-white text-2xl font-bold"
              style={{
                clipPath: 'polygon(50% 0%, 100% 0, 100% 50%, 100% 100%, 0 100%, 0% 50%)',
              }}
            >
              Setby.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
