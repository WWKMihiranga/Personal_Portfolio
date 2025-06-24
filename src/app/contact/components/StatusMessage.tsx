import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

interface StatusMessageProps {
  type: "success" | "error";
  title: string;
  message: string;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({
  type,
  title,
  message,
}) => {
  const icon =
    type === "success" ? (
      <FaCheckCircle
        className="text-white dark:text-[#00ff00] dark:animate-spin"
        size={16}
      />
    ) : (
      <FaExclamationCircle
        className="text-white dark:text-[#ff0000] dark:animate-bounce"
        size={16}
      />
    );

  const bgColor =
    type === "success"
      ? "bg-[#6693B2] dark:bg-[#ff00ff]"
      : "bg-[#E57986] dark:bg-[#ffff00]";

  const borderColor =
    type === "success"
      ? "border-[#6693B2] dark:border-[#00ffff]"
      : "border-[#E57986] dark:border-[#ff00ff]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`flex items-center justify-center p-6 rounded-2xl dark:rounded-none bg-[#F1E8DF] dark:bg-[#6C3B3F] border ${borderColor} dark:animate-pulse`}
    >
      <div
        className={`w-8 h-8 ${bgColor} rounded-full dark:rounded-none flex items-center justify-center mr-3`}
      >
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-800 dark:text-[#ffffff] dark:animate-shake">
          {title}
        </p>
        <p className="text-sm text-gray-600 dark:text-[#00ffff]">{message}</p>
      </div>
    </motion.div>
  );
};
