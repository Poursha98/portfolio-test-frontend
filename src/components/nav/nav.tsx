"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Portfolio</h1>
        <nav className="hidden md:flex space-x-4">
          <Button className="text-white hover:scale-[1.1] transition-all">
            About
          </Button>
          <Button className="text-white hover:scale-[1.1] transition-all">
            Services
          </Button>
          <Button className="text-white hover:scale-[1.1] transition-all">
            Portfolio
          </Button>
          <Button className="text-white hover:scale-[1.1] transition-all">
            Contact
          </Button>
        </nav>
        <Button
          className="md:hidden relative bg-slate-600 hover:bg-slate-700 w-10 h-10"
          onClick={toggleMenu}
        >
          <AnimatePresence initial={false} mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <X />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Menu />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary shadow-md overflow-hidden"
          >
            <nav className="flex flex-col items-center py-4 justify-center h-full gap-12">
              <Button className="w-fit text-white hover:scale-[1.1] transition-all bg-primary !shadow-none">
                About
              </Button>
              <Button className="w-fit text-white hover:scale-[1.1] transition-all bg-primary !shadow-none">
                Services
              </Button>
              <Button className="w-fit text-white hover:scale-[1.1] transition-all bg-primary !shadow-none">
                Portfolio
              </Button>
              <Button className="w-fit text-white hover:scale-[1.1] transition-all bg-primary !shadow-none">
                Contact
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
