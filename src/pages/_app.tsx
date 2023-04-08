import { AuthProvider } from "../context/AuthContext";
import { DialogProvider } from "../context/dialog-context";
import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <DialogProvider>
        <Component {...pageProps} />
      </DialogProvider>
    </AuthProvider>
  );
}
