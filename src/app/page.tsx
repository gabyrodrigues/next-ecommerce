import Container from "@/components/Container";
import { Menu } from "@/components/Menu";

export default function Home() {
  return (
    <>
      <Menu />

      <Container className="max-w-screen-xl py-16 text-center">Produtos</Container>
    </>
  );
}
