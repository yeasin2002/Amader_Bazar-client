import logo from "$assets/cover/logo.png"

type logProps = React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>

export const Logo = ({ ...rest }: logProps) => {
  return <img src={logo} alt="logo" {...rest} />
}
