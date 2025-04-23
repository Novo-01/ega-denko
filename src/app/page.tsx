'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/ui/Hero';

const ServiceCard = ({ title, description, index }: { title: string; description: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-white p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut"
      }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const text = "ega-denko".split("");
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5500);

    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 1 }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <AnimatePresence>
        {!showContent && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="relative overflow-visible py-12">
              <motion.div 
                className="text-7xl md:text-9xl text-gray-800 font-light tracking-wider relative z-10 flex items-baseline px-8"
                style={{ lineHeight: '1.5' }}
              >
                {text.map((char, index) => (
                  <motion.span
                    key={index}
                    variants={letterVariants}
                    className={`inline-block ${char === '-' ? 'mx-3' : 'px-1'}`}
                    style={{ 
                      display: 'inline-block',
                      minHeight: '1.2em'
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <svg className="absolute -bottom-4 left-0 w-full h-12 z-10" viewBox="0 0 400 20">
                <motion.path
                  d="M 0 10 Q 100 5, 200 10 T 400 10"
                  fill="none"
                  stroke="#1f2937"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: 3
                  }}
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Hero />
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.h2
              ref={titleRef}
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              サービス紹介
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard
                title="電気工事"
                description="新築・リフォームの電気工事から、各種設備の設置・メンテナンスまで、幅広い電気工事に対応しています。"
                index={0}
              />
              <ServiceCard
                title="設備管理"
                description="ビルや工場などの電気設備の定期点検・メンテナンスを行い、安全で快適な環境を維持します。"
                index={1}
              />
              <ServiceCard
                title="省エネ提案"
                description="最新の省エネ技術を活用し、電気代の削減と環境負荷の低減を実現する提案を行います。"
                index={2}
              />
            </div>
          </div>
        </section>
        <Footer />
      </motion.main>
    </>
  );
}
