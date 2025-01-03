import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import SuccessStories from "@/components/SuccessStories";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="bg-[#0D121f] text-white overflow-hidden relative">
      <Navbar />
      {/* Style the elements for small and medium screens */}
      {/* Add animations */}
      <div className="bg-transparent w-[800px] h-[800px] rounded-full absolute z-[100] border-[100px] sm:border-[60px] md:border-[60px] border-[#ffffff0d] right-[-23%] top-[-5%] sm:right-[-100%] md:right-[-55%] md:top-[-20%]"></div>
      <div className="bg-transparent w-[800px] h-[800px] rounded-full absolute z-[100] border-[100px] sm:border-[60px] md:border-[60px] border-[#ffffff0d] left-[-25%] top-[6%] sm:left-[-130%] md:left-[-50%] sm:top-[16%]"></div>
      <div className="bg-white w-[800px] h-[800px] rounded-full absolute z-[100] blur-3xl opacity-5 left-[-30%] sm:left-[-160%] md:left-[-80%] bottom-[95%] sm:bottom-[70%]"></div>
      <div className="bg-white w-[800px] h-[800px] rounded-full absolute z-[100] blur-3xl opacity-5 right-[-25%] sm:left-[-160%] md:left-[-80%] bottom-[82%] sm:bottom-[70%]"></div>
      <Hero />
      <Benefits />
      <HowItWorks />
      <SuccessStories />
      <Testimonials />
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
