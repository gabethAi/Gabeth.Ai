import { Avatar, Paper, Rating } from "@mantine/core";
import React from "react";

interface Props {
  title: string;
  comment: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({ title, comment, rating, avatar }: Props) {
  return (
    <div className='relative flex min-h-[240px]'>
      <Avatar size={"lg"} className='absolute left-20 top-14' src={avatar} />
      <div className='testimonial-card bg-black text-white'>
        <div className='pl-32 pr-12 py-8'>
          <h6 className='text-xs sm:text-sm'>{comment}</h6>

          <div className='mt-6'>
            <p className='text-xs sm:text-sm mb-2'>{title}</p>
            <Rating value={rating} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
