import { motion } from "framer-motion";
import React from "react";

interface FormFieldProps {
  id: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
  icon: React.ReactNode;
  rows?: number;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  id,
  type,
  placeholder,
  label,
  value,
  onChange,
  focused,
  onFocus,
  onBlur,
  icon,
  rows = 1,
  required = false,
}) => {
  const InputComponent = type === "textarea" ? "textarea" : "input";

  return (
    <motion.div
      className="space-y-2"
      whileHover={{ scale: type === "textarea" ? 1.01 : 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-gray-700 dark:text-[#ff00ff] dark:animate-pulse dark:rounded-none"
      >
        {label}{" "}
        {required && (
          <span className="text-[#E57986] dark:text-[#00ff00] dark:animate-bounce">
            *
          </span>
        )}
      </label>

      <div className="relative group">
        <div
          className={`absolute ${
            type === "textarea"
              ? "top-4 left-4"
              : "inset-y-0 left-0 pl-4 flex items-center"
          } pointer-events-none transition-colors duration-200 ${
            focused
              ? "text-[#6693B2] dark:text-[#ff0000]"
              : "text-gray-400 dark:text-[#ffff00]"
          } dark:animate-puls`}
        >
          {icon}
        </div>

        <InputComponent
          id={id}
          type={type}
          placeholder={placeholder}
          className={`w-full ${
            type === "textarea" ? "pl-12" : "pl-12"
          } pr-4 py-4 border rounded-2xl dark:rounded-none focus:outline-none transition-all duration-300 bg-[#F1E8DF] dark:bg-[#121212] text-gray-800 dark:text-[#ffffff] placeholder-gray-500 dark:placeholder-white-500 ${
            focused
              ? "border-[#6693B2] dark:border-[#00ff00] shadow-lg dark:animate-pulse"
              : "border-[#A9C8DA] dark:border-[#6C3B3F] hover:border-[#6693B2] dark:hover:border-[#ff00ff]"
          }`}
          value={value}
          onChange={(
            e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => onChange(e.target.value)}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          rows={rows}
        />
      </div>
    </motion.div>
  );
};
