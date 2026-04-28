import "./globals.css"

export const metadata = {
  title: "Accredian Enterprise",
  description: "Next-Gen Expertise for Your Enterprise",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}