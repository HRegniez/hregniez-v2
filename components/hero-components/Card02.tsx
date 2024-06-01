import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import AnimatedLanguages from "../AnimatedLanguages";

// Define the BentoWhatIDo component
const Card_02 = ({
  className,
}: {
  className?: string;
}) => {
  return (
    
      <Link href="/profile/what-i-do" passHref 
        className={cn(
          "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl ",
          // light styles
          "bg-primary/50 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
          // dark styles
          "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] ",
          className,
        )}
      >
        <div className="absolute inset-0">
          <AnimatedLanguages />
        </div>
        {/* Main content container */}
        <div className="pointer-events-none display-block w-full bg-primary z-10 absolute bottom-0 flex transform-gpu flex-col gap-1 p-6 transition-all duration-500 group-hover:-translate-y-12">
          {/* Title */}
          <h3 className="text-xl font-semibold text-secondary dark:text-neutral-3000">
            What I Do
          </h3>
        </div>

        {/* Call-to-action button container */}
        <div
          className={cn(
            "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-100 group-hover:translate-y-0 group-hover:opacity-100 bg-primary z-10",
          )}
        >
          <span className="pointer-events-auto flex items-center">
            Creating beautiful and functional web applications.
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </span>
        </div>
        {/* Background overlay */}
        <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
      </Link>
    
  )
}

export default Card_02;

