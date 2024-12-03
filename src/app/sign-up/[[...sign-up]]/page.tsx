import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(

    <div className="Signup-div">
        <h1>Sign-up</h1>
        <SignUp />
    </div>
    


  );
}