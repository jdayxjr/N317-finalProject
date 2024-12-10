import Link from "next/link";
import navStyles from "./nav.module.css";
import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";
export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.mainNav}>
        {/* Logo */}
        <li className={navStyles.logoContainer}>
          <Image
            src="/Logo.png"
            width={70} // Adjusted for visual consistency
            height={70}
            className={navStyles.logoImage}
            alt="Logo"
          />
        </li>

        {/* Navigation Links */}
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/user-profile">User</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="../sign-in">Login</Link>
        </li>
        <li><SignOutButton className={navStyles.SignOutButton} /></li>
      </ul>
    </nav>
  );
}