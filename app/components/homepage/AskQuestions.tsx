import React from "react";
import { Button } from "@mantine/core";
import Image from "next/image";
import inquiryIcon from "@/app/assets/icons/67.svg";
import technicalIcon from "@/app/assets/icons/68.svg";
import problemSolvingIcon from "@/app/assets/icons/90.svg";
import assistanceIcon from "@/app/assets/icons/97.svg";
import focusIcon from "@/app/assets/icons/102.svg";

const data: Props[] = [
  {
    title: "General Inquiry Focus",
    description:
      "Got a question on your mind? Ask us anything! We are here to provide answers to all your queries, from the simplest to the most complex",
    imageSrc: inquiryIcon,
  },
  {
    title: "Technical Aspect Focus",
    description:
      "Have technical questions or want to dive deep into the details? Feel free to inquire. Our experts are ready to unravel the intricacies",
    imageSrc: technicalIcon,
  },
  {
    title: "Personalised Assistance Focus",
    description:
      "Need tailored guidance or assistance? Just ask. We are committed to providing personalized solutions that suit your unique needs.",
    imageSrc: assistanceIcon,
  },
  {
    title: "Problem-Solving Focus",
    description:
      "Facing a challenge or need help solving a problem? Share it with us, and lets work together to find a solution",
    imageSrc: problemSolvingIcon,
  },
  {
    title: "Broad Spectrum Focus",
    description:
      "Whether its a short query, a lengthy inquiry, or something in between, we are all ears. Your questions drive our mission to assist you comprehensively",
    imageSrc: focusIcon,
  },
];

function AskQuestions() {
  return (
    <div className='py-12 px-4 lg:py-20 bg-ask-questions bg-[#D2D2D2] dark:bg-black bg-cover relative'>
      <div className='flex flex-col items-center justify-center container mx-auto text-slate-700 dark:text-white'>
        <div className='text-center mb-20 px-6 mx-auto md:max-w-lg lg:max-w-2xl'>
          <h2 className='font-semibold text-lg md:text-2xl mb-2'>
            Ask Us Anything
          </h2>
          <p className='leading-relaxed text-xs md:text-sm'>
            Feel free to ask your questions, whether they are brief or detailed.
            The more specific your inquiry, the more accurate and insightful our
            response will be
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center text-center lg:px-32 '>
          {data.map((item) => (
            <div
              className='grid-item last:col-span-full last:w-1/2 last:mx-auto'
              key={item.title}>
              <QuestionCard
                key={item.title}
                title={item.title}
                description={item.description}
                imageSrc={item.imageSrc}
              />
            </div>
          ))}
        </div>

        <div className='mt-14 lg:mt-20'>
          <Button
            rightSection={
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'>
                <path
                  d='M12.7071 4.63574C12.1548 4.63574 11.7071 5.08346 11.7071 5.63574C11.7071 6.18803 12.1548 6.63574 12.7071 6.63574H15.9497L4.92888 17.6566C4.53836 18.0471 4.53836 18.6802 4.92888 19.0708C5.3194 19.4613 5.95257 19.4613 6.34309 19.0708L17.3639 8.04996V11.2926C17.3639 11.8449 17.8116 12.2926 18.3639 12.2926C18.9162 12.2926 19.3639 11.8449 19.3639 11.2926V5.63574C19.3639 5.08346 18.9162 4.63574 18.3639 4.63574H12.7071Z'
                  fill='white'
                />
              </svg>
            }>
            Chat With Us Now
          </Button>
        </div>
      </div>
    </div>
  );
}

interface Props {
  title: string;
  description: string;
  imageSrc: string;
}

function QuestionCard({ title, description, imageSrc }: Props) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        className='mb-4 rounded-md'
        src={imageSrc}
        alt='Technical Icon'
        width={100}
        height={100}
      />
      <h3 className='text-sm md:text-lg font-semibold mb-1'>{title}</h3>
      <p className='text-xs md:text-sm'>{description}</p>
    </div>
  );
}

export default AskQuestions;
