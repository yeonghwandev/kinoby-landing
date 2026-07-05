"use client"

import { motion } from "framer-motion"

export default function DemoSection() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: "#060d1a" }}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            직접 둘러보세요
          </h2>
          <p className="mt-3 text-base" style={{ color: "#64748b" }}>
            실제 화면을 미리 체험해보세요
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative overflow-hidden rounded-2xl border"
          style={{
            backgroundColor: "#0a1628",
            borderColor: "#1e3a5f",
            height: "480px",
          }}
        >
          {/* 블러 UI 목업 */}
          <div
            className="absolute inset-0 flex flex-col gap-4 p-8 opacity-20 blur-sm"
            aria-hidden="true"
          >
            <div className="h-10 w-2/3 rounded-lg" style={{ backgroundColor: "#1e3a5f" }} />
            <div className="h-32 w-full rounded-lg" style={{ backgroundColor: "#1e3a5f" }} />
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-24 flex-1 rounded-lg" style={{ backgroundColor: "#1e3a5f" }} />
              ))}
            </div>
            <div
              className="h-10 w-40 rounded-lg"
              style={{ backgroundImage: "linear-gradient(135deg, #5B9DF9, #7CC0F5)" }}
            />
          </div>

          {/* 오버레이 배지 */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <motion.span
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-white"
              style={{ backgroundImage: "linear-gradient(135deg, #5B9DF9, #7CC0F5)" }}
            >
              베타 출시 후 공개 예정
            </motion.span>
            <p className="text-sm" style={{ color: "#64748b" }}>
              지금 신청하면 가장 먼저 체험하실 수 있어요
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
