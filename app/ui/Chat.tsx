"use client";

import { useState } from "react";
import { reframeThought } from "../../agents/reframeAgent";

type Msg = { role: "user" | "coach"; text: string };

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Msg[]>([]);

  function handleSend() {
    const thought = input.trim();
    if (!thought) return;

    const userMsg: Msg = { role: "user", text: thought };

    const result = reframeThought(thought);

    const coachMsg: Msg = {
      role: "coach",
      text: [
        result.reframe,
        "",
        `Why this helps: ${result.explanation}`,
        "",
        `Next action: ${result.action}`,
      ].join("\n"),
    };

    setMessages((prev) => [...prev, userMsg, coachMsg]);
    setInput("");
  }

  return (
    <div style={{ marginTop: 24 }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          minHeight: 220,
          marginBottom: 12,
          background: "#fafafa",
          whiteSpace: "pre-wrap",
        }}
      >
        {messages.length === 0 && (
          <p style={{ opacity: 0.6 }}>
            Share a situation or thought you want to reframe.
          </p>
        )}

        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>
              {m.role === "user" ? "You" : "MindsetGPT"}
            </div>
            <div>{m.text}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          placeholder="What’s on your mind?"
          style={{
            flex: 1,
            padding: 10,
            borderRadius: 6,
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            padding: "10px 16px",
            borderRadius: 6,
            border: "none",
            background: "#111",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Reframe
        </button>
      </div>
    </div>
  );
}


