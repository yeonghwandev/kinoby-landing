const steps = [
  {
    number: "01",
    title: "이야기 입력",
    description: "캐릭터, 씬 분위기, 대사를 자연어로 입력",
    icon: "✏️",
  },
  {
    number: "02",
    title: "스토리보드",
    description: "AI가 씬으로 분해 → 연출·대사·장소 직접 수정",
    icon: "🎬",
  },
  {
    number: "03",
    title: "영상 생성",
    description: "프롬프트 복사 → Kling에 붙여넣기 → 완성",
    icon: "🎥",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-14 text-center">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ color: "var(--color-text-title)" }}
          >
            어떻게 작동하나요?
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--color-text-secondary)" }}>
            3단계로 내 이야기가 영상이 됩니다
          </p>
        </div>

        {/* Step cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border p-6"
              style={{
                backgroundColor: "var(--color-card)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="text-xs font-bold tracking-widest"
                  style={{ color: "var(--color-primary)" }}
                >
                  {step.number}
                </span>
                <span className="text-xl">{step.icon}</span>
              </div>
              <h3
                className="mb-2 text-lg font-semibold"
                style={{ color: "var(--color-text-title)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
