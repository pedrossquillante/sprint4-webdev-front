import "./globals.css";

export const metadata = {
  title: 'Jovi Mobile | Landing Page'
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="motion-safe:scroll-smooth">
      <body>{children}</body>
    </html>
  );
}