import bg from "$assets/img/main.jpg";
// import { useToast } from "$ui";
import { Button } from "$ui/button";
import { Input } from "$ui/input";
import { MailOpen } from "lucide-react";
import { FormEventHandler } from "react";

const Newsletter = () => {
    const sendMailIntoUs: FormEventHandler = async (e) => {
        e.preventDefault();
    };
    return (
        <div
            className="h-full w-full space-y-4 px-24  py-32"
            style={{
                backgroundImage: `url(${bg})`,
                objectFit: "cover",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="flex items-center gap-x-2">
                <span className="rounded-full bg-brand-900 p-2 ">
                    <MailOpen />
                </span>
                <p className="font-serif text-xl font-bold text-white">
                    Newsletter
                </p>
            </div>
            <div className="text-lg font-light  ">
                <p>Get weekly update</p>
            </div>

            <form className="flex w-2/4 gap-x-2" onSubmit={sendMailIntoUs}>
                <div className="flex w-full flex-col items-end space-y-4  sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0 lg:w-2/3">
                    <Input
                        type="text"
                        id="full-name"
                        name="full-name"
                        placeholder="example@gmail.com "
                        className=""
                    />
                    <Button type="submit" variant={"secondary"}>
                        Send
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;
