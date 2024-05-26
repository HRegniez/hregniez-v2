import Link from "next/link";
import { Button } from "./ui/button";


export const Nav = () => {
  return (
    <nav className="flex justify-between gap-4">
      <Button variant="outline"><Link href="/">Home</Link></Button>
      <Button ><Link href="/profile">About</Link></Button>
      <Button variant="destructive"><Link href="/projects">Projects</Link></Button>
    </nav>
  );
};

