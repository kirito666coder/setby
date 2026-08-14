import AboutSection from './AboutSection';
import FeaturedSection from './FeaturedSection';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="relative h-[300vh] w-screen">
        <div className="sticky top-0">
          <FeaturedSection />
          {/* <video autoPlay loop muted>
            <source src="/Logistics Stock Video.mp4" type="video/mp4" />
          </video> */}
        </div>
      </div>
      <div className="h-screen w-full bg-black">1</div>
      <div className="h-screen w-full bg-white">2</div>
    </>
  );
}
