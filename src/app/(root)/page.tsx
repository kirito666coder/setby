import Loader from '@/components/Loader';
import AboutSection from './AboutSection';
import FeaturedSection from './FeaturedSection';
import FooterSection from './FooterSection';
import HeroSection from './HeroSection';

export default function Home() {
  return (
    <Loader>
      <HeroSection />
      <AboutSection />
      <FeaturedSection />
      <FooterSection />
    </Loader>
  );
}
