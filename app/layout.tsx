export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <div className="flex items-center justify-center min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
