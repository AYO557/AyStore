import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import heroImg from "../../assets/img/hero.jpg";
import storesImg from "../../assets/img/stores.jpg";
import CustomButton from "../basic/CustomButton";

function HeroSection() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div
          className="sm:h-[90vh] h-[60vh] flex items-center justify-center text-center"
          style={{
            background: `linear-gradient(rgba(0, 0, 140, 0.3), rgba(0, 0, 140, 0.3)), url(${heroImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <article className="h-full flex items-center justify-center flex-col gap-4 sm:w-[70%] w-[90%]">
            <h1 className="text-4xl font-bold">
              We provide our clients with the best products at the best price.
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              vel delectus ab incidunt provident eos.
            </p>
            <span>
              <CustomButton
                text="Shop Now"
                style={
                  "hover:text-white hover:border hover:bg-transparent bg-white text-blue-600"
                }
              />
            </span>
          </article>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="sm:h-[90vh] h-[60vh] flex items-center justify-center text-center"
          style={{
            background: `linear-gradient(rgba(0, 0, 140, 0.3), rgba(0, 0, 140, 0.3)), url(${storesImg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <article className="h-full flex items-center justify-center flex-col gap-2 w-[70%]">
            <h1 className="text-4xl font-bold">
              We provide our clients with the best products at the best price.
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
              vel delectus ab incidunt provident eos.
            </p>
            <span>
              <CustomButton
                text="Shop Now"
                style={
                  "hover:text-white hover:border hover:bg-transparent bg-white text-blue-600"
                }
              />
            </span>
          </article>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}

export default HeroSection;
