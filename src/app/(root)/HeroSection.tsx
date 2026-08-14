'use client';
import Button from '@/components/Button';
import Cargo from './components/Cargo';
import PlayButton from '@/components/PlayButton';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/libs/gsap';

export default function HeroSection() {
  useGSAP(() => {
    gsap.from('#hero-title', {
      delay: 1,
      y: 145,
      duration: 2,
    });

    gsap.from('#hero-Button', {
      opacity: 0,
      delay: 1,
      duration: 1,
      scale: 0.7,
    });
    gsap.from('#subTitle', {
      opacity: 0,
      delay: 1.5,
      duration: 1,
    });
    gsap.from('#hero-list', {
      y: 300,
      delay: 1,
      duration: 1,
      stagger: 0.1,
    });
    gsap.from('#sub-list', {
      opacity: 0,
      delay: 1.5,
      duration: 1,
      stagger: 0.2,
    });
  });
  return (
    <div className="bg-paper relative">
      <div className="relative">
        <div className="sticky top-0 z-20 h-0">
          <div
            id="hero-cargo"
            style={{
              clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
            className="h-screen overflow-hidden"
          >
            <Cargo />
          </div>
        </div>

        <section className="h-screen overflow-hidden">
          <div className="font-ops absolute bottom-[12vh] left-1/2 z-30 w-full -translate-x-1/2 overflow-hidden py-2 text-center text-[clamp(3.5rem,14vw,10rem)] leading-[0.8] md:top-[20vh] md:bottom-auto md:left-5 md:w-fit md:translate-x-0 md:text-left lg:z-10">
            <h1 id="hero-title" className="">
              Precision
            </h1>
          </div>
          <div className="font-ops absolute bottom-[2vh] left-1/2 z-30 w-full -translate-x-1/2 overflow-hidden py-2 text-center text-[clamp(3.5rem,14vw,10rem)] leading-[0.8] md:right-5.75 md:bottom-9 md:left-auto md:w-fit md:translate-x-0 md:text-right lg:z-10">
            <h1 id="hero-title" className="">
              Delivery
            </h1>
          </div>
          <div
            id="hero-Button"
            className="absolute bottom-[24vh] left-1/2 z-30 -translate-x-1/2 md:right-auto md:bottom-9 md:left-33"
          >
            <Button text="Let’s get your cargo" className="" />
          </div>
          <div id="subTitle" className="absolute z-30 hidden md:bottom-40 md:left-5 md:block">
            <PlayButton className="" />
          </div>
          <h4
            id="subTitle"
            className="absolute z-30 hidden cursor-pointer md:bottom-90 md:left-6.5 md:block"
          >
            &#47;&#47; Since 2020
          </h4>
          <div className="absolute top-30 right-5 hidden md:block">
            {[
              ['500K +', 'Shipments Worldwide'],
              ['190 +', 'Countries Connected'],
              ['25M +', 'Cargo Units Moved'],
              ['99.9%', 'Delivery Reliability'],
              ['80 +', 'Global Hubs'],
              ['15K +', 'Active Routes'],
            ].map(([number, label]) => (
              <div key={label} className="flex flex-col overflow-hidden">
                <span
                  id="hero-list"
                  className="mt-4.25 text-center text-5xl leading-none font-medium"
                >
                  {number}
                </span>

                <span
                  id="sub-list"
                  className="mt-2 text-right text-xs tracking-widest uppercase opacity-60"
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
