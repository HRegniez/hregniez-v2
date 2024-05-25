import Link from "next/link";
import { Button } from "./ui/button";


export const Nav = () => {
  return (
    <nav>
      <Button variant="outline"><Link href="/">Home</Link></Button>
      <Button ><Link href="/about">About</Link></Button>
      <Button variant="destructive"><Link href="/projects">Projects</Link></Button>
    </nav>
  );
};

