import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <h1>Navbar</h1>
      <div className="flex items-center justify-center gap-5">
        <Link href="/profile">{data && data.user.fullname}</Link>
        {""}
        {data ? (
          <button
            onClick={() => signOut()}
            className="bg-slate-50 text-black px-4 py-1 rounded-lg"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => signIn()}
            className="bg-slate-50 text-black px-4 py-1 rounded-lg"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
