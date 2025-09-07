"use client";
    import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    } from "@/components/ui/Navigation";
import { useState } from "react";
import { GoogleStoreImgSVG } from "./icon/GooglePlayStore";

export default function ResizableNavigation() {
  const navItems = [
    {
      name: "PRODUCTS",
      link: "#products",
    },
    {
      name: "SOLUTIONS",
      link: "#solutions",
    },
    {
      name: "PRICING",
      link: "#pricing",
    },
    {
        name: "ABOUT",
        link: "#about",
    },
    {
        name: "SUPPORT",
        link: "#support",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full mx-auto fixed top-0 left-0 right-0 z-50 mt-4 shadow-2xl rounded-3xl bg-white px-2 py-2">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary" className="text-md bg-black text-white">FOR BUSINESSES</NavbarButton>
            <NavbarButton variant="primary" className="text-md bg-black text-white">
                <span className="flex items-center gap-2">
                    <GoogleStoreImgSVG width={20} height={20} />
                    DOWNLOAD THE APP
                </span>
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                FOR BUSINESSES
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                <GoogleStoreImgSVG width={20} height={20} />
                DOWNLOAD THE APP
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {/* Navbar */}
    </div>
  );
}
