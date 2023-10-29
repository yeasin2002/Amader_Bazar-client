import bg from "$assets/temp/slider/slider0.jpg";
import { Button } from "$ui/button";
import { Input } from "$ui/input";
import { MailOpen } from "lucide-react";

const Newsletter = () => {
    return (
        <div
            className="w-full h-full py-32 px-24  space-y-4"
            style={{
                backgroundImage: `url(${bg})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center gap-x-2">
                <span className="bg-yellow-400 p-2 rounded-full">
                    <MailOpen />
                </span>
                <p className="text-xl font-bold font-serif">Newsletter</p>
            </div>
            <div className="text-lg font-light  ">
                <p>Get weekly update</p>
            </div>

            <div className="flex w-2/4 gap-x-2">
                <div className="flex lg:w-2/3 w-full sm:flex-row flex-col  sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                    <Input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder="example@gmail.com "
                        className=""
                    />
                    <Button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        Button
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
