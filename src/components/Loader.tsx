'use client';

import { gsap } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';

export default function Loader({ children }: { children: React.ReactNode }) {
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('#Loader', {
      y: '-100%',
      stagger: 0.1,
      duration: 2,
      ease: 'power4.inOut',
    });
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-50 flex h-screen w-screen">
        <div className="bg-setby h-full w-[5%]" id="Loader" />
        <div className="bg-setby h-full w-[30%]" id="Loader" />
        <div className="bg-setby h-full w-[30%]" id="Loader" />
        <div className="bg-setby h-full w-[30%]" id="Loader" />
        <div className="bg-setby h-full w-[5%]" id="Loader" />
      </div>
      {children}
    </>
  );
}
