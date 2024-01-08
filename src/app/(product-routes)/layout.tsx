import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { Menu } from "@/components/Menu";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <>
      <Menu session={session} />
      {children}
    </>
  );
}
