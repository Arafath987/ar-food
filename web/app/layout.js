import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CartContextProvider } from "../context/Product";
import { AuthContextProvider } from "../context/Auth";
export const metadata = {
  title: "AlFood",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script src="https://aframe.io/releases/1.0.0/aframe.min.js"></script>
      <script src="https://cdn.rawgit.com/jeromeetienne/AR.js/1.6.0/aframe/build/aframe-ar.js"></script>
      </head>
      <body className="main-container">
        <ChakraProvider>
          <AuthContextProvider>
            <CartContextProvider>{children}</CartContextProvider>
          </AuthContextProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
