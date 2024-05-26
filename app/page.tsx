import Image from "next/image";
import { BackgroundBeams } from "@/components/magic-ui/BackgroundBeams";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>Main Title</h1>
      <h2>Sub title</h2>
      <p>Paragraph</p>
      <BackgroundBeams />
    </main>
  );
}
