"use client";

import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  function handleSend() {
    if (!input.trim()) return;

    const userMessage = `You: ${input}`;
    const coachReply = `MindsetGPT: Let’s reframe this. What if this situation is not blocking you, but pointing you toward a skill or boundary you need to strengthen?`;

    setMessages((prev) => [...prev, userMessage, coachReply]);
    setInput("");
  }

  return (
    <div style={{ marginTop: 24 }}>
      <div
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 16,
          minHeight: 200,
          marginBottom: 12,
          background: "#fafafa",
        }}
      >
        {messages.length === 0 && (
          <p style={{ opacity: 0.6 }}>
            Share a situation or thought you want to reframe.
          </p>
        )}

        {messages.map((msg, i) => (
          <p key={i} style={{ marginBottom: 8 }}>
            {msg}
          </p>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
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

