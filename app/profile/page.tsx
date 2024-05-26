import { BentoCard, BentoGrid } from "@/components/magic-ui/bento-grid";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import BentoWhatIDo from "@/components/BentoWhatIDo";
import BentoLanguages from "@/components/BentoLanguages";
import BentoBio from "@/components/BentoBio";

// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Bio",
//     description: "Bonjour! I'm Henri, a franco-british passionate Front-End Developer",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-transparent",
//   },
//   // {
//   //   Icon: InputIcon,
//   //   name: "What I do",
//   //   description: "I'm a Front-End Developer and I love to create beautiful and functional web applications.",
//   //   href: "/",
//   //   cta: "Learn more",
//   //   background: <img className="absolute -right-20 -top-20 opacity-60" />,
//   //   className: "",
//   // },
//   {
//     Icon: GlobeIcon,
//     name: "",
//     description: "Supports 100+ languages and counting.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Background",
//     description: "Use the calendar to filter your files by date.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//   },
//   {
//     Icon: BellIcon,
//     name: "Techs I've used",
//     description:
//       "Get notified when someone shares a file or mentions you in a comment.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
//   },
// ];

export default async function BentoDemo() {
  return (
    <BentoGrid className="lg:grid-rows-3 h-[100%]">
      <BentoLanguages className="lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3 h-[100%]"/>
      <BentoWhatIDo className="lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4"/>
      <BentoBio className="lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3 bg-transparent"/>
    </BentoGrid>
  );
}
