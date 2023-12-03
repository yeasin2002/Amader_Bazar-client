/* eslint-disable @typescript-eslint/no-explicit-any */
import notFound from "$assets/illustration/others/notFound.png"
import { baseUrl } from "$lib/exportEnv"

interface getImgProps {
  img: string | undefined
  imgType: "user-img" | "product-img" | "category-img" | "pending-user-img"
  notFoundImg?: any
}

export const getImgSrc = ({ img, imgType, notFoundImg = notFound }: getImgProps) => {
  let imgUrl
  if (!img) {
    imgUrl = notFoundImg
  } else {
    imgUrl = `${baseUrl}/extra/${imgType}/${img}`
  }

  return imgUrl
}
