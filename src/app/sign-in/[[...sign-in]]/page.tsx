import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="Signin-div">
        <h1>Sign In</h1>
        <SignIn />
    </div>


  );
}