import Link from "next/link";
import { useRouter } from "next/router";
import style from "./register.module.scss";
import { use, useEffect, useRef, useState } from "react";
const RegisterViews = () => {
  const { push } = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

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

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  // const handleClick = () => {
  //   push("/product");
  // };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    const data = {
      username: event.target.username.value,
      fullname: event.target.fullname.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (result.status === 200) {
      event.target.reset();
      setIsLoading(false);
      push("/auth/login");
      console.log("berhasil register");
    } else {
      setIsLoading(false);
      setError(result.status === 400 ? "gagal register" : "");
    }
  };
  return (
    <>
      {error && (
        <p
          className={
            "text-center bg-red-500 px-10 fixed text-[16px] justify-center items-center text-white py-5 rounded-lg"
          }
        >
          {error}
        </p>
      )}
      <div className={style.container}>
        <div className={style.content} ref={contentRef}>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <div className={style.inputan}>
              <input type="text" id="username" placeholder="" />
              <label htmlFor="username">Username</label>
            </div>
            <div className={style.inputan}>
              <input type="text" id="fullname" placeholder="" />
              <label htmlFor="fullname">Fullname</label>
            </div>
            <div className={style.inputan}>
              <input type="text" id="email" placeholder="" />
              <label htmlFor="email">Email</label>
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
            <button className={style.button} type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Register"}
            </button>
          </form>
          <p className={style.anonimus}>
            sudah punya akun ? login{" "}
            <Link className={style.linknya} href={"/auth/login"}>
              Disini
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterViews;
