"use client"

import { motion } from "framer-motion"
import { Clapperboard, Sparkles } from "lucide-react"

export default function WhyKinoby() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="mx-auto max-w-3xl">

        {/* 훅 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase" style={{ color: "#4A90E2" }}>
            Why Kinoby
          </p>
          <h2 className="text-3xl font-bold leading-snug sm:text-4xl" style={{ color: "#141527" }}>
            원하는 대로 영상이 안 나온 적,<br />많으시죠?
          </h2>
        </motion.div>

        {/* 페인포인트 */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-14 text-center text-base leading-relaxed"
          style={{ color: "#63627A" }}
        >
          AI 영상에서 제일 중요한 건 두 가지예요.<br />
          <strong style={{ color: "#141527" }}>키샷 이미지</strong>, 그리고 그 의도를 정확히 담은{" "}
          <strong style={{ color: "#141527" }}>프롬프트</strong>.<br />
          둘 중 하나라도 어긋나면 크레딧만 날립니다.
        </motion.p>

        {/* 솔루션 카드 2개 */}
        <div className="grid gap-5 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl border p-7"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E7E5F0" }}
          >
            <span
              className="mb-4 inline-flex size-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: "#EFF6FF", color: "#4A90E2" }}
            >
              <Clapperboard size={20} strokeWidth={1.75} />
            </span>
            <h3 className="mb-2 text-lg font-bold" style={{ color: "#141527" }}>
              스토리보드로 먼저 그림을 잡아요
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#63627A" }}>
              씬별로 흐름을 잡고, 각 샷에 맞는 키샷과 프롬프트를 자동으로 완성해줘요.
              찍기 전에 전체 그림이 보이니까, 낭비 없이 한 번에 완성됩니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="rounded-2xl border p-7"
            style={{ backgroundColor: "#FFFFFF", borderColor: "#E7E5F0" }}
          >
            <span
              className="mb-4 inline-flex size-10 items-center justify-center rounded-xl"
              style={{ backgroundColor: "#EFF6FF", color: "#4A90E2" }}
            >
              <Sparkles size={20} strokeWidth={1.75} />
            </span>
            <h3 className="mb-2 text-lg font-bold" style={{ color: "#141527" }}>
              영화적 기법, 몰라도 됩니다
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "#63627A" }}>
              영화적·서사적 연출 기법을 학습한 모델이 여러분의 스토리를 가장 흥미로운 씬과 샷으로 만들어냅니다.
              카메라 연출은 Kinoby가 알아서 해드려요.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
