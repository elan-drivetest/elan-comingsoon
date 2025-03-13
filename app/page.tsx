import { LinkPreview } from "@/components/ui/link-preview";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";

export default function ComingSoon() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white dark:bg-black">
      <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center px-4">
        {/* Logo */}
        <Image 
          src="/full_logo.svg" 
          alt="Elan Logo" 
          className="w-64 mb-8"
        />
        
        {/* Coming Soon Text */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-5">
          <VelocityScroll>Coming <span className="text-black">Soon</span></VelocityScroll>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
        </div>

        <p className="text-xl md:text-2xl text-neutral-700 dark:text-neutral-300 mb-12">
          {"We're working hard to bring you the best drive test rental experience. Our website is under construction, but we'll be ready to serve you soon!"}
        </p>
        
        {/* Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg font-medium">💠Follow us on Facebook</p>
            <LinkPreview 
              url="https://www.facebook.com/profile.php?id=61573941594288" 
              className="font-bold text-[#4CAF50] hover:underline"
            >
              Elan Facebook Page
            </LinkPreview>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="mb-4 text-lg font-medium">🟢Check out our Blog</p>
            <LinkPreview 
              url="https://blog.elandrivetestrental.ca" 
              className="font-bold text-[#4CAF50] hover:underline"
            >
              Elan Blog
            </LinkPreview>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12">
          <p className="text-neutral-500 dark:text-neutral-400">
            &copy; {new Date().getFullYear()} Elan Drive Test Rental. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}