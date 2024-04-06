import { LandingNavbar } from "@/components/landing-navbar";
import { LandingHero } from "@/components/landing-hero";
import { LandingContent } from "@/components/landing-content";

const LandingPage = () => {
  return ( 
    <div className="h-full bg-[url('/path/to/your/image.jpg')] bg-cover bg-center">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
   );
}
 
export default LandingPage;
