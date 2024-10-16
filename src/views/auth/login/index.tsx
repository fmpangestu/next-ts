import Link from "next/link";
import { useRouter } from "next/router";
import style from "./login.module.scss";
import { useEffect, useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { BsGoogle } from "react-icons/bs";
const LoginViews = () => {
  const { push, query } = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  const callbackUrl: any = query.callbackUrl || "/";
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
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);
    try {
      const res = await signIn("credentials", {
        redirect: false,
        email: event.target.email.value,
        password: event.target.password.value,
        callbackUrl,
      });

      if (!res?.error) {
        setIsLoading(false);
        push(callbackUrl);
      } else {
        setIsLoading(false);
        setError("Email atau password salah");
        setTimeout(() => {
          setError("");
        }, 700);
      }
    } catch (error) {
      setIsLoading(false);
      setError("Email atau password salah");
      setTimeout(() => {
        setError("");
      }, 700);
    }
  };
  const handleWithGoogle = async () => {
    await signIn("google", {
      redirect: false,
      callbackUrl,
    });
    setIsLoadingGoogle(true);
  };
  return (
    <>
      {error && (
        <div className="px-20 top-10 relative w-1/2 justify-center items-center text-center">
          <div role="alert" className="alert alert-error absolute ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{error}.</span>
          </div>
        </div>
      )}
      <div className={style.container}>
        <div className={style.content} ref={contentRef}>
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
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
            <button className={style.button} type="submit">
              {isLoading ? "Loading..." : "Login"}
            </button>
          </form>
          <button
            className="mt-3 flex w-full justify-center items-center gap-2  bg-slate-200 py-2 rounded-lg hover:text-white hover:bg-slate-400 transition duration-300 ease-in-out"
            onClick={handleWithGoogle}
          >
            {isLoadingGoogle ? "" : <BsGoogle />}
            {isLoadingGoogle ? "Loading..." : "Login with Google"}
          </button>
          <p className={style.anonimus}>
            belum punya akun ? register{" "}
            <Link className={style.linknya} href={"/auth/register"}>
              Disini
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginViews;
