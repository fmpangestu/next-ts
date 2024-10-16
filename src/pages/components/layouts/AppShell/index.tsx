import { useRouter } from "next/router";
// import Navbar from "../Navbar";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

type AppShellProps = {
  children: React.ReactNode;
};

const Navbar = dynamic(() => import("../Navbar"));
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const notNavbarPath = ["/auth/login", "/auth/register", "/404"];
const AppShell = (props: AppShellProps) => {
  const { pathname } = useRouter();
  const { children } = props;
  return (
    <main className={roboto.className}>
      {!notNavbarPath.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
