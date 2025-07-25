import { AboutSection } from "@/components/sections/about/about";
import { ContactUs } from "@/components/sections/contact/contactus";
import HeroSection from "@/components/sections/hero/HeroSction";
import { ServivesSection } from "@/components/sections/services/services";
import StickyAppointmentBar from "@/components/ui/stikyappointementbar";
import App from "./app";
import DentalChatbot from "@/components/ai/chat";

export default function Home() {
  return (

      
        <App>
          <HeroSection/>
          <AboutSection/>
          <ServivesSection/>
          <ContactUs/>
          <StickyAppointmentBar/>
          <DentalChatbot/>
        </App>
      

    
  );
}
