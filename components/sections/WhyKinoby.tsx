"use client"

import { motion } from "framer-motion"

export default function WhyKinoby() {
  return (
    <section className="px-6 py-28" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <p className="mb-4 text-sm font-semibold tracking-widest uppercase" style={{ color: "#4A90E2" }}>
            Why Kinoby
          </p>
          <h2 className="text-3xl font-bold leading-snug sm:text-4xl" style={{ color: "#141527" }}>
            원하는 대로 영상이 안 나온 적,<br />많으시죠?
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 text-base leading-relaxed"
          style={{ color: "#63627A" }}
        >
          AI 영상에서 제일 중요한 건 두 가지예요.<br />
          <strong style={{ color: "#141527" }}>키샷 이미지</strong>, 그리고 그 의도를 정확히 담은{" "}
          <strong style={{ color: "#141527" }}>프롬프트</strong>.<br />
          둘 중 하나라도 어긋나면 크레딧만 날립니다.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.28 }}
          className="inline-block rounded-2xl border px-8 py-5"
          style={{
            backgroundColor: "#EFF6FF",
            borderColor: "#C7D9F8",
          }}
        >
          <p className="text-lg font-bold leading-relaxed" style={{ color: "#1D4ED8" }}>
            영화적 기법, 서사 구조를 학습한 모델이<br />스토리보드를 짜줍니다.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
