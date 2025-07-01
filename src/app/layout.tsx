import type { Metadata } from "next";
import "./globals.css";
import ClientLayout from "@/common/layout";

export const metadata: Metadata = {
  title: "Perssonify - Growth & Scale Solutions | Business Growth Experts",
  description:
    "Perssonify is a growth and scale solutions company that helps businesses grow and scale their business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
