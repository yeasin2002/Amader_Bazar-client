import { Image } from "$ui";

import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { HeroItems } from "$data";
import { useId } from "react";

const Hero = () => {
    return (
        <>
            <section className="body-font eachSection mt-32 text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 ">
                    <div className="space-y-5">
                        <h1 className="mb-6 text-5xl font-bold text-gray-900">
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
                        <Swiper
                            className="mySwiper"
                            spaceBetween={30}
                            centeredSlides={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Autoplay, Pagination, Navigation]}
                        >
                            {HeroItems.map((items) => {
                                // eslint-disable-next-line react-hooks/rules-of-hooks
                                const id = useId();
                                return (
                                    <SwiperSlide
                                        className="cursor-grab"
                                        key={id}
                                    >
                                        <Image
                                            className="h-96 w-full   rounded-md  object-cover "
                                            src={items.img}
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
