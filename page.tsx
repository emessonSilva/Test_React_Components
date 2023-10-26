import { Button } from "./components/button";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Image } from "./components/image";
import { List } from "./components/list";
import { Paragraph } from "./components/paragraph";
import { Square } from "./components/square";
import { Title } from "./components/title";

export default function Home() {
  return (
    <div>
      <Header></Header>
      <main>
        <Title></Title>

        <Square></Square>

        <Button></Button>

        <List></List>

        <Image></Image>

        <Paragraph></Paragraph>

        <Footer></Footer>
      </main>
    </div>
  );
}
