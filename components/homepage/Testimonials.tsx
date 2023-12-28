"use client";
import { useMantineColorScheme } from "@mantine/core";
import "@mantine/carousel/styles.css";
import TestimonialCard from "../ui/TestimonialCard";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

const data = [
  {
    title: "Marketing Manager",
    comment:
      "As a marketing manager, I rely on accurate information and quick insights. Gabeth.AI has become my trusted companion, providing data-driven recommendations that have boosted our campaign performance significantly",
    rating: 4,
    avatar:
      "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Elementary School Teacher",
    comment:
      "In the classroom, I've found Gabeth.AI to be a fantastic educational tool. It engages my students with interactive lessons and answers their curious minds with clarity.",
    rating: 5,
    avatar:
      "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Physician",
    comment:
      "The medical field demands precision, and Gabeth.AI has been an invaluable resource. Its ability to access up-to-date research and provide medical insights has enhanced my patient care.",
    rating: 4,
    avatar:
      "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Research Scientist",
    comment:
      "In the world of research, every second counts. Gabeth.AI has accelerated our data analysis and provided critical insights that have led to groundbreaking discoveries",
    rating: 4,
    avatar:
      "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    title: "Small Business Owner",
    comment:
      "Running a small business requires wearing many hats. This Gabeth.AI has simplified tasks like customer support, inventory management, and data analysis, making it an indispensable part of my operation.",
    rating: 4,
    avatar:
      "https://images.pexels.com/photos/943235/pexels-photo-943235.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
];

function Testimonials() {
  const { colorScheme } = useMantineColorScheme();
  const mobile = useMediaQuery("(max-width: 768px)");

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <TestimonialCard
        title={item.title}
        comment={item.comment}
        rating={item.rating}
        avatar={item.avatar}
      />
    </Carousel.Slide>
  ));

  return (
    <section className='py-12 lg:py-28 px-4 bg-testimonial bg-cover'>
      <div className='container mx-auto flex flex-col items-center '>
        <div className='flex relative items-center mb-14 mx-auto max-w-md'>
          <svg
            className='absolute left-[-40px] size-24 lg:size-32 fill-black dark:fill-white'
            viewBox='0 0 313 263'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M70.4 53.1732C71.4594 52.9902 72.4666 53.7006 72.6496 54.76C72.8326 55.8194 72.1221 56.8265 71.0627 57.0095L70.4 53.1732ZM248.841 117.561L250.151 116.121L248.841 117.561ZM215.18 93.9797C214.944 92.9308 215.603 91.8894 216.652 91.6536L233.745 87.8119C234.794 87.5762 235.836 88.2354 236.071 89.2843C236.307 90.3332 235.648 91.3746 234.599 91.6104L219.405 95.0252L222.82 110.219C223.056 111.268 222.397 112.309 221.348 112.545C220.299 112.781 219.257 112.122 219.022 111.073L215.18 93.9797ZM31.3803 81.8463C23.6815 98.3564 29.9201 120.041 47.4036 142.072C64.8062 164.001 92.9844 185.747 127.847 202.004L126.201 205.532C90.9101 189.076 62.2061 166.988 44.354 144.492C26.5828 122.099 19.1942 98.7675 27.8519 80.201L31.3803 81.8463ZM127.847 202.004C162.709 218.26 197.48 225.868 225.465 225.103C253.58 224.335 274.201 215.176 281.9 198.665L285.428 200.311C276.771 218.877 254.149 228.214 225.571 228.995C196.863 229.779 161.493 221.989 126.201 205.532L127.847 202.004ZM71.0627 57.0095C51.5146 60.3865 37.4479 68.8343 31.3803 81.8463L27.8519 80.201C34.679 65.5602 50.2172 56.6598 70.4 53.1732L71.0627 57.0095ZM281.9 198.665C286.898 187.946 286.039 175.077 279.996 161.267C273.952 147.455 262.789 132.88 247.531 119.001L250.151 116.121C265.678 130.246 277.236 145.248 283.563 159.706C289.89 174.165 291.049 188.258 285.428 200.311L281.9 198.665ZM247.531 119.001C238.399 110.694 227.821 102.656 216.038 95.1976L218.12 91.9081C230.079 99.4776 240.839 107.651 250.151 116.121L247.531 119.001Z'
              fill='inherit'
            />
            <path
              d='M110.282 54.5049C90.96 49.2886 75.7436 34.0722 70.5273 14.7505C65.311 34.0722 50.0946 49.2886 30.773 54.5049C50.0946 59.7212 65.311 74.9376 70.5273 94.2593C75.7436 74.9376 90.96 59.7212 110.282 54.5049Z'
              fill='inherit'
              stroke='inherit'
              strokeWidth='3.89321'
            />
          </svg>

          <h1 className='text-2xl lg:text-4xl text-center font-semibold dark:text-white'>
            What People Say About Us
          </h1>
        </div>

        <div className='container mx-auto'>
          <Carousel
            height='100%'
            style={{ flex: 1 }}
            align={mobile ? "center" : "start"}
            loop
            slideSize={{ base: "100%", sm: "50%" }}
            // slideGap={{ base: "xl", sm: 3, md: "xl" }}
            slideGap={mobile ? "xl" : 3}
            withIndicators>
            {slides}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
