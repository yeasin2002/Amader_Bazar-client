import {
  About,
  Contact,
  Dashboard,
  Home,
  Login,
  NotFound,
  Profile,
  Protected,
  Register,
  Shop,
  SingleProductInfo,
} from "$pages"
import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"
import { Nav } from "./layout"

const App = () => {
  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProductInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<Protected />}>
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Fragment>
  )
}

export default App
