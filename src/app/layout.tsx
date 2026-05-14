import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Career Elevate | Professional Career Services",
  description: "Elevate your professional career with expert CV building, LinkedIn optimization, and personal mentorship.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
