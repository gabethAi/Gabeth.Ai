import { Avatar, Rating } from "@mantine/core";

interface Props {
  title: string;
  comment: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({ title, comment, rating, avatar }: Readonly<Props>) {
  return (
    <div className='relative flex h-60'>
      <Avatar
        size={"lg"}
        className='absolute left-8 lg:left-12 top-14'
        src={avatar}
      />
      <div className='testimonial-card bg-slate-600 dark:bg-black text-white'>
        <div className='pl-32 pr-12 py-8'>
          <h6 className='text-sm'>{comment}</h6>

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
