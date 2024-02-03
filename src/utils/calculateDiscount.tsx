export const calculateDiscount = (price: number, discount: number) => {
  return price - (price * discount) / 100
}
