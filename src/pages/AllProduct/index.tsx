import { FilterArea } from "$components";

import demo from "$assets/3D_icons/lottiy/delivery-boy.json";
import demo2 from "$assets/3D_icons/lottiy/email-marketing.json";
import demo3 from "$assets/3D_icons/lottiy/fast-shopping-delivery.json";
import demo4 from "$assets/3D_icons/lottiy/online-food-order.json";
import demo5 from "$assets/3D_icons/lottiy/successful-food-delivery.json";
import demo6 from "$assets/3D_icons/lottiy/truck-delivery-done.json";
import demo7 from "$assets/3D_icons/lottiy/woman-shopping-online.json";

import Lottie from "lottie-react";

export const AllProduct = () => {
    return (
        <div>
            <Lottie animationData={demo} width={50} height={50} />
            <Lottie animationData={demo2} width={50} height={50} />
            <Lottie animationData={demo3} width={50} height={50} />
            <Lottie animationData={demo4} width={50} height={50} />
            <Lottie animationData={demo5} width={50} height={50} />
            <Lottie animationData={demo6} width={50} height={50} />
            <Lottie animationData={demo7} width={50} height={50} />

            <FilterArea />
        </div>
    );
};
