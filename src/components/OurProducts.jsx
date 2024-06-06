import { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';

const OurProducts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  var settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=''>
      <div className="background p-10">
        <p
          className='text-white font-bold text-2xl font-sans'
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Products__
        </p>
        <p
          className='text-gray-300 mt-5'
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="slider-container" data-aos="fade-down" data-aos-delay="300">
        <Slider {...settings}>
          <div>
            <img src="https://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img2-1.jpg" alt="" />
          </div>
          <div>
            <img src="http://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img2-1.jpg" alt="" />
          </div>
          <div>
            <img src="http://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img1-2.jpg" alt="" />
          </div>
          <div>
            <img src="http://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img4-1.jpg" alt="" />
          </div>
          <div>
            <img src="https://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img2-1.jpg" alt="" />
          </div>
          <div>
            <img src="http://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img2-1.jpg" alt="" />
          </div>
          <div>
            <img src="http://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img1-2.jpg" alt="" />
          </div>
          <div>
            <img src="http://shtheme.net/demosd/metallex1/wp-content/uploads/2018/05/home_project_img4-1.jpg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurProducts;
