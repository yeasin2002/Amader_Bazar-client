import { Route, Routes } from "react-router-dom";

import { About, Contact, Home, Login, Register } from "$pages";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
};

export default App;
