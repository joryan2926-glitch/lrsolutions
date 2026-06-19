"use client";

import type { ReactNode } from "react";
import { MotionDiv } from "@/components/Motion";

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <MotionDiv initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: .7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </MotionDiv>
  );
}
