import { ReactNode } from "react";
import { getServerSession } from "next-auth";

import { nextAuthOptions } from "@/utils/authOptions";
import { Menu } from "@/components/Menu";

interface HomeLayoutProps {
  children: ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <>
      <Menu session={session} />
      {children}
    </>
  );
}
