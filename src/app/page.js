import HeroSection from '@/components/sections/HeroSection';
import CategorySection from '@/components/sections/CategorySection';
import BestSellers from '@/components/sections/BestSellers';
import BrandStory from '@/components/sections/BrandStory';
import TrustSignals from '@/components/sections/TrustSignals';
import Newsletter from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <BestSellers />
      <BrandStory />
      <TrustSignals />
      <Newsletter />
    </>
  );
}
