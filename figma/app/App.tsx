import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { ZingFactor } from "./components/zing-factor";
import { MenuGrid } from "./components/menu-grid";
import { SocialProof } from "./components/social-proof";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ZingFactor />
      <MenuGrid />
      <SocialProof />
      <Footer />
    </div>
  );
}
