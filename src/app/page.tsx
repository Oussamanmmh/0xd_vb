import { AboutSection } from "@/components/sections/about/about";
import { ContactUs } from "@/components/sections/contact/contactus";
import HeroSection from "@/components/sections/hero/HeroSction";
import DentalLoadingScreen from "@/components/sections/load";
import { ServivesSection } from "@/components/sections/services/services";
import StickyAppointmentBar from "@/components/ui/stikyappointementbar";
import App from "./app";

export default function Home() {
  return (

      
        <App>
          <HeroSection/>
          <AboutSection/>
          <ServivesSection/>
          <ContactUs/>
          <StickyAppointmentBar/>
        </App>
      

    
  );
}
