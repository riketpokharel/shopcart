import Container from "@/components/Container";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <Container className="bg-shop-light-pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum
        asperiores qui libero error quibusdam atque beatae a deleniti debitis
        est maiores dolores provident quasi iste, repellendus soluta
        exercitationem ut! Sunt ex ipsum corporis non! Accusantium excepturi
        deserunt quo minima. Accusamus, atque? Harum assumenda aspernatur
        aliquid soluta reiciendis inventore veritatis.
      </p>
      <Button size="lg">Check out</Button>
    </Container>
  );
};
export default Home;
