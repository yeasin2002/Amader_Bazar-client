import { FilterArea } from "$components";

import demo from "$assets/3D_icons/lottiy/delivery-boy.json";
import Lottie from "lottie-react";

export const AllProduct = () => {
    return (
        <div>
            <Lottie animationData={demo} />

            <FilterArea />
        </div>
    );
};
