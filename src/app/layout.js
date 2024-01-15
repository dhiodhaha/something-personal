import { Provider } from "@/components/provider";
import { GeistSans } from "geist/font/sans";

import "@/styles/globals.css";

export const metadata = {
  title: "It's Dhafin!",
  description: "Know me more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
