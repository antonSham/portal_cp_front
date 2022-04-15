import { Image } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../assets/logo.png";

const HomePage = () => (
    <Carousel>
        <Carousel.Item>
            <Image src={slide1} />
        </Carousel.Item>
        <Carousel.Item>
            <Image src={slide1} />
        </Carousel.Item>

    </Carousel>
)

export default HomePage;