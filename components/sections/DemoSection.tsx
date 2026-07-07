"use client"

import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const TABS = [
  {
    number: "01",
    label: "이야기 입력",
    video: "/videos/step1.mp4",
    title: "아이디어를 그대로 쓰면 됩니다",
    description: "카메라나 연출은 몰라도 돼요. 머릿속 이야기를 입력하면 AI가 알아서 씬으로 나눠줍니다.",
  },
  {
    number: "02",
    label: "씬 나누기 + 캐릭터",
    video: "/videos/step2.mp4",
    title: "AI가 씬과 인물을 자동으로 정리해요",
    description: "대사, 장소, 연출을 자동으로 제안하고, 등장인물의 설정집까지 만들어줘요.",
  },
  {
    number: "03",
    label: "스토리보드",
    video: "/videos/step3.mp4",
    title: "전체 흐름이 한눈에 보여요",
    description: "씬별로 키샷이 배치되고, 전체 흐름을 미리 재생해볼 수 있어요.",
  },
  {
    number: "04",
    label: "프롬프트",
    video: "/videos/step4.mp4",
    title: "바로 쓸 수 있는 영상 프롬프트",
    description: "각 샷에 맞는 영상 모델 프롬프트가 자동으로 완성돼요. 복사해서 Kling에 붙여넣기만 하면 됩니다.",
  },
]

export default function DemoSection() {
  const [active, setActive] = useState(0)
  const [loading, setLoading] = useState(false)
  const tab = TABS[active]

  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" })

  const handleTabChange = (i: number) => {
    if (i === active) return
    setLoading(true)
    setActive(i)
  }

  return (
    <section ref={sectionRef} className="px-6 py-28" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="mx-auto max-w-4xl">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl" style={{ color: "#141527" }}>
            직접 둘러보세요
          </h2>
          <p className="mt-3 text-base" style={{ color: "#63627A" }}>
            단계별로 어떻게 작동하는지 확인해보세요
          </p>
        </motion.div>

        {/* 탭 버튼 */}
        <div className="mb-6 flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {TABS.map((t, i) => {
            const isActive = i === active
            return (
              <button
                key={t.number}
                onClick={() => handleTabChange(i)}
                className="flex flex-none items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 whitespace-nowrap"
                style={{
                  backgroundColor: isActive ? "#4A90E2" : "#F4F6FA",
                  color: isActive ? "#FFFFFF" : "#63627A",
                  border: isActive ? "1.5px solid #4A90E2" : "1.5px solid #E7E5F0",
                }}
              >
                <span
                  className="text-xs font-bold"
                  style={{ color: isActive ? "rgba(255,255,255,0.7)" : "#4A90E2" }}
                >
                  {t.number}
                </span>
                {t.label}
              </button>
            )
          })}
        </div>

        {/* 영상 + 설명 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
          >
            {/* 영상 */}
            <div
              className="relative w-full overflow-hidden rounded-2xl border"
              style={{ borderColor: "#E7E5F0", backgroundColor: "#0D0D14" }}
            >
              {inView ? (
                <video
                  key={tab.video}
                  src={tab.video}
                  autoPlay
                  muted
                  playsInline
                  loop
                  preload="none"
                  className="aspect-video w-full object-cover"
                  onWaiting={() => setLoading(true)}
                  onCanPlay={() => setLoading(false)}
                  onPlaying={() => setLoading(false)}
                />
              ) : (
                <div className="aspect-video w-full" />
              )}

              {/* 로딩 오버레이 */}
              <AnimatePresence>
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                    style={{ backgroundColor: "rgba(13,13,20,0.85)" }}
                  >
                    {/* 스피너 */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
                      className="h-8 w-8 rounded-full border-2 border-white/20 border-t-white"
                    />
                    <p className="text-sm font-medium text-white/70">
                      영상을 불러오는 중이에요
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 설명 */}
            <div className="mt-6 flex flex-col gap-1 sm:flex-row sm:items-start sm:gap-10">
              <div className="flex-1">
                <h3 className="text-xl font-bold" style={{ color: "#141527" }}>
                  {tab.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed" style={{ color: "#63627A" }}>
                  {tab.description}
                </p>
              </div>

              {/* 스텝 인디케이터 */}
              <div className="flex flex-none gap-2 sm:flex-col sm:items-end">
                {TABS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleTabChange(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      width: i === active ? "2rem" : "0.5rem",
                      backgroundColor: i === active ? "#4A90E2" : "#D1D5DB",
                    }}
                    aria-label={`${i + 1}단계`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
