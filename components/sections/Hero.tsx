"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      style={{ background: "#040812" }}
    >
      {/* 배경 글로우 오브 */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          width: "600px",
          height: "400px",
          background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)",
        }}
      />

      {/* 로고 */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-2xl font-bold tracking-tight text-white"
      >
        Kinoby
      </motion.div>

      {/* Pain 한 줄 */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-5 rounded-full border px-4 py-1.5 text-sm font-medium"
        style={{ borderColor: "#1e3a5f", color: "#7CC0F5", backgroundColor: "#0a1628" }}
      >
        AI 영상 써보려고 하면 프롬프트에서 막히죠?
      </motion.p>

      {/* 헤드라인 */}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 max-w-2xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl"
      >
        내 이야기를{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "linear-gradient(135deg, #5B9DF9, #7CC0F5)" }}
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
        style={{ color: "#94a3b8" }}
      >
        카메라 구도 몰라도 됩니다.
        <br />
        씬 분위기만 말하면 Kinoby가 Kling 프롬프트로 만들어드려요.
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
            className="rounded-xl px-10 py-4 text-base font-semibold text-white border-none bg-blue-600 hover:bg-blue-700 shadow-lg transition-colors"
            style={{ boxShadow: "0 0 32px rgba(37,99,235,0.4)" }}
          >
            베타 신청하기 →
          </Button>
        </motion.a>
      </motion.div>

      {/* 하단 스크롤 힌트 */}
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
          style={{ color: "#334155" }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  )
}
