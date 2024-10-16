import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
//? catatan kalau kita ingin menampilkan image, itu tidak bisa menggunakan atribute img,jadi import dulu Image 'next/image'
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <h1>
        <Link href="/">Navbar</Link>
      </h1>
      <div className="flex items-center justify-center gap-2">
        <Link
          href="/profile"
          className="hidden lg:block text-[10px] lg:text-lg"
        >
          {data && data.user.fullname}
        </Link>
        {data && data.user && data.user.image && (
          <Image
            src={data.user.image}
            width={100}
            height={100}
            className="block rounded-full w-[35px] h-[35px]"
            alt={"duh"}
          />
        )}
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
