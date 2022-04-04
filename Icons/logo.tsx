import { ReactElement } from "react";
import LogoIcon from "../styles/logo.png";
import Image from "next/image";
import { IconsProps } from "./Icons.interface";

export function Logo({
  className = "",
  width = "24px",
  height = "24px",
}: IconsProps): ReactElement {
  return (
    <>
      <Image src={LogoIcon} alt="Jin S Park" width={width} height={height} />
    </>
  );
}
