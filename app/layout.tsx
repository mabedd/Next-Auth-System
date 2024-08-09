import Provider from "@/components/Provider";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Provider>
          <div className="flex items-center justify-center min-h-screen">
            {children}
          </div>
        </Provider>
      </body>
    </html>
  );
}
