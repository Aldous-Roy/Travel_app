"use client";

import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav className="flexBetween max-container padding-container relative z-50 py-5">
        {/* Logo */}
        <Image
          src="/hilink-logo.svg"
          alt="Travel App Logo"
          width={120}
          height={40}
        />

        {/* Desktop Menu */}
        <ul className="hidden h-full gap-12 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="lg:flexCenter hidden">
          <Button
            type="button"
            title="Log In"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>

        {/* Hamburger Icon (Mobile Only) */}
        <Image
          src="/menu.svg"
          alt="menu"
          width={28}
          height={28}
          className="inline-block cursor-pointer lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        />

        {/* Mobile Menu Drawer */}
        <div
          className={`
            fixed top-0 right-0 h-screen w-64 bg-green-90 z-50
            flex flex-col p-6 gap-6 shadow-xl
            transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Close Button */}
          <div className="flex justify-end">
            <Image
              src="/close.svg"
              alt="close"
              width={24}
              height={24}
              className="cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>

          {/* Links */}
          <ul className="flex flex-col gap-6 mt-4">
            {NAV_LINKS.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-white text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login Button */}
          <Button
            type="button"
            title="Log In"
            icon="/user.svg"
            variant="btn_dark_green"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;