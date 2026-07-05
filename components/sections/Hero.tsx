import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
      style={{
        background:
          "radial-gradient(ellipse 80% 50% at 50% -10%, #E4EEFE, transparent), var(--color-canvas)",
      }}
    >
      {/* Logo */}
      <div className="mb-10 text-2xl font-bold tracking-tight" style={{ color: "var(--color-text-title)" }}>
        Kinoby
      </div>

      {/* Pain line */}
      <p className="mb-4 text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
        AI 영상 써보려고 하면 프롬프트에서 막히죠?
      </p>

      {/* Headline */}
      <h1
        className="mb-6 max-w-xl text-4xl font-bold leading-tight sm:text-5xl"
        style={{ color: "var(--color-text-title)" }}
      >
        내 이야기를{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{ backgroundImage: "var(--gradient-ai)" }}
        >
          AI 영상
        </span>
        으로
      </h1>

      {/* Sub copy */}
      <p
        className="mb-10 max-w-md text-base leading-relaxed sm:text-lg"
        style={{ color: "var(--color-text-secondary)" }}
      >
        카메라 구도 몰라도 됩니다.
        <br />
        씬 분위기만 말하면 Kinoby가 프롬프트로 만들어드려요.
      </p>

      {/* CTA */}
      <a href="#beta">
        <Button
          size="lg"
          className="rounded-xl px-8 py-4 text-base font-semibold text-white shadow-md bg-blue-600 hover:bg-blue-700 border-none transition-colors"
        >
          베타 신청하기
        </Button>
      </a>
    </section>
  );
}
