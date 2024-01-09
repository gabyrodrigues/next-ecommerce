import Link from "next/link";
import { redirect } from "next/navigation";
import Image from "next/image";
import { getServerSession } from "next-auth";

import logo from "../../../public/img/logo.svg";
import { nextAuthOptions } from "@/utils/authOptions";

interface AuthProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AuthProps) {
  const session = await getServerSession(nextAuthOptions);

  if (session) {
    redirect("/");
  }

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="hidden md:block bg-[url('/img/auth-bg.png')] bg-center bg-cover pt-14 px-14 pb-10 after:content-[''] after:bg-darkGray after:bottom-0 after:left-0 after:opacity-85 after:absolute after:right-0 after:top-0">
        <div className="text-white grid grid-cols-1 h-full justify-between relative z-10">
          <Link
            className="h-fit w-fit"
            href="/">
            <Image
              src={logo}
              alt="Logo Next E-commerce"
              className="w-28"
            />
          </Link>

          <div>
            <h2>Os melhores produtos reunidos em um só lugar</h2>
            <h3 className="text-3xl font-light mt-2">
              <strong className="text-black font-bold">Next E-commerce</strong> o melhor e mais
              completo e-commerce de produtos.
            </h3>
          </div>

          <p className="self-end text-xs text-center">Next E-commerce 2024 ©</p>
        </div>
      </div>

      <div className="align-center bg-white grid justify-center z-10">{children}</div>
    </main>
  );
}
