import { auth, currentUser } from "@clerk/nextjs/server";
import Navbar from "../components/Navbar";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

export default async function userboard() {

  // Get the userId from auth() -- if null, the user is not signed in
  const { userId } = auth();

  if (!userId) {
   return <div>you are not logged in <Link className="redirect_home" href="/home">Click here to go back to Home</Link></div>
  }

  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser()
  console.log(user);
  // Use `user` to render user details or create UI elements

  return <body>
    <nav className="navbar">
            <ul className="navbar_menu">
                <li>
                    <Link href="../home">Home</Link>
                </li>
                <li>
                    <Link href="../about">About</Link>
                </li>
                <li>
                    <Link href="../projects">Projects</Link>
                </li>
                <li>
                    <Link href="../contact">Contact</Link>
                </li>
                <li>
                <SignOutButton className="signout_button" />
                </li>

                <li><UserButton></UserButton></li>
            </ul>
        </nav>
    
    <div className="Dashboard-profile" >
    <h1>Welcome back, {user.username}!</h1>
    <ul className="dashboard-list">
    <li><span>User ID: </span>{user.id}</li>
        <li><span>Username: </span>{user.username}</li>
        <li><span>Email: </span>{user.emailAddresses[0].emailAddress}</li>
    </ul>
    </div> 
  </body> 
}