import AboutSection from './AboutSection';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="bg-setby relative h-[200vh] w-screen">
        <div className="sticky top-0 scale-110">
          <video autoPlay loop muted>
            <source src="/Logistics Stock Video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
