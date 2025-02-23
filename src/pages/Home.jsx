import { Link } from "react-router-dom";
import GooeyTextDemo from "./New";
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center">
      <h1 className="text-5xl font-bold mb-6">Find the Perfect Team for Your Next Project!</h1>
      <p className="text-lg max-w-2xl">
        Connect with like-minded individuals based on skills, interests, and availability.
        Whether it&lsquo;s a hackathon, startup, or research project, build your dream team today.
      </p>
      <Link to="/">
        <button className="btn btn-primary mt-6">Get Started</button>
      </Link>
      <GooeyTextDemo/>
    </div>
  );
};

export default Home;
