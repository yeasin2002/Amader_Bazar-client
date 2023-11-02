import logo from "$assets/brand/logo.png";

interface logProps
    extends React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    > {}

export const Logo = ({ ...rest }: logProps) => {
    return <img src={logo} alt="logo" {...rest} />;
};