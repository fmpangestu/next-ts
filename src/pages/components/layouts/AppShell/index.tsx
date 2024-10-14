import { useRouter } from "next/router";
import Navbar from "../Navbar";

type AppShellProps = {
  children: React.ReactNode;
};
const notNavbarPath = ["/auth/login", "/auth/register", "/404"];
const AppShell = (props: AppShellProps) => {
  const { pathname } = useRouter();
  const { children } = props;
  return (
    <>
      {!notNavbarPath.includes(pathname) && <Navbar />}
      {children}
    </>
  );
};

export default AppShell;
