"use client";
import { Calculator, Menu, X } from "lucide-react";
import Navbar from "./navbar";
import { useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const handleHamburgerClick = () => setNav(!nav);
  if (!nav) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 px-8">
          <span className="flex text-2xl font-bold cursor-pointer hover:text-primary">
            <Calculator size={32} className="mr-2 rotate-12 text-primary" />
            BudgetBuddy
          </span>
          <div
            onClick={handleHamburgerClick}
            className="z-10 flex items-center cursor-pointer md:hidden"
          >
            {!nav ? (
              <Menu size={32} className="hover:text-primary" />
            ) : (
              <X size={32} className="hover:text-primary" />
            )}
          </div>
          <div className="hidden md:inline-block">
            <Navbar />
          </div>
          <div
            className={
              !nav
                ? "hidden"
                : "fixed md:hidden top-16 left-0 w-full h-96 border-t bg-background flex flex-col justify-center items-center"
            }
          >
            <div>
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
