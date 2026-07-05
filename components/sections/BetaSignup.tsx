import { Button } from "@/components/ui/button";

const FORM_URL = "https://forms.gle/ocPrKm3y4trMcdLx7";

export default function BetaSignup() {
  return (
    <section
      id="beta"
      className="px-6 py-28 text-center"
      style={{ backgroundColor: "#0F172A" }}
    >
      <div className="mx-auto max-w-xl">
        <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
          지금 베타 신청하면{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-ai)" }}
          >
            가장 먼저
          </span>{" "}
          알려드려요
        </h2>
        <p className="mb-10 text-base" style={{ color: "#94A3B8" }}>
          얼리액세스 기간 무료 · 7월 오픈 예정
        </p>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer">
          <Button
            className="rounded-xl px-10 py-4 text-base font-semibold text-white shadow-lg hover:opacity-90 transition-opacity"
            style={{ backgroundImage: "var(--gradient-ai)" }}
          >
            베타 신청하기 →
          </Button>
        </a>
      </div>
    </section>
  );
}
