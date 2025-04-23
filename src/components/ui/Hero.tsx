'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative h-screen flex items-center justify-center bg-gray-50">
      <motion.div
        ref={ref}
        className="container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          電気工事のプロフェッショナル
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          安全・確実な電気工事で、快適な環境づくりをサポートします
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  );
} 