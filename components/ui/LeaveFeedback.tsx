"use client";
import { ActionIcon, Button, Radio, Textarea } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useRef, useEffect } from "react";

const options = [
  "Gabeth isn’t responding",
  "The responses are not factually correct",
  "The responses don’t generate completely",
];

function LeaveFeedback() {
  const feedbackRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (feedbackRef.current) {
      feedbackRef.current.focus();
    }
  }, []);
  return (
    <ActionIcon
      variant='default'
      aria-label='Help'
      onClick={async (e) => {
        e.preventDefault();

        modals.open({
          title: (
            <div className='flex items-center space-x-4'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                className='stroke-black dark:stroke-white'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z'
                  stroke='inherit'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7 9.15979C7 8.22979 7.76 7.46973 8.69 7.46973C9.62 7.46973 10.38 8.22979 10.38 9.15979C10.38 11.0398 7.71 11.2398 7.12 13.0298C7 13.3998 7.31 13.7698 7.7 13.7698H10.38'
                  stroke='inherit'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M16.0417 13.7599V8.04991C16.0417 7.78991 15.8717 7.55985 15.6217 7.48985C15.3717 7.41985 15.1017 7.51985 14.9617 7.73985C14.2417 8.89985 13.4617 10.2199 12.7817 11.3799C12.6717 11.5699 12.6717 11.8199 12.7817 12.0099C12.8917 12.1999 13.1017 12.3198 13.3317 12.3198H17.0017'
                  stroke='inherit'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span className='text-lg font-semibold'>Having Issues?</span>
            </div>
          ),
          centered: true,
          children: (
            <div className='space-y-4'>
              <p className='text-sm'>
                Are you having issues communicating with Gabeth? Please state
                the issue(s) below you’re facing and we’ll be sure to help!
              </p>
              <div className='mb-4'>
                <Radio.Group
                  onChange={(value) => {
                    if (feedbackRef.current) {
                      feedbackRef.current.value = value;
                    }
                  }}>
                  <div className='space-y-3'>
                    {options.map((option) => (
                      <Radio
                        checked={feedbackRef.current?.value === option}
                        key={option}
                        label={option}
                        value={option}
                      />
                    ))}
                  </div>
                </Radio.Group>
              </div>
              <Textarea
                rows={2}
                ref={feedbackRef}
                name=''
                placeholder='Can’t find your issue in among the options? Enter it here                            '
              />
              <Button>Send feedback</Button>
            </div>
          ),
        });
      }}>
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        className='stroke-black dark:stroke-white'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M18 18.8597H17.24C16.44 18.8597 15.68 19.1697 15.12 19.7297L13.41 21.4198C12.63 22.1898 11.36 22.1898 10.58 21.4198L8.87 19.7297C8.31 19.1697 7.54 18.8597 6.75 18.8597H6C4.34 18.8597 3 17.5298 3 15.8898V4.97974C3 3.33974 4.34 2.00977 6 2.00977H18C19.66 2.00977 21 3.33974 21 4.97974V15.8898C21 17.5198 19.66 18.8597 18 18.8597Z'
          stroke='inherit'
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7 9.15979C7 8.22979 7.76 7.46973 8.69 7.46973C9.62 7.46973 10.38 8.22979 10.38 9.15979C10.38 11.0398 7.71 11.2398 7.12 13.0298C7 13.3998 7.31 13.7698 7.7 13.7698H10.38'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M16.0417 13.7599V8.04991C16.0417 7.78991 15.8717 7.55985 15.6217 7.48985C15.3717 7.41985 15.1017 7.51985 14.9617 7.73985C14.2417 8.89985 13.4617 10.2199 12.7817 11.3799C12.6717 11.5699 12.6717 11.8199 12.7817 12.0099C12.8917 12.1999 13.1017 12.3198 13.3317 12.3198H17.0017'
          stroke='inherit'
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </ActionIcon>
  );
}

export default LeaveFeedback;
