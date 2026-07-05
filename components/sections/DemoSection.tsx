export default function DemoSection() {
  return (
    <section
      className="px-6 py-24"
      style={{ backgroundColor: "var(--color-canvas)" }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="mb-10 text-center">
          <h2
            className="text-3xl font-bold sm:text-4xl"
            style={{ color: "var(--color-text-title)" }}
          >
            직접 둘러보세요
          </h2>
          <p className="mt-3 text-base" style={{ color: "var(--color-text-secondary)" }}>
            실제 화면을 미리 체험해보세요
          </p>
        </div>

        {/* Placeholder card */}
        <div
          className="relative overflow-hidden rounded-2xl border"
          style={{
            backgroundColor: "var(--color-card)",
            borderColor: "var(--color-border)",
            height: "480px",
          }}
        >
          {/* Blurred UI mockup background */}
          <div
            className="absolute inset-0 flex flex-col gap-4 p-8 opacity-30 blur-sm"
            aria-hidden="true"
          >
            {/* Fake input area */}
            <div
              className="h-10 w-2/3 rounded-lg"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            <div
              className="h-32 w-full rounded-lg"
              style={{ backgroundColor: "var(--color-border)" }}
            />
            {/* Fake scene cards */}
            <div className="flex gap-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-24 flex-1 rounded-lg"
                  style={{ backgroundColor: "var(--color-border)" }}
                />
              ))}
            </div>
            <div
              className="h-10 w-40 rounded-lg"
              style={{ backgroundImage: "var(--gradient-ai)" }}
            />
          </div>

          {/* Overlay badge */}
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
            <span
              className="rounded-full px-4 py-1.5 text-sm font-semibold text-white"
              style={{ backgroundImage: "var(--gradient-ai)" }}
            >
              베타 출시 후 공개 예정
            </span>
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              지금 신청하면 가장 먼저 체험하실 수 있어요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
