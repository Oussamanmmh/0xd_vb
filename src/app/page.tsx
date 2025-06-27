import { AboutSection } from "@/components/sections/about/about";
import { ContactUs } from "@/components/sections/contact/contactus";
import HeroSection from "@/components/sections/hero/HeroSction";
import { ServivesSection } from "@/components/sections/services/services";
import StickyAppointmentBar from "@/components/ui/stikyappointementbar";

export default function Home() {
  return (
     <>
      <div>
          <HeroSection/>
          <AboutSection/>
          <ServivesSection/>
          <ContactUs/>
          <StickyAppointmentBar/>
      </div>

     </>
  );
}
