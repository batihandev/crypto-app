import { Navbar } from "@/components";
import "./globals.css";
import Main from "@/components/Main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>
          <Main>{children}</Main>
        </div>
      </body>
    </html>
  );
}
