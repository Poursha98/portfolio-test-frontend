"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
    <section className="my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        onSubmit={handleSubmit}
        className="max-w-md mx-auto"
      >
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <Textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
        {submitStatus === "success" && (
          <Alert className="mt-4 bg-green-100 border-green-400 text-green-700">
            <AlertDescription>Message sent successfully!</AlertDescription>
          </Alert>
        )}
        {submitStatus === "error" && (
          <Alert className="mt-4 bg-red-100 border-red-400 text-red-700">
            <AlertDescription>
              {validateForm() || "An error occurred. Please try again."}
            </AlertDescription>
          </Alert>
        )}
      </motion.form>
    </section>
  );
}

export default ContactUs;
