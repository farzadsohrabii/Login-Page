
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-1/2 h-dvh bg-amber-100 ml-auto mr-auto flex flex-col">
      <Link href="./auth/signIn">Sign In</Link>
      <Link href="./auth/signUp">Sign up</Link>
    </div>
  );
}
