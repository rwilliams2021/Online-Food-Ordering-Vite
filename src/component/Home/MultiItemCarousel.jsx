import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { TopMeals } from "./TopMeals";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
        //cssEase: "linear",
        //pauseOnHover: true,
    };
    return (
        <div>
            <Slider {...settings}>
                {TopMeals.map((item) => (
                    <CarouselItem
                        key={item.id}  // If your items have unique IDs
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </Slider>
        </div>
    )

}

export default MultiItemCarousel