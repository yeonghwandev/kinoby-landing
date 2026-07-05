"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const FORM_URL = "https://forms.gle/ocPrKm3y4trMcdLx7"

export default function BetaSignup() {
  return (
    <section
      id="beta"
      className="relative overflow-hidden px-6 py-32 text-center"
      style={{ backgroundColor: "#040812" }}
    >
      {/* 배경 글로우 */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          width: "500px",
          height: "300px",
          background: "radial-gradient(ellipse, #2563EB 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-3xl font-bold text-white sm:text-4xl"
        >
          지금 베타 신청하면{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #5B9DF9, #7CC0F5)" }}
          >
            가장 먼저
          </span>{" "}
          알려드려요
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 text-base"
          style={{ color: "#64748b" }}
        >
          얼리액세스 기간 무료 · 7월 오픈 예정
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <motion.a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              className="rounded-xl px-10 py-4 text-base font-semibold text-white border-none hover:opacity-90 transition-opacity"
              style={{
                backgroundImage: "linear-gradient(135deg, #5B9DF9, #7CC0F5)",
                boxShadow: "0 0 40px rgba(91,157,249,0.35)",
              }}
            >
              베타 신청하기 →
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
