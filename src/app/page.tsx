"use client"

import { Newsletter } from "@/components"
import { Footer } from "@/layout"
import { clientEnv } from "@/lib"
import React from "react"
import { DisplayCategory, FeatureProductWrapper, Hero, ProductContainer } from "./_Home"
import "./globals.css"

const Home = () => {
  console.log("baseUrl", clientEnv.baseUrl)

  return (
    <div className="upperArea mb-0 h-full max-h-full w-full  bg-chai">
      <Hero />
      <DisplayCategory />
      <FeatureProductWrapper />
      <ProductContainer heading="All Products" />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Home
