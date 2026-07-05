"use client"

import { motion } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "이야기 입력",
    description: ["만들고 싶은 이야기를", "그냥 써보세요"],
    icon: "✏️",
  },
  {
    number: "02",
    title: "스토리보드",
    description: ["이야기만 쓰면 AI가", "씬·연출·흐름을 자동으로 완성해줘요"],
    icon: "🎬",
  },
  {
    number: "03",
    title: "영상 생성",
    description: ["완성된 프롬프트를 Kling에 붙여넣으면", "내 이야기가 영상이 됩니다"],
    icon: "🎥",
  },
]

export default function HowItWorks() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: "#F8FAFC" }}>
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

        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="rounded-2xl border p-6"
              style={{ backgroundColor: "#FFFFFF", borderColor: "#E7E5F0" }}
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
                {step.description[0]}
                <br />
                {step.description[1]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
