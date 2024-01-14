import Link from "next/link";
import { Button } from "./ui/button";

function Navbar() {
  return (
    <nav className="flex flex-col gap-8 font-semibold md:flex-row">
      <ul className="flex flex-col items-center gap-8 md:flex-row group">
        <li>
          <Button className="text-2xl text-white md:text-sm" variant="link">
            Home
          </Button>
        </li>
        <li>
          <Button className="text-2xl text-white md:text-sm" variant="link">
            About
          </Button>
        </li>
        <li>
          <Button className="text-2xl text-white md:text-sm" variant="link">
            Pricing
          </Button>
        </li>
      </ul>
      <Button className="text-sm font-semibold">
        <Link href="login">Login</Link>
      </Button>
    </nav>
  );
}

export default Navbar;
