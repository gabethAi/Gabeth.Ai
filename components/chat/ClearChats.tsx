"use client";
import { deleteChatsByUserId } from "@/lib/actions";
import { User } from "@/lib/db/schema";
import { openModal } from "@/lib/utils";
import { Button } from "@mantine/core";

function ClearChats({ user }: { readonly user: User }) {
  return (
    <Button
      color='red'
      size='xs'
      onClick={async (e) => {
        e.preventDefault();

        openModal({
          title: (
            <div className='flex space-x-2 items-center'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect width='32' height='32' rx='8' fill='#FFA9A9' />
                <path
                  d='M15.9987 22.8335C12.2295 22.8335 9.16536 19.7694 9.16536 16.0002C9.16536 12.2309 12.2295 9.16683 15.9987 9.16683C19.7679 9.16683 22.832 12.2309 22.832 16.0002C22.832 19.7694 19.7679 22.8335 15.9987 22.8335ZM15.9987 9.50016C12.4146 9.50016 9.4987 12.4161 9.4987 16.0002C9.4987 19.5843 12.4146 22.5002 15.9987 22.5002C19.5828 22.5002 22.4987 19.5843 22.4987 16.0002C22.4987 12.4161 19.5828 9.50016 15.9987 9.50016Z'
                  fill='#C91111'
                  stroke='#C91111'
                  strokeWidth='0.666667'
                />
                <path
                  d='M16 16.8335C15.9108 16.8335 15.8333 16.7561 15.8333 16.6668V13.3335C15.8333 13.2443 15.9108 13.1668 16 13.1668C16.0892 13.1668 16.1667 13.2443 16.1667 13.3335V16.6668C16.1667 16.7561 16.0892 16.8335 16 16.8335Z'
                  fill='#C91111'
                  stroke='#C91111'
                  strokeWidth='0.666667'
                />
                <path
                  d='M15.6965 18.8004L15.6966 18.8004L15.6931 18.7919C15.6739 18.746 15.6654 18.7029 15.6654 18.6668C15.6654 18.6307 15.6739 18.5875 15.6931 18.5416C15.7094 18.5025 15.7318 18.4653 15.7616 18.4297C15.7973 18.3998 15.8344 18.3774 15.8736 18.3611C15.9515 18.3286 16.0459 18.3286 16.1238 18.3611C16.163 18.3774 16.2001 18.3998 16.2358 18.4297C16.2656 18.4653 16.288 18.5025 16.3043 18.5416C16.3235 18.5875 16.332 18.6307 16.332 18.6668C16.332 18.7029 16.3235 18.746 16.3043 18.7919L16.3042 18.7918L16.3009 18.8004C16.2878 18.8346 16.27 18.8642 16.2364 18.9034C16.2005 18.9335 16.1632 18.956 16.1238 18.9724C16.0779 18.9915 16.0348 19.0001 15.9987 19.0001C15.9626 19.0001 15.9195 18.9915 15.8736 18.9724C15.8342 18.956 15.7969 18.9335 15.761 18.9034C15.7274 18.8642 15.7096 18.8346 15.6965 18.8004Z'
                  fill='#C91111'
                  stroke='#C91111'
                  strokeWidth='0.666667'
                />
              </svg>

              <h2 className='text-base font-medium'>Delete chat History</h2>
            </div>
          ),
          centered: true,
          labels: {
            confirm: "Delete",
            cancel: "Cancel",
          },
          confirmProps: { color: "red" },
          children: (
            <p className='text-sm font-medium leading-relaxed'>
              Are you sure you want to delete all of your chat history? You will
              not be able to access them anymore once they are all deleted
            </p>
          ),
          onConfirm: async () => {
            await deleteChatsByUserId(user.email);
          },

          onCancel: () => console.log("Cancel"),
        });
      }}>
      Delete
    </Button>
  );
}

export default ClearChats;
