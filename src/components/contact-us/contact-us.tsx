"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion, AnimatePresence } from "framer-motion";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { User, Mail, MessageSquare, Send } from "lucide-react";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const validateForm = () => {
    if (!name.trim()) return "Name is required";
    if (!email.trim()) return "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) return "Email is invalid";
    if (!message.trim()) return "Message is required";
    return null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      setSubmitStatus("error");
      return;
    }

    console.log("Form submitted:", { name, email, message });
    setSubmitStatus("success");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-8 text-center text-white"
        >
          Get in Touch
        </motion.h2>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-black bg-opacity-75 w-full p-4 sm:p-6 md:p-8 rounded-lg backdrop-filter backdrop-blur-sm"
        >
          <div className="relative">
            <User className="absolute top-3 left-3 text-gray-400" size={18} />
            <Input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="pl-10 bg-transparent border-gray-600 text-white focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <Mail className="absolute top-3 left-3 text-gray-400" size={18} />
            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="pl-10 bg-transparent border-gray-600 text-white focus:border-blue-500 transition-colors"
            />
          </div>
          <div className="relative">
            <MessageSquare
              className="absolute top-3 left-3 text-gray-400"
              size={18}
            />
            <Textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="pl-10 bg-transparent border-gray-600 text-white focus:border-blue-500 transition-colors"
              rows={4}
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center"
          >
            <Send className="mr-2" size={18} />
            Send Message
          </Button>
        </motion.form>
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              {submitStatus === "success" && (
                <Alert className="bg-green-500 bg-opacity-20 border-green-500 text-green-100">
                  <AlertDescription>
                    Message sent successfully!
                  </AlertDescription>
                </Alert>
              )}
              {submitStatus === "error" && (
                <Alert className="bg-red-500 bg-opacity-20 border-red-500 text-red-100">
                  <AlertDescription>
                    {validateForm() || "An error occurred. Please try again."}
                  </AlertDescription>
                </Alert>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default ContactUs;
