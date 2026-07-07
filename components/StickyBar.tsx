"use client"

import { Users } from "lucide-react"

const FORM_URL = "https://forms.gle/ocPrKm3y4trMcdLx7"

export default function StickyBar() {
  return (
    <div
      className="fixed left-0 right-0 top-0 z-50 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white"
      style={{ backgroundColor: "#1D4ED8" }}
    >
      <Users size={14} strokeWidth={2} className="shrink-0 opacity-80" />
      <span>
        현재 100+명이 베타테스트 신청했어요 —{" "}
        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline underline-offset-2 opacity-90 hover:opacity-100"
        >
          베타 신청하기 →
        </a>
      </span>
    </div>
  )
}
