<<<<<<< HEAD
import React from 'react'
import Login from './login/page'
=======
// // "use client";
// // import { useState, useContext } from "react";
// // import axios from "axios";
// // import { useRouter } from "next/navigation"; // Import useRouter from Next.js

// // import Image from "next/image";
// // import Link from "next/link";
// // import { FaRegUserCircle } from "react-icons/fa";
// // import { MdOutlineLock } from "react-icons/md";
// // import { UserContext } from "@/app/context/UserContext";

// // const Login = () => {
// //   const router = useRouter(); // Initialize useRouter

// //   const [userId, setUserId] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [error, setError] = useState("");

// //   const { setUserData, setUserAccounts } = useContext(UserContext);

// //   const handleLogin = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const response = await axios.post(
// //         "http://102.210.244.222:6508/authentication/login",
// //         { userId, password }
// //       );
// //       console.log(response.data);
// //       if (response.data.statusCode === 200) {
// //         // Corrected the equality check
// //         setUserData(response.data);
// //         // Redirect to the dashboard page upon successful login
// //         router.push("/dashboard"); // Use router.push for navigation
// //       } else {
// //         setError("Invalid credentials. Please try again.");
// //       }
// //     } catch (error) {
// //       setError("An error occurred. Please try again later.");
// //     }
// //   };
// //   return (
// //     <section className="homelogin">
// //       <div className="left">
// //         <h1>
// //           The Ultimate
// //           <br />
// //           <span>Mobile Banking</span>
// //           <br />
// //           Experience
// //         </h1>
// //       </div>
// //       <div className="right">
// //         <Image
// //           width={169}
// //           height={74}
// //           className="chiplogo_image"
// //           src="/assets/images/vcblogo.svg"
// //           alt="vicwhite"
// //         />

// //         <h4>BANK ADMIN LOGIN</h4>
// //         <p>
// //           Sign in to continue. Your password is yours, do not share it with
// //           anyone.
// //         </p>
// //         <form action="" className="loginform" onSubmit={handleLogin}>
// //           <div className="inputbox">
// //             <input
// //               type="text"
// //               placeholder="User ID"
// //               name="userid"
// //               value={userId}
// //               onChange={(e) => setUserId(e.target.value)}
// //             />
// //             <FaRegUserCircle />
// //           </div>
// //           <div className="inputbox">
// //             <input
// //               type="password"
// //               placeholder="Password"
// //               name="password"
// //               value={password}
// //               onChange={(e) => setPassword(e.target.value)}
// //             />
// //             <MdOutlineLock />
// //           </div>
// //           {error && <div className="error-message">{error}</div>}
// //           <button type="submit" className="login-button">
// //             Login
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Login;

// "use client";
// import { useState } from "react";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/navigation";

// import Image from "next/image";
// import Link from "next/link";
// import { FaRegUserCircle } from "react-icons/fa";
// import { MdOutlineLock } from "react-icons/md";

// const Login = () => {
//   const router = useRouter();

//   const [userId, setUserId] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleLogin = async (event) => {
//     console.log("omeraaaaaaaaaaaaaaaaaaa");
//     event.preventDefault();
//     const res = await signIn("credentials", {
//       redirect: false,
//       userId,
//       password,
//     });

//     if (res.error) {
//       setError("Invalid credentials. Please try again.");
//     } else {
//       router.push("/dashboard");
//     }
//   };

//   return (
//     <section className="homelogin">
//       <div className="left">
//         <h1>
//           The Ultimate
//           <br />
//           <span>Mobile Banking</span>
//           <br />
//           Experience
//         </h1>
//       </div>
//       <div className="right">
//         <Image
//           width={169}
//           height={74}
//           className="chiplogo_image"
//           src="/assets/images/vcblogo.svg"
//           alt="vicwhite"
//         />
//         <h4>BANK ADMIN LOGIN</h4>
//         <p>
//           Sign in to continue. Your password is yours, do not share it with
//           anyone.
//         </p>
//         <form action="" className="loginform" onSubmit={handleLogin}>
//           <div className="inputbox">
//             <input
//               type="text"
//               placeholder="User ID"
//               name="userid"
//               value={userId}
//               onChange={(e) => setUserId(e.target.value)}
//             />
//             <FaRegUserCircle />
//           </div>
//           <div className="inputbox">
//             <input
//               type="password"
//               placeholder="Password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <MdOutlineLock />
//           </div>
//           {error && <div className="error-message">{error}</div>}
//           <button type="submit" className="login-button">
//             Login
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;

import React from "react";
import Login from "./login/page";

>>>>>>> b7ab2dbc77114df8f35d644c73e834f660993aa0
const page = () => {
  return (
    <div>
      <Login />
    </div>
<<<<<<< HEAD
  )
}

export default page
=======
  );
};

export default page;
>>>>>>> b7ab2dbc77114df8f35d644c73e834f660993aa0
