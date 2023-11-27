import {
  About,
  Contact,
  Dashboard,
  Home,
  Login,
  NotFound,
  Profile,
  Protected,
  Shop,
  SingUp,
  SingleProductInfo,
} from "$pages"
import { Default, Order, Setting, Wishlist } from "$pages/profile/Pages"

import { Fragment } from "react"
import { Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<SingleProductInfo />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/" element={<Protected />}>
          <Route path="/profile" element={<Profile />}>
            <Route index element={<Default />} />
            <Route path="orders" element={<Order />} />
            <Route path="settings" element={<Setting />} />
            <Route path="wishlist" element={<Wishlist />} />
          </Route>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Fragment>
  )
}

export default App
