import coreValuesDark from "@/app/assets/brand/core-values-dark.svg";
import coreValuesLight from "@/app/assets/brand/coreValues-light.svg";
import Image from "next/image";

function CoreValuesIllustration() {
  return (
    <>
      <Image
        className='dark:hidden block'
        src={coreValuesLight}
        alt='An Illustration of Gabeth.Ai'
      />

      <Image
        className='dark:block hidden'
        src={coreValuesDark}
        alt='An Illustration of Gabeth.Ai'
      />
    </>
  );
}

export default CoreValuesIllustration;
