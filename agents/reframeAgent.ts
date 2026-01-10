export function reframeThought(thought: string) {
  const clean = thought.trim();

  return {
    reframe: `New frame: What if this isn’t a “problem” — it’s a signal about what needs strengthening (skill, boundary, or focus)?`,
    explanation: `When you treat it as a signal, you stop arguing with reality and start extracting the lesson.`,
    action: `One move today: pick the smallest action that proves progress (5–15 minutes) and do it now.`,
    debug: { received: clean.length ? clean : "(empty)" },
  };
}
