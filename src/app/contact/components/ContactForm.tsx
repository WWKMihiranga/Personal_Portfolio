"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiSend,
  FiUser,
  FiMail,
  FiMessageSquare,
  FiClock,
} from "react-icons/fi";
import { ContactCard } from "./ContactCard";
import { StatusMessage } from "./StatusMessage";
import { FormField } from "./FormField";
import { ContactInformation } from "./ContactInformation";
import ThreeBackground from "@/components/ThreeBackground";

interface FormData {
  name: string;
  email: string;
  message: string;
}

type FormStatus = "idle" | "sending" | "success" | "error";

export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formspree.io/f/meokrayn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.ok || res.status === 200) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="relative">
      <ThreeBackground />
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none dark:animate-spin opacity-20"></div>
        <div className="absolute bottom-20 right-16 w-28 h-6 bg-[#FFBB94] dark:bg-[#00ff00] rounded-full dark:rounded-none dark:animate-ping opacity-10 rotate-12"></div>
        <div className="absolute top-32 right-1/4 w-3 h-3 bg-[#E57986] dark:bg-[#ff00ff] rounded-full dark:rounded-none dark:animate-bounce opacity-40"></div>
        <div className="absolute bottom-40 left-1/3 w-16 h-16 border border-[#6693B2] dark:border-[#00ffff] rounded-full dark:rounded-none dark:animate-shake opacity-15"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        {/* Header Section */}
        <ContactHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="order-2 lg:order-1">
            <ContactInformation />
          </div>

          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 group order-1 lg:order-2"
          >
            <ContactCard
              icon={
                <FiMessageSquare
                  className="text-white dark:text-black"
                  size={20}
                />
              }
              title="Send me a message"
              subtitle="Fill out the form below and I'll get back to you within 24 hours"
              iconBgColor="bg-[#6693B2] dark:bg-[#ff0000] dark:rounded-none dark:animate-ping"
            >
              <form
                onSubmit={handleSubmit}
                className="relative z-10 space-y-6 dark:animate-shake"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    label="Your Name"
                    value={form.name}
                    onChange={(value) => setForm({ ...form, name: value })}
                    focused={focusedField === "name"}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    icon={<FiUser />}
                    required
                  />

                  <FormField
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    label="Email Address"
                    value={form.email}
                    onChange={(value) => setForm({ ...form, email: value })}
                    focused={focusedField === "email"}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    icon={<FiMail />}
                    required
                  />
                </div>

                <FormField
                  id="message"
                  type="textarea"
                  placeholder="Hello, I'd like to talk about..."
                  label="Your Message"
                  value={form.message}
                  onChange={(value) => setForm({ ...form, message: value })}
                  focused={focusedField === "message"}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  icon={<FiMessageSquare />}
                  rows={6}
                  required
                />

                <SubmitButton status={status} />

                {status === "success" && (
                  <StatusMessage
                    type="success"
                    title="Message sent successfully!"
                    message="I'll get back to you within 24 hours."
                  />
                )}

                {status === "error" && (
                  <StatusMessage
                    type="error"
                    title="Something went wrong"
                    message="Please try again later or contact me directly."
                  />
                )}
              </form>

              {/* Form completion indicator */}
              {/* <FormCompletionIndicator form={form} /> */}
            </ContactCard>
            <AdditionalCTA />
          </motion.div>
        </div>

        {/* Additional CTA Section */}
      </div>
    </div>
  );
};

const ContactHeader: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="inline-flex items-center px-4 py-2 rounded-full dark:rounded-none bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff0000] dark:animate-shake mb-6"
    >
      <div className="w-2 h-2 bg-[#6693B2] dark:bg-[#00ff00] rounded-full dark:rounded-none dark:animate-ping mr-2"></div>
      <span className="text-sm font-medium text-[#A45F7B] dark:text-[#ff00ff]">
        Let's Connect
      </span>
    </motion.div>

    {/* Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-[#ffff00] mb-4 dark:animate-bounce dark:rounded-none"
    >
      Get in{" "}
      <span className="text-[#6693B2] dark:text-[#00ffff] relative dark:animate-pulse dark:rounded-none">
        Touch
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute bottom-1 left-0 right-0 h-1 bg-[#E57986] dark:bg-[#ff0000] origin-left dark:animate-spin"
        ></motion.div>
      </span>
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      viewport={{ once: true }}
      className="text-lg text-gray-600 dark:text-[#ffffff] max-w-2xl mx-auto dark:animate-pulse"
    >
      Have a project in mind or want to discuss opportunities? Feel free to
      reach out - I'd love to hear from you!
    </motion.p>
  </motion.div>
);

const SubmitButton: React.FC<{ status: FormStatus }> = ({ status }) => (
  <div className="pt-4">
    <motion.button
      whileHover={{
        y: -3,
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      whileTap={{ scale: 0.98 }}
      type="submit"
      disabled={status === "sending"}
      className={`w-full flex items-center justify-center px-8 py-4 border border-transparent rounded-2xl dark:rounded-none text-base font-semibold transition-all duration-300 ${
        status === "sending"
          ? "opacity-70 cursor-not-allowed bg-gray-400 dark:bg-[#444444] text-white dark:text-[#ff0000]"
          : "bg-[#6693B2] dark:bg-[#00ff00] hover:bg-[#A45F7B] dark:hover:bg-[#ff0000] text-white dark:text-black shadow-lg hover:shadow-2xl dark:animate-shake"
      }`}
    >
      {status === "sending" ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-5 h-5 border-2 border-white dark:border-[#ff00ff] dark:border-t-transparent rounded-full dark:rounded-none mr-3"
          />
          Sending Message...
        </>
      ) : (
        <>
          <FiSend className="mr-3 h-5 w-5" />
          Send Message
        </>
      )}
    </motion.button>
  </div>
);

const FormCompletionIndicator: React.FC<{ form: FormData }> = ({ form }) => (
  <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-2 py-2 dark:animate-pulse">
    <div
      className={`w-2 h-2 rounded-full dark:rounded-none transition-all duration-300 ${
        form.name
          ? "bg-[#6693B2] dark:bg-[#00ff00]"
          : "bg-[#A9C8DA] dark:bg-[#ff0000]"
      }`}
    ></div>
    <div
      className={`w-2 h-2 rounded-full dark:rounded-none transition-all duration-300 ${
        form.email
          ? "bg-[#6693B2] dark:bg-[#00ffff]"
          : "bg-[#A9C8DA] dark:bg-[#ff00ff]"
      }`}
    ></div>
    <div
      className={`w-2 h-2 rounded-full dark:rounded-none transition-all duration-300 ${
        form.message
          ? "bg-[#6693B2] dark:bg-[#ffffff]"
          : "bg-[#A9C8DA] dark:bg-[#ff0000]"
      }`}
    ></div>
  </div>
);

const AdditionalCTA: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    viewport={{ once: true }}
    className="mt-16 text-center"
  >
    <div className="inline-flex items-center px-6 py-3 bg-[#F1E8DF] dark:bg-black border border-[#A9C8DA] dark:border-[#ff0000] rounded-full dark:rounded-none">
      <FiClock className="w-4 h-4 text-[#6693B2] dark:text-[#00ffff] mr-2" />
      <span className="text-sm text-gray-600 dark:text-[#ffffff]">
        <span className="font-semibold text-[#A45F7B] dark:text-[#ff00ff]">
          Quick response:
        </span>{" "}
        Usually within 24 hours
      </span>
    </div>
  </motion.div>
);
