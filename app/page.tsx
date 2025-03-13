import { LinkPreview } from "@/components/ui/link-preview";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black px-4 py-6 sm:py-10">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center w-full">
        {/* Logo */}
        <Image 
          src="/full_logo.svg" 
          alt="Elan Logo" 
          className="w-48 sm:w-56 md:w-64 mb-6 sm:mb-8"
          width={256}
          height={80}
          priority
        />
        
        {/* Coming Soon Text */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-3 sm:py-5">
          <VelocityScroll className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Coming <span className="text-black dark:text-white">Soon</span>
          </VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>

        <p className="text-lg sm:text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-8 sm:mb-12 px-2">
          {"We're working hard to bring you the best drive test rental experience. Our website is under construction, but we'll be ready to serve you soon!"}
        </p>
        
        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 mb-8 sm:mb-10 w-full">
          <div className="flex flex-col items-center w-full md:w-auto">
            <p className="mb-3 sm:mb-4 text-base sm:text-lg font-medium">💠Follow us on Facebook</p>
            <LinkPreview 
              url="https://www.facebook.com/profile.php?id=61573941594288" 
              className="font-bold text-[#4CAF50] hover:underline text-sm sm:text-base"
            >
              Elan Facebook Page
            </LinkPreview>
          </div>
          
          <div className="flex flex-col items-center w-full md:w-auto mt-6 md:mt-0">
            <p className="mb-3 sm:mb-4 text-base sm:text-lg font-medium">🟢Check out our Blog</p>
            <LinkPreview 
              url="https://blog.elandrivetestrental.ca" 
              className="font-bold text-[#4CAF50] hover:underline text-sm sm:text-base"
            >
              Elan Blog
            </LinkPreview>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-8 sm:mt-12">
          <p className="text-sm sm:text-base text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Elan Drive Test Rental. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}