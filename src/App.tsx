import { Route, Routes } from "react-router-dom";

import {
    About,
    AllProduct,
    Contact,
    Home,
    Login,
    NotFound,
    Register,
    SingleProduct,
} from "$pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/shop" element={<AllProduct />} />
            <Route path="/shop/:id" element={<SingleProduct />} />

            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
