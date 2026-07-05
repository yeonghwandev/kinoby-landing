"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{
        background: "radial-gradient(ellipse 80% 50% at 50% -10%, #E4EEFE, transparent), #ffffff",
      }}
    >
      {/* 로고 */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Image src="/kinoby.png" alt="Kinoby" width={200} height={67} className="object-contain" />
      </motion.div>

      {/* Pain 배지 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5 rounded-full border px-4 py-1.5 text-sm font-medium"
        style={{ borderColor: "#C7D9F8", color: "#4A90E2", backgroundColor: "#EFF6FF" }}
      >
        이야기는 있는데, 영상은 어떻게 만들지?
      </motion.p>

      {/* 헤드라인 */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 max-w-2xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl"
        style={{ color: "#141527" }}
      >
        머릿속 이야기를
        <br />
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(135deg, #4A90E2, #7CC0F5)" }}
        >
          AI 영상
        </span>
        으로
      </motion.h1>

      {/* 서브카피 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-10 max-w-md text-base leading-relaxed sm:text-lg"
        style={{ color: "#63627A" }}
      >
        씬 구성, 연출, 프롬프트 — 전부 Kinoby가 잡아줍니다.
        <br />
        당신은 이야기만 하면 됩니다.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.a
          href="#beta"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            className="rounded-xl px-10 py-4 text-base font-semibold text-white border-none shadow-lg transition-colors"
            style={{ backgroundColor: "#4A90E2" }}
          >
            베타 신청하기 →
          </Button>
        </motion.a>
      </motion.div>

      {/* 스크롤 힌트 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="text-2xl"
          style={{ color: "#C7D9F8" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
