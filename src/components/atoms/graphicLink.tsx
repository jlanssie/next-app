import Image from "next/image";
import "./graphicLink.scss";

export const GraphicLink = (props: any) => {
  return (
    <a href={props.url} target="_blank" rel="noreferrer">
      <Image src={props.src} height={40} width={40} alt={props.alt} />
    </a>
  );
};
