import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!isLogin) {
      alert("anda harus login terlebih dahulu");
      push("/auth/login");
    }
  }, []);
  return (
    <>
      <div>hallo saya keren</div>
    </>
  );
}
