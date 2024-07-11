"use client"; // This directive is necessary for client components

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import Image from "next/image";
//import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";

const Login = () => {
  const router = useRouter();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      userId,
      password,
    });

    if (res.error) {
      setError("Invalid credentials. Please try again.");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <section className="homelogin">
      <div className="left">
        <h1>
          The Ultimate
          <br />
          <span>Mobile Banking</span>
          <br />
          Experience
        </h1>
      </div>
      <div className="right">
        <Image
          width={169}
          height={74}
          className="chiplogo_image"
          src="/assets/images/vcblogo.svg"
          alt="vicwhite"
        />
        <h4>BANK ADMIN LOGIN</h4>
        <p>
          Sign in to continue. Your password is yours, do not share it with
          anyone.
        </p>
        <form action="" className="loginform" onSubmit={handleLogin}>
          <div className="inputbox">
            <input
              type="text"
              placeholder="User ID"
              name="userid"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />
            <FaRegUserCircle />
          </div>
          <div className="inputbox">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <MdOutlineLock />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
