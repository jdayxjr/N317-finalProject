import Link from "next/link";
import navStyles from "./nav.module.css";

export default function Nav() {
  return (
    <nav>
      <ul className={navStyles.mainNav}>
        <li>
          <Link href="/">Home</Link>
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

      </ul>
    </nav>
  );
}