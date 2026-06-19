import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Hero/Hero';
import Business from '@/components/Business/Business';
import Product from '@/components/Product/Product';
import Operations from '@/components/Operations/Operations';
import Team from '@/components/Team/Team';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Business />
      <Product />
      <Operations />
      <Team />
    </main>
  );
}
