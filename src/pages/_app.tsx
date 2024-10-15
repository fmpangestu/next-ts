import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AppShell from "./components/layouts/AppShell";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
