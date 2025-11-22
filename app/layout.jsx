import "./globals.css";

export const metadata = {
  title: "X. It's what's happening / X",
  description: "From breaking news and entertainment to sports and politics, get the full story with all the live commentary.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
