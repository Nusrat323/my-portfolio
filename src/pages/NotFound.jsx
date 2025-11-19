import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
 
  const stars = Array.from({ length: 80 }).map(() => ({
    top: Math.random() * 100 + "%",
    left: Math.random() * 100 + "%",
    delay: Math.random() * 2, 
    duration: 2 + Math.random() * 3, 
  }));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-[#111127] text-center px-6 text-white">

      
      {stars.map((star, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: star.delay,
            duration: star.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: star.top,
            left: star.left,
            width: "2px",
            height: "2px",
            backgroundColor: "white",
            borderRadius: "50%",
          }}
        />
      ))}

      
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [-20, 20, -20] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mt-8"
      >
        <svg width="220" height="220" viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="170" rx="60" ry="15" fill="rgba(0,0,0,0.5)" />

          <path
            d="M100 40c-20 0-36 16-36 36v20c0 20 16 36 36 36s36-16 36-36V76c0-20-16-36-36-36z"
            fill="#1e293b"
            stroke="#64748b"
            strokeWidth="3"
          />

          <circle cx="100" cy="75" r="18" fill="#0f172a" stroke="#94a3b8" strokeWidth="3" />

          <rect x="85" y="115" width="30" height="40" rx="10" fill="#1e293b" />

          <circle cx="75" cy="155" r="12" fill="#334155" />
          <circle cx="125" cy="155" r="12" fill="#334155" />
        </svg>
      </motion.div>

      
      <motion.h1
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(255,0,255,0.35)] mt-6"
      >
        404
      </motion.h1>

      
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-lg md:text-2xl text-gray-400 mt-3 max-w-md"
      >
        You seem to be lost in the space.
      </motion.p>

      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 rounded-full text-white bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-800/50"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;

