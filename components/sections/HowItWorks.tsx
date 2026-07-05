"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "이야기 입력",
    description: (
      <>
        만들고 싶은 이야기를<br />
        <strong>그냥 써보세요</strong>
      </>
    ),
    icon: "✏️",
  },
  {
    number: "02",
    title: "스토리보드",
    description: (
      <>
        이야기만 쓰면 AI가<br />
        <strong>씬·연출·흐름을 자동으로 완성</strong>해줘요
      </>
    ),
    icon: "🎬",
  },
  {
    number: "03",
    title: "영상 생성",
    description: (
      <>
        완성된 프롬프트를 Kling에 붙여넣으면<br />
        <strong>내 이야기가 영상이 됩니다</strong>
      </>
    ),
    icon: "🎥",
  },
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: "#EFF6FF" }}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "#141527" }}>
            어떻게 작동하나요?
          </h2>
          <p className="mt-3 text-base" style={{ color: "#63627A" }}>
            3단계로 내 이야기가 영상이 됩니다
          </p>
        </motion.div>

        {/* 타임라인 */}
        <div className="flex flex-col items-center gap-0 sm:flex-row sm:items-stretch sm:gap-0">
          {steps.map((step, i) => (
            <>
              {/* 카드 */}
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex-1 rounded-2xl border p-6"
                style={{ backgroundColor: "#FFFFFF", borderColor: "#C7D9F8" }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-xs font-bold tracking-widest" style={{ color: "#4A90E2" }}>
                    {step.number}
                  </span>
                  <span className="text-xl">{step.icon}</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold" style={{ color: "#141527" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#63627A" }}>
                  {step.description}
                </p>
              </motion.div>

              {/* 화살표 */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.2 + 0.3 }}
                  className="flex items-center justify-center"
                  style={{ color: "#1E3A5F" }}
                >
                  {/* 모바일: 아래 화살표 */}
                  <span className="text-2xl py-2 sm:hidden">↓</span>
                  {/* 데스크탑: 오른쪽 화살표 */}
                  <span className="hidden sm:block text-2xl px-4">→</span>
                </motion.div>
              )}
            </>
          ))}
        </div>
      </div>
    </section>
  )
}
