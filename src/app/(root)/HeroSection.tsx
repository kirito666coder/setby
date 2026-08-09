import Button from '@/components/Button';
import Cargo from './components/Cargo';
import PlayButton from '@/components/PlayButton';

export default function HeroSection() {
  return (
    <div className="relative">
      <div className="relative">
        <div className="sticky top-0 z-20 h-0">
          <div className="h-screen overflow-hidden">
            <Cargo />
          </div>
        </div>

        <section className="h-screen overflow-hidden">
          <h1 className="font-ops absolute bottom-[12vh] left-1/2 z-30 w-full -translate-x-1/2 text-center text-[clamp(3.5rem,14vw,10rem)] leading-[0.8] md:top-[20vh] md:bottom-auto md:left-5 md:w-fit md:translate-x-0 md:text-left lg:z-10">
            Precision
          </h1>
          <h1 className="font-ops absolute bottom-[2vh] left-1/2 z-30 w-full -translate-x-1/2 text-center text-[clamp(3.5rem,14vw,10rem)] leading-[0.8] md:right-5.75 md:bottom-9 md:left-auto md:w-fit md:translate-x-0 md:text-right lg:z-10">
            Delivery
          </h1>
          <Button
            text="Let’s get your cargo"
            className="absolute bottom-[24vh] left-1/2 z-30 -translate-x-1/2 md:right-auto md:bottom-9 md:left-33"
          />
          <PlayButton className="absolute z-30 hidden md:bottom-40 md:left-5 md:block" />
          <h4 className="absolute z-30 hidden cursor-pointer md:bottom-90 md:left-6.5 md:block">
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
              <div key={label} className="flex flex-col">
                <span className="mt-5 text-center text-5xl leading-none font-medium">{number}</span>

                <span className="mt-2 text-right text-xs tracking-widest uppercase opacity-60">
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
