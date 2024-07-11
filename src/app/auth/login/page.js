"use client";
import { useState, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";
//import { UserContext } from "@/app/context/UserContext";

const Login = () => {
  const router = useRouter(); // Initialize useRouter

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //const { setUserData, setUserAccounts } = useContext(UserContext);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://192.168.88.56:9010/authentication/login",
        { userId, password }
      );
      console.log(response.data);
      if (response.data.statusCode === 200) {
        // Corrected the equality check
        setUserData(response.data);
        // Redirect to the dashboard page upon successful login
        router.push("/dashboard"); // Use router.push for navigation
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
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
        <form action="" className="loginform">
          <div className="inputbox">
            <input type="text" placeholder="User ID" name="userid" />
            <FaRegUserCircle />
          </div>
          <div className="inputbox">
            <input type="password" placeholder="Password" name="password" />
            <MdOutlineLock />
          </div>

          <Link href="/dashboard">
            <button type="submit">LOGIN</button>
          </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;
