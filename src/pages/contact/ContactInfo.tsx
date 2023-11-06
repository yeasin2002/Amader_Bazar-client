import { Image } from "$ui";
import { DetailedHTMLProps, FC, HTMLAttributes } from "react";

interface ContactInfoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  imgUrl: string;
  infoOne: string;
  infoTwo?: string;
}

export const ContactInfo: FC<ContactInfoProps> = ({ imgUrl = "", infoOne = "", infoTwo = "", ...rest }) => {
  return (
    <div {...rest} className="space-y-1">
      <Image src={imgUrl} alt={infoOne} className="aspect-square h-14    w-14" />
      <p className="text-lg font-medium text-gray-700">{infoOne}</p>
      <p className="text-lg font-medium text-gray-700">{infoTwo}</p>
    </div>
  );
};
