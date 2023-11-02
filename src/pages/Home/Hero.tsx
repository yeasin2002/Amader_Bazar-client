import { Image } from "$ui";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import bg from "$assets/temp/products/shoe5.jpg";
import { useId } from "react";

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font mt-32 eachSection">
                <div className="grid md:grid-cols-2 grid-cols-1 ">
                    <div className="space-y-5">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Amder Bazar
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Nulla obcaecati cupiditate molestiae ipsa
                            dicta repellendus, blanditiis ut modi. Voluptatum
                            perspiciatis mollitia blanditiis non eveniet. Ad,
                            architecto atque! Ullam numquam eaque animi
                            voluptatibus provident, sit facilis hic, ut pariatur
                            quia, necessitatibus earum? Libero quia autem
                            numquam molestias asperiores excepturi quaerat
                            repudiandae.
                        </p>
                    </div>

                    <div className="">
                        <Swiper className="mySwiper" autoplay>
                            {[1, 3, 5, 6].map(() => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const id = useId();
                                return (
                                    <SwiperSlide
                                        className="cursor-grab"
                                        key={id}
                                    >
                                        <Image
                                            className="object-cover w-full   h-96  rounded-md "
                                            src={bg}
                                            alt="apple watch photo"
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
