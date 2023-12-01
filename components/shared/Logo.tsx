import logoLight from "@/app/assets/icons/logo-light.svg";
import logoDark from "@/app/assets/icons/logo-dark.svg";
import Image from "next/image";

interface Props {
  size?: number | `${number}`;
}

function Logo({ size }: Props) {
  return (
    <>
      {/* logo on dark mode */}
      <Image
        src={logoDark}
        className='hidden dark:block'
        alt='Gabeth.Ai Logo'
        width={size ? size : 100}
        height={size ? size : 100}
      />

      {/* logo on light mode */}
      <Image
        className='block dark:hidden'
        src={logoLight}
        alt='Gabeth.Ai Logo'
        width={size ? size : 100}
        height={size ? size : 100}
      />
    </>
  );
}

export default Logo;
