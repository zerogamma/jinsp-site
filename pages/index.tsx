import Container from "../components/container/container";
import Intro from "../components/intro/intro";
import Menu from "../components/menu/menu";

export default function Home() {
  return (
    <Container>
      <Menu></Menu>
      <Intro />
    </Container>
  );
}
