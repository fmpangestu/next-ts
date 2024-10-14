import Link from "next/link";
import { useRouter } from "next/router";
import style from "./login.module.scss";
import { useEffect, useRef, useState } from "react";
const LoginViews = () => {
  const { push } = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (contentRef.current) {
        const { clientX, clientY } = e;
        const { left, top, width, height } =
          contentRef.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / 10;
        const y = (clientY - (top + height / 2)) / 10;
        contentRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };
    const handleMouseLeave = () => {
      if (contentRef.current) {
        contentRef.current.style.transform = "translate(0, 0)";
      }
    };

    if (contentRef.current) {
      contentRef.current.addEventListener("mousemove", handleMouseMove);
      contentRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (contentRef.current) {
        contentRef.current.removeEventListener("mousemove", handleMouseMove);
        contentRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  const handleClick = () => {
    push("/product");
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={style.container}>
      <div className={style.content} ref={contentRef}>
        <h1>Login</h1>
        <form action="">
          <div className={style.inputan}>
            <input type="text" id="username" placeholder="" />
            <label htmlFor="username">Username</label>
          </div>
          <div className={style.inputan}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder=""
            />
            <label htmlFor="password">Password</label>
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"} 
              ${style.eyeIcon}`}
              onClick={handleShowPassword}
            ></i>
          </div>
        </form>
        <button
          className={style.button}
          type="submit"
          onClick={() => handleClick()}
        >
          Login
        </button>
        <p className={style.anonimus}>
          belum punya akun ? register{" "}
          <Link className={style.linknya} href={"/auth/register"}>
            Disini
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginViews;
