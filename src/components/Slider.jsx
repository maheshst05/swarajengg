import React, { useEffect } from "react";
import Slider from "react-slick";
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.model.css"; // Ensure to import the CSS file

function Responsive() {
    useEffect(() => {
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
        });
    }, []);

    var settings = {
        autoplay: true,
        autoplaySpeed: 2500,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="slider-container w-[100%] m-auto ">
            <Slider {...settings}>
                <div className="slide">
                    <img
                        src="https://shtheme.com/demosd/metallex1/wp-content/uploads/2018/05/banner_img1.jpg"
                        alt=""
                        className="w-[100%] "
                    />
                    <div className="text-overlay" data-aos="fade-up">
                        <h1>Leader in power &</h1>
                        <h1>Automation Technology</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Exercitationem, optio? Aspernatur saepe magnam quo sint ea, qui
                            repudiandae,
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img
                        src="https://shtheme.com/demosd/metallex1/wp-content/uploads/2018/05/banner_img2.jpg"
                        alt=""
                        className="w-[100%]"
                    />
                    <div className="text-overlay" data-aos="fade-up">
                        <h1 className="h2">& Manufacturing</h1>
                        <h1>Innovation in Research</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Exercitationem, optio? Aspernatur saepe magnam quo sint ea, qui
                            repudiandae,
                        </p>
                    </div>
                </div>
                <div className="slide">
                    <img
                        src="https://shtheme.com/demosd/metallex1/wp-content/uploads/2018/05/banner_img3.jpg"
                        alt=""
                        className="w-[100%]"
                    />
                    <div className="text-overlay" data-aos="fade-up">
                        <h1 className="h3">Engineering Products and</h1>
                        <h1>solutions</h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Exercitationem, optio? Aspernatur saepe magnam quo sint ea, qui
                            repudiandae,
                        </p>
                    </div>
                </div>
            </Slider>
        </div>
    );
}

export default Responsive;
