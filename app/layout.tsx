export const metadata = {
  title: "MindsetGPT Coach",
  description: "Week 2 – Mindset GPT Coach",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
