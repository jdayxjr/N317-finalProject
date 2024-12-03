import Link from "next/link";
import navStyles from "./nav.module.css";
import { SignIn } from "@clerk/nextjs";
import { SignOutButton } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.mainNav}>
        <li>
          <Link href="/page.js">Home</Link>
        </li>
        <li>
          <Link href="/UserProfile">User</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="../sign-in">Login</Link>
        </li>
        <li><UserButton></UserButton></li>
      </ul>
    </nav>
  );
}