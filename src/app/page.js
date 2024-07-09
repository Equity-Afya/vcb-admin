import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLock } from "react-icons/md";


export default function Home() {



  return (
    <section className="homelogin">
      <div className="left">
        <h1>The Ultimate<br />
          <span>Mobile Banking</span><br />
          Experience</h1></div>
      <div className="right">
        <Image
          width={169}
          height={74}
          className='chiplogo_image'
          src="/assets/images/vcblogo.svg"
          alt="vicwhite"
        />

          <h4>BANK ADMIN LOGIN</h4>
          <p>Sign in to continue. Your password is yours, do not share it with anyone.</p>
          <form action="" className="loginform">
            <div className="inputbox"><input type="text" placeholder="User ID" name="userid" /><FaRegUserCircle /></div>
            <div className="inputbox"><input type="password" placeholder="Password" name="password" /><MdOutlineLock /></div>

            <Link href="/dashboard"><button type="submit">LOGIN</button></Link>
          </form>
        </div>
    </section>
  );
}

