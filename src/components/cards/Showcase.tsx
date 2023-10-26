import desertHuman from "$assets/temp/products/shoe1-1.jpg";
import desertCamel from "$assets/temp/products/shoe3.jpg";
import { DisplayCard } from "./DisplayCard";

export function ShowCase() {
    return (
        <section className="container py-14">
            <div className="flex flex-col gap-4 md:flex-row">
                <DisplayCard
                    url={desertHuman}
                    title="ESCAPE TO PARADISE"
                    description="Book now and save 20% on your tropical getaway!"
                />
                <DisplayCard
                    url={desertCamel}
                    title="ESCAPE TO PARADISE"
                    description="Book now and save 20% on your tropical getaway!"
                    dark
                />
            </div>
        </section>
    );
}
