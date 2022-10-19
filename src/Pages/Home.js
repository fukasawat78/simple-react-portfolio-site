import MotionHoc from "./MotionHoc";
import background from "../assets/home.jpg";

const HomeComponent = () => {
    return (
        <div style={{ backgroundImage: `url(${background})` }}>
            <h1>Home</h1>;
        </div>
    )
};

const Home = MotionHoc(HomeComponent);

export default Home;