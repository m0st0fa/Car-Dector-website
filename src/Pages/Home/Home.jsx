import Service from "../Services/Service";
import About from "./About/About";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;