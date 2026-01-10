cat > app/page.tsx <<'TSX'
import Chat from "./ui/Chat";

export default function Page() {
  return (
    <main style={{ padding: 20 }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>MindsetGPT Coach</h1>
      <p style={{ opacity: 0.8, marginBottom: 16 }}>
        Apply today’s MicroLesson in real life. Ask anything — we keep it simple and actionable.
      </p>
      <Chat />
    </main>
  );
}
TSX
