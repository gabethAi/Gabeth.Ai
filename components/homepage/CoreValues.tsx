import personalizedIcon from "@/app/assets/icons/personalized.svg";
import avaliabilityIcon from "@/app/assets/icons/avaliability.svg";
import productivityIcon from "@/app/assets/icons/productivity.svg";
import languageIcon from "@/app/assets/icons/language-context.svg";

import WhyUsCard from "./WhyUsCard";
import CoreValuesIllustration from "./CoreValuesIllustration";

interface Data {
  title: string;
  description: string;
  imageSrc: string;
}

const data: Data[] = [
  {
    title: "Personalized Assistance",
    description:
      "Tailored Just for You: Our AI understands your unique needs and delivers responses that feel like they were made just for you",
    imageSrc: personalizedIcon,
  },
  {
    title: "24/7 Availability",
    description:
      " Round-the-Clock Support: Say goodbye to waiting – our AI is here whenever you need a helping hand, day or night",
    imageSrc: avaliabilityIcon,
  },
  {
    title: "Enhanced Productivity",
    description:
      "Boost Your Efficiency: Let our AI handle the heavy lifting, so you can focus on what matters most",
    imageSrc: productivityIcon,
  },
  {
    title: "Language and Context Understanding",
    description:
      " Speak Naturally: Our AI understands your words and context, making conversations feel natural and intuitive",
    imageSrc: languageIcon,
  },
];

function CoreValues() {
  return (
    <div className='py-10 md:py-12 lg:py-14 px-4'>
      <div className='container mx-auto'>
        <div className='py-4 md:py-8 xl:py-12'>
          <h1 className='text-center text-2xl lg:text-4xl font-semibold'>
            Why Gabeth.AI?
          </h1>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-12 lg:gap-16 items-center'>
          <div className='col-span-1 md:col-span-2 flex flex-col items-center justify-center '>
            <CoreValuesIllustration />
          </div>

          <div className='col-span-1 md:col-span-3 '>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-x-10'>
              {data.map((item) => (
                <WhyUsCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues;
