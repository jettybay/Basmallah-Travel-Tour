"use client";

import PageTransition from "@/components/PageTransition";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <PageTransition direction="left" duration={0.6}>
      {children}
    </PageTransition>
  );
}

