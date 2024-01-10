import { ReactNode } from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { nextAuthOptions } from "@/utils/authOptions";
import { Menu } from "@/components/Menu";

interface ProductLayoutProps {
  children: ReactNode;
}

export default async function ProductLayout({ children }: ProductLayoutProps) {
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
