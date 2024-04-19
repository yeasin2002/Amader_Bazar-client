import notFound from "$assets/illustration/others/notFound.png"
import { clientEnv } from "$lib"

interface getImgProps {
  img: string | undefined
  imgType: "user-img" | "product-img" | "category-img" | "pending-user-img"
  notFoundImg?: any
}

export const getImgSrc = ({ img, imgType, notFoundImg = notFound }: getImgProps) => {
  let imgUrl: string
  if (!img) {
    imgUrl = notFoundImg
  } else {
    imgUrl = `${clientEnv.baseUrl}/extra/${imgType}/${img}`
  }

  return imgUrl
}
