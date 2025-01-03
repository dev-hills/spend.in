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
    <main className="bg-[#0D121f] overflow-hidden relative">
      <Navbar />
      {/* <div className="bg-transparent w-[800px] h-[800px] rounded-full absolute z-[100] border-[100px] sm:border-[60px] md:border-[60px] border-[#ffffff0d] right-[-22%] top-[-15%] sm:right-[-100%] md:right-[-55%] md:top-[-20%]"></div>
      <div className="bg-transparent w-[800px] h-[800px] rounded-full absolute z-[100] border-[100px] sm:border-[60px] md:border-[60px] border-[#ffffff0d] left-[-28%] sm:left-[-130%] md:left-[-50%] bottom-[67%] sm:top-[16%]"></div>
      <div className="bg-white w-[800px] h-[800px] rounded-full absolute z-[100] blur-3xl opacity-5 left-[-30%] sm:left-[-160%] md:left-[-80%] bottom-[80%] sm:bottom-[70%]"></div>
      <div className="bg-white w-[800px] h-[800px] rounded-full absolute z-[100] blur-3xl opacity-5 right-[-25%] sm:left-[-160%] md:left-[-80%] bottom-[50%] sm:bottom-[70%]"></div> */}
      <Hero />
      <Benefits />
      <HowItWorks />
      <SuccessStories />
      <Testimonials />
      {/* Todo: Go and redo Testimonial Carousel */}
      <Pricing />
      <CallToAction />
      <Footer />
    </main>
  );
}
