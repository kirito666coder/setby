'use client';
import { gsap } from '@/libs/gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

export default function FooterSection() {
  useGSAP(() => {
    gsap.from('#footer-img', {
      y: 400,
      duration: 2,
      scrollTrigger: {
        trigger: '#footer',
        start: 'top center',
        end: 'bottom bottom',
      },
    });
  });
  return (
    <div id="footer" className="bg-paper relative h-screen w-screen overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full">
        <Image src="/sky.png" fill alt="footer" className="object-cover" />
        <div id="footer-img" className="absolute bottom-0 left-0 h-full w-full">
          <Image
            src="/footer-cargo.png"
            fill
            alt="footer"
            className="object-cover md:object-fill"
          />
        </div>
      </div>
    </div>
  );
}
