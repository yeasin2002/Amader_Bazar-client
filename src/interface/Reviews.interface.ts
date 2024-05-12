import type { Users } from "./userAndProduct.interface"


export interface Data {
  averageRating: number
  ratingStars: RatingStars
  ratings: Rating[] | null
  totalReviewer: number
}

export interface RatingStars {
  fiveStarRating: number
  fourStarRating: number
  oneStarRating: number
  threeStarRating: number
  twoStarRating: number
}

export interface Rating {
  _id: string
  desc: string
  rating: number
  reviewers: Users
}
