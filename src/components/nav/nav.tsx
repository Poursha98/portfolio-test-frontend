"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Portfolio</h1>
        <nav className="hidden md:flex space-x-4">
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Services</Button>
          <Button variant="ghost">Portfolio</Button>
          <Button variant="ghost">Contact</Button>
        </nav>
        <Button className="md:hidden" onClick={toggleMenu}>
          Menu
        </Button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-md"
        >
          <nav className="flex flex-col items-center py-4">
            <Button variant="ghost" className="w-full">
              About
            </Button>
            <Button variant="ghost" className="w-full">
              Services
            </Button>
            <Button variant="ghost" className="w-full">
              Portfolio
            </Button>
            <Button variant="ghost" className="w-full">
              Contact
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
