// import { Nav } from "$layout";
import { About, Contact, Home, Login, NotFound, Profile, Protected, Register, Shop, SingleProduct } from "$pages"
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<Protected />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
};

export default App;
