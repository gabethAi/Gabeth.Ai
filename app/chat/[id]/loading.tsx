import LoadingSkeleton from "@/app/components/ui/LoadingSkeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <LoadingSkeleton />
    </div>
  );
}
