import "./globals.css";

export const metadata = {
  title: 'Jovi Mobile | Landing Page',
  icon: '', // mudar o icone para o da Jovi depois
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
