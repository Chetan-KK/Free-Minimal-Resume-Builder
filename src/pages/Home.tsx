import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col sm:h-screen h-[92vh] max-h-screen justify-between">
      <Header />
      <div className="flex flex-col justify-center items-center text-center gap-3">
        <h1 className="sm:text-4xl text-2xl font-bold text-primary">
          Free Minimal Resume Builder
        </h1>
        <h2 className="sm:w-[40rem] w-80 sm:text-base text-sm text-secondary-foreground">
          Build an most Professional And Minimal Resume effortlessly and quick.
        </h2>
        <Link to={"/create/user"}>
          <Button className="border-2 border-primary mt-3 rounded-full">
            Start creating resume now
          </Button>
        </Link>
      </div>
      <div className="flex text-center justify-center items-center p-3">
        Made with ❤ by{" "}
        <a
          href="https://www.linkedin.com/in/chetan-khulage"
          className="ml-2 underline underline-offset-4"
        >
          Chetan-KK
        </a>
      </div>
    </div>
  );
};

export default Home;
