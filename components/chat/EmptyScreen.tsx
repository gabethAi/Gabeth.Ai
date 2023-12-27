"use client";
import { Button, Card, Stack } from "@mantine/core";
import { UseChatHelpers } from "ai/react";
import { MdArrowRight } from "react-icons/md";

import { motion } from "framer-motion";

const suggestions = [
  {
    heading: "Explain technical concepts",
    message: `Explain a random technical concept`,
  },
  {
    heading: "Summarize an article",
    message: "Summarize a random article",
  },
  {
    heading: "Draft an email",
    message: `Draft a random email`,
  },
  {
    heading: "Write a blog post",
    message: `Write a random blog post`,
  },
];

function EmptyScreen({
  handleSubmit,
  setInput,
}: Pick<UseChatHelpers, "handleSubmit" | "setInput">) {
  return (
    <div className='max-w-3xl mx-auto flex flex-col gap-y-16 md:gap-y-28 lg:gap-y-36 px-4 md:px-10 lg:px-16 xl:px-20'>
      <div className='flex flex-col md:max-w-md mx-auto items-center justify-center text-center gap-y-4'>
        <svg
          className='animate-pulse w-20 h-20 lg:w-32 lg:h-32'
          viewBox='0 0 129 128'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <g filter='url(#filter0_f_401_44787)'>
            <path
              d='M84.7204 64.1923C84.7204 75.5531 82.4171 85.8179 78.7124 93.2273C74.9954 100.661 69.9368 105.102 64.4721 105.102C59.0074 105.102 53.9488 100.661 50.2318 93.2273C46.5271 85.8179 44.2238 75.5531 44.2238 64.1923C44.2238 52.8314 46.5271 42.5666 50.2318 35.1572C53.9488 27.7231 59.0074 23.2824 64.4721 23.2824C69.9368 23.2824 74.9954 27.7231 78.7124 35.1572C82.4171 42.5666 84.7204 52.8314 84.7204 64.1923Z'
              stroke='#F99898'
              strokeWidth='0.826462'
            />
            <path
              d='M64.4725 43.9446C75.8334 43.9446 86.0982 46.2479 93.5076 49.9526C100.942 53.6697 105.382 58.7282 105.382 64.1929C105.382 69.6576 100.942 74.7162 93.5076 78.4333C86.0982 82.1379 75.8334 84.4413 64.4725 84.4413C53.1117 84.4413 42.8468 82.1379 35.4375 78.4333C28.0034 74.7162 23.5626 69.6576 23.5626 64.1929C23.5626 58.7282 28.0034 53.6697 35.4375 49.9526C42.8468 46.2479 53.1117 43.9446 64.4725 43.9446Z'
              stroke='#98E8F9'
              strokeWidth='0.826462'
            />
            <path
              d='M78.7901 49.8742C86.8234 57.9075 92.4531 66.7946 95.0727 74.6534C97.701 82.5385 97.2641 89.2555 93.4 93.1196C89.5359 96.9837 82.8189 97.4206 74.9338 94.7923C67.075 92.1727 58.1879 86.543 50.1546 78.5097C42.1213 70.4764 36.4917 61.5893 33.8721 53.7305C31.2437 45.8455 31.6806 39.1284 35.5447 35.2643C39.4088 31.4002 46.1259 30.9633 54.0109 33.5916C61.8697 36.2113 70.7568 41.8409 78.7901 49.8742Z'
              stroke='#BA55BC'
              strokeWidth='0.826462'
            />
            <path
              d='M84.0314 58.9513C86.9718 69.925 87.4037 80.4363 85.743 88.552C84.0767 96.6948 80.3398 102.294 75.0613 103.708C69.7828 105.122 63.7473 102.142 58.2328 95.9234C52.7367 89.7253 47.8551 80.4063 44.9147 69.4326C41.9743 58.4589 41.5424 47.9477 43.2031 39.8319C44.8694 31.6891 48.6063 26.0904 53.8848 24.6761C59.1633 23.2617 65.1989 26.2419 70.7133 32.4606C76.2095 38.6587 81.091 47.9776 84.0314 58.9513Z'
              stroke='#E65454'
              strokeWidth='0.826462'
            />
            <path
              d='M84.0316 69.433C81.0912 80.4067 76.2097 89.7257 70.7135 95.9237C65.1991 102.142 59.1635 105.123 53.885 103.708C48.6065 102.294 44.8696 96.6952 43.2033 88.5524C41.5426 80.4367 41.9745 69.9254 44.9149 58.9517C47.8553 47.978 52.7369 38.659 58.233 32.461C63.7475 26.2423 69.783 23.2621 75.0615 24.6764C80.34 26.0908 84.0769 31.6895 85.7432 39.8323C87.4039 47.9481 86.972 58.4593 84.0316 69.433Z'
              stroke='#DAE654'
              strokeWidth='0.826462'
            />
            <path
              d='M82.0818 53.8754C87.7622 63.7141 90.8999 73.7554 91.3962 82.0245C91.8942 90.3211 89.7337 96.6962 85.0012 99.4286C80.2686 102.161 73.6673 100.844 66.7313 96.2648C59.8182 91.7004 52.6911 83.9625 47.0106 74.1237C41.3302 64.285 38.1925 54.2437 37.6962 45.9746C37.1982 37.678 39.3587 31.3029 44.0913 28.5705C48.8238 25.8382 55.4251 27.1547 62.3612 31.7343C69.2742 36.2987 76.4014 44.0366 82.0818 53.8754Z'
              stroke='#FC73FF'
              strokeWidth='0.826462'
            />
            <path
              d='M82.0819 74.1237C76.4015 83.9624 69.2743 91.7004 62.3613 96.2647C55.4252 100.844 48.8239 102.161 44.0914 99.4285C39.3588 96.6961 37.1983 90.321 37.6963 82.0244C38.1927 73.7554 41.3304 63.7141 47.0108 53.8753C52.6912 44.0366 59.8183 36.2986 66.7314 31.7342C73.6675 27.1546 80.2687 25.8381 85.0013 28.5705C89.7338 31.3028 91.8943 37.6779 91.3963 45.9746C90.9 54.2436 87.7623 64.2849 82.0819 74.1237Z'
              stroke='#F1F998'
              strokeWidth='0.826462'
            />
            <path
              d='M78.8182 78.5367C70.7848 86.57 61.8978 92.1997 54.039 94.8193C46.1539 97.4476 39.4369 97.0107 35.5728 93.1466C31.7086 89.2825 31.2718 82.5654 33.9001 74.6804C36.5197 66.8216 42.1494 57.9345 50.1827 49.9012C58.216 41.8679 67.1031 36.2382 74.9619 33.6186C82.8469 30.9903 89.564 31.4272 93.4281 35.2913C97.2922 39.1554 97.7291 45.8725 95.1007 53.7575C92.4811 61.6163 86.8515 70.5034 78.8182 78.5367Z'
              stroke='#54E686'
              strokeWidth='0.826462'
            />
            <path
              d='M74.6241 81.7556C64.7854 87.436 54.7441 90.5737 46.475 91.07C38.1784 91.568 31.8033 89.4075 29.071 84.675C26.3386 79.9424 27.6551 73.3412 32.2347 66.4051C36.7991 59.492 44.537 52.3649 54.3758 46.6845C64.2146 41.0041 74.2559 37.8664 82.5249 37.37C90.8215 36.872 97.1966 39.0325 99.929 43.7651C102.661 48.4976 101.345 55.0989 96.7652 62.035C92.2009 68.948 84.4629 76.0752 74.6241 81.7556Z'
              stroke='#98F9BF'
              strokeWidth='0.826462'
            />
            <path
              d='M74.6246 46.6842C84.4634 52.3646 92.2014 59.4918 96.7657 66.4048C101.345 73.3409 102.662 79.9422 99.9295 84.6747C97.1971 89.4073 90.822 91.5678 82.5254 91.0698C74.2564 90.5735 64.2151 87.4358 54.3763 81.7554C44.5375 76.0749 36.7996 68.9478 32.2352 62.0347C27.6556 55.0986 26.3391 48.4974 29.0715 43.7648C31.8038 39.0323 38.1789 36.8718 46.4755 37.3698C54.7446 37.8661 64.7859 41.0038 74.6246 46.6842Z'
              stroke='#BD98F9'
              strokeWidth='0.826462'
            />
            <path
              d='M69.7406 44.6602C80.7143 47.6006 90.0333 52.4822 96.2314 57.9784C102.45 63.4928 105.43 69.5284 104.016 74.8069C102.602 80.0854 97.0028 83.8222 88.86 85.4886C80.7443 87.1493 70.233 86.7174 59.2593 83.777C48.2856 80.8366 38.9667 75.955 32.7686 70.4589C26.5499 64.9444 23.5697 58.9089 24.9841 53.6304C26.3984 48.3519 31.9971 44.615 40.1399 42.9487C48.2557 41.2879 58.7669 41.7199 69.7406 44.6602Z'
              stroke='#7E3EE5'
              strokeWidth='0.826462'
            />
            <path
              d='M69.7406 83.7785C58.7669 86.7189 48.2556 87.1508 40.1399 85.49C31.9971 83.8237 26.3984 80.0869 24.984 74.8084C23.5696 69.5299 26.5498 63.4943 32.7685 57.9799C38.9666 52.4837 48.2856 47.6021 59.2593 44.6617C70.233 41.7213 80.7442 41.2894 88.86 42.9502C97.0028 44.6165 102.601 48.3534 104.016 53.6319C105.43 58.9104 102.45 64.9459 96.2313 70.4604C90.0332 75.9565 80.7143 80.8381 69.7406 83.7785Z'
              stroke='#3EBDE5'
              strokeWidth='0.826462'
            />
          </g>
          <g filter='url(#filter1_f_401_44787)'>
            <path
              d='M88.8425 64.5124C88.8425 78.0297 86.1019 90.2431 81.694 99.0589C77.2714 107.904 71.2526 113.188 64.7506 113.188C58.2486 113.188 52.2297 107.904 47.8071 99.0589C43.3992 90.2431 40.6587 78.0297 40.6587 64.5124C40.6587 50.995 43.3992 38.7816 47.8071 29.9658C52.2297 21.1206 58.2486 15.8369 64.7506 15.8369C71.2526 15.8369 77.2714 21.1206 81.694 29.9658C86.1019 38.7816 88.8425 50.995 88.8425 64.5124Z'
              stroke='#F99898'
              strokeWidth='0.983343'
            />
            <path
              d='M64.7511 40.4197C78.2685 40.4197 90.4818 43.1603 99.2977 47.5682C108.143 51.9908 113.427 58.0096 113.427 64.5116C113.427 71.0136 108.143 77.0325 99.2977 81.4551C90.4818 85.863 78.2685 88.6035 64.7511 88.6035C51.2338 88.6035 39.0204 85.863 30.2046 81.4551C21.3594 77.0325 16.0757 71.0136 16.0757 64.5116C16.0757 58.0096 21.3594 51.9908 30.2046 47.5682C39.0204 43.1603 51.2338 40.4197 64.7511 40.4197Z'
              stroke='#98E8F9'
              strokeWidth='0.983343'
            />
            <path
              d='M81.7867 47.4761C91.345 57.0343 98.0433 67.6083 101.16 76.9589C104.287 86.3407 103.768 94.3328 99.17 98.9304C94.5723 103.528 86.5803 104.048 77.1985 100.921C67.8479 97.8037 57.2739 91.1054 47.7157 81.5472C38.1574 71.989 31.4591 61.415 28.3423 52.0644C25.215 42.6826 25.7348 34.6905 30.3324 30.0929C34.9301 25.4953 42.9221 24.9754 52.3039 28.1027C61.6545 31.2196 72.2285 37.9179 81.7867 47.4761Z'
              stroke='#BA55BC'
              strokeWidth='0.983343'
            />
            <path
              d='M88.0216 58.2775C91.5201 71.3342 92.034 83.8407 90.058 93.497C88.0754 103.186 83.6292 109.847 77.3487 111.53C71.0683 113.213 63.887 109.667 57.3258 102.268C50.7864 94.893 44.9782 83.8051 41.4796 70.7484C37.9811 57.6916 37.4672 45.1851 39.4432 35.5288C41.4258 25.8403 45.872 19.1789 52.1525 17.496C58.4329 15.8132 65.6142 19.359 72.1754 26.7582C78.7148 34.1328 84.523 45.2207 88.0216 58.2775Z'
              stroke='#E65454'
              strokeWidth='0.983343'
            />
            <path
              d='M88.022 70.7477C84.5234 83.8044 78.7152 94.8923 72.1758 102.267C65.6146 109.666 58.4333 113.212 52.1528 111.529C45.8724 109.846 41.4262 103.185 39.4436 93.4963C37.4676 83.8401 37.9814 71.3336 41.48 58.2768C44.9785 45.22 50.7868 34.1321 57.3262 26.7575C63.8874 19.3584 71.0687 15.8125 77.3491 17.4953C83.6296 19.1782 88.0758 25.8396 90.0584 35.5281C92.0344 45.1844 91.5205 57.6909 88.022 70.7477Z'
              stroke='#DAE654'
              strokeWidth='0.983343'
            />
            <path
              d='M85.7026 52.2364C92.4613 63.9428 96.1946 75.8901 96.7851 85.7288C97.3777 95.6003 94.8071 103.186 89.1762 106.437C83.5453 109.688 75.691 108.121 67.4382 102.672C59.213 97.2415 50.7329 88.0347 43.9742 76.3283C37.2155 64.6219 33.4822 52.6746 32.8917 42.8359C32.2992 32.9644 34.8698 25.3792 40.5007 22.1282C46.1316 18.8771 53.9859 20.4436 62.2386 25.8924C70.4639 31.3232 78.9439 40.53 85.7026 52.2364Z'
              stroke='#FC73FF'
              strokeWidth='0.983343'
            />
            <path
              d='M85.7034 76.3289C78.9448 88.0352 70.4647 97.2421 62.2394 102.673C53.9867 108.122 46.1324 109.688 40.5015 106.437C34.8706 103.186 32.3 95.6009 32.8925 85.7294C33.4831 75.8907 37.2164 63.9433 43.975 52.237C50.7337 40.5306 59.2138 31.3238 67.4391 25.893C75.6918 20.4441 83.5461 18.8777 89.177 22.1287C94.8079 25.3797 97.3785 32.965 96.786 42.8365C96.1954 52.6751 92.4621 64.6225 85.7034 76.3289Z'
              stroke='#F1F998'
              strokeWidth='0.983343'
            />
            <path
              d='M81.8184 81.5797C72.2601 91.1379 61.6861 97.8362 52.3355 100.953C42.9537 104.08 34.9617 103.561 30.364 98.9629C25.7664 94.3653 25.2466 86.3732 28.3739 76.9914C31.4907 67.6408 38.189 57.0668 47.7473 47.5086C57.3055 37.9504 67.8795 31.2521 77.2301 28.1352C86.6119 25.008 94.604 25.5278 99.2016 30.1254C103.799 34.723 104.319 42.7151 101.192 52.0969C98.0749 61.4475 91.3766 72.0215 81.8184 81.5797Z'
              stroke='#54E686'
              strokeWidth='0.983343'
            />
            <path
              d='M76.829 85.4082C65.1227 92.1669 53.1753 95.9002 43.3366 96.4907C33.4651 97.0832 25.8799 94.5126 22.6289 88.8817C19.3779 83.2508 20.9443 75.3965 26.3932 67.1438C31.8239 58.9185 41.0308 50.4385 52.7371 43.6798C64.4435 36.9211 76.3908 33.1878 86.2295 32.5973C96.101 32.0047 103.686 34.5753 106.937 40.2062C110.188 45.8371 108.622 53.6915 103.173 61.9442C97.7422 70.1694 88.5354 78.6495 76.829 85.4082Z'
              stroke='#98F9BF'
              strokeWidth='0.983343'
            />
            <path
              d='M76.8298 43.6808C88.5362 50.4395 97.743 58.9196 103.174 67.1449C108.623 75.3976 110.189 83.2519 106.938 88.8828C103.687 94.5137 96.1019 97.0843 86.2304 96.4918C76.3917 95.9012 64.4443 92.1679 52.7379 85.4092C41.0316 78.6506 31.8248 70.1705 26.394 61.9452C20.9451 53.6925 19.3787 45.8382 22.6297 40.2073C25.8807 34.5764 33.4659 32.0058 43.3374 32.5983C53.1761 33.1889 65.1235 36.9222 76.8298 43.6808Z'
              stroke='#BD98F9'
              strokeWidth='0.983343'
            />
            <path
              d='M71.0196 41.2744C84.0764 44.773 95.1643 50.5812 102.539 57.1206C109.938 63.6818 113.484 70.8631 111.801 77.1435C110.118 83.424 103.457 87.8702 93.7683 89.8528C84.112 91.8288 71.6055 91.3149 58.5488 87.8164C45.492 84.3178 34.4041 78.5096 27.0295 71.9702C19.6303 65.409 16.0845 58.2277 17.7673 51.9473C19.4501 45.6668 26.1116 41.2206 35.8001 39.238C45.4564 37.262 57.9629 37.7759 71.0196 41.2744Z'
              stroke='#7E3EE5'
              strokeWidth='0.983343'
            />
            <path
              d='M71.0194 87.8155C57.9626 91.3141 45.4561 91.828 35.7999 89.852C26.1114 87.8694 19.4499 83.4231 17.7671 77.1427C16.0842 70.8622 19.6301 63.681 27.0293 57.1197C34.4039 50.5803 45.4918 44.7721 58.5485 41.2736C71.6053 37.775 84.1118 37.2611 93.7681 39.2371C103.457 41.2197 110.118 45.6659 111.801 51.9464C113.484 58.2269 109.938 65.4081 102.539 71.9694C95.1641 78.5088 84.0762 84.317 71.0194 87.8155Z'
              stroke='#3EBDE5'
              strokeWidth='0.983343'
            />
          </g>
          <path
            d='M74.4047 64.0944C74.4047 69.6589 73.2765 74.6866 71.462 78.3156C69.6414 81.9568 67.1637 84.1319 64.4871 84.1319C61.8106 84.1319 59.3329 81.9568 57.5123 78.3156C55.6977 74.6866 54.5696 69.6589 54.5696 64.0944C54.5696 58.5299 55.6977 53.5022 57.5123 49.8731C59.3329 46.232 61.8106 44.0569 64.4871 44.0569C67.1637 44.0569 69.6414 46.232 71.462 49.8731C73.2765 53.5022 74.4047 58.5299 74.4047 64.0944Z'
            stroke='#F99898'
            strokeWidth='0.404798'
          />
          <path
            d='M64.486 54.1769C70.0505 54.1769 75.0782 55.305 78.7072 57.1196C82.3484 58.9401 84.5235 61.4178 84.5235 64.0944C84.5235 66.771 82.3484 69.2487 78.7072 71.0693C75.0782 72.8838 70.0505 74.012 64.486 74.012C58.9215 74.012 53.8938 72.8838 50.2647 71.0693C46.6236 69.2487 44.4485 66.771 44.4485 64.0944C44.4485 61.4178 46.6236 58.9401 50.2647 57.1196C53.8938 55.305 58.9215 54.1769 64.486 54.1769Z'
            stroke='#98E8F9'
            strokeWidth='0.404798'
          />
          <path
            d='M71.499 57.0821C75.4337 61.0168 78.191 65.3696 79.4741 69.2188C80.7615 73.0809 80.5475 76.3709 78.6549 78.2635C76.7622 80.1561 73.4722 80.3701 69.6102 79.0828C65.761 77.7997 61.4081 75.0423 57.4734 71.1076C53.5388 67.1729 50.7814 62.8201 49.4983 58.9709C48.2109 55.1088 48.4249 51.8188 50.3176 49.9262C52.2102 48.0336 55.5002 47.8196 59.3622 49.1069C63.2114 50.39 67.5643 53.1474 71.499 57.0821Z'
            stroke='#BA55BC'
            strokeWidth='0.404798'
          />
          <path
            d='M74.0659 61.5272C75.5061 66.9021 75.7176 72.0505 74.9042 76.0255C74.088 80.0139 72.2577 82.7561 69.6723 83.4488C67.087 84.1416 64.1308 82.6819 61.4298 79.636C58.7378 76.6002 56.3468 72.0358 54.9066 66.6609C53.4664 61.2861 53.2549 56.1377 54.0683 52.1626C54.8845 48.1743 56.7148 45.4321 59.3002 44.7394C61.8855 44.0466 64.8417 45.5063 67.5427 48.5522C70.2347 51.588 72.6257 56.1524 74.0659 61.5272Z'
            stroke='#E65454'
            strokeWidth='0.404798'
          />
          <path
            d='M74.0665 66.6606C72.6263 72.0355 70.2353 76.5999 67.5433 79.6357C64.8423 82.6816 61.8861 84.1413 59.3008 83.4485C56.7154 82.7558 54.8851 80.0136 54.0689 76.0252C53.2555 72.0502 53.467 66.9018 54.9072 61.5269C56.3474 56.1521 58.7384 51.5877 61.4304 48.5519C64.1313 45.506 67.0875 44.0463 69.6729 44.7391C72.2583 45.4318 74.0886 48.174 74.9048 52.1623C75.7182 56.1374 75.5067 61.2858 74.0665 66.6606Z'
            stroke='#DAE654'
            strokeWidth='0.404798'
          />
          <path
            d='M73.1116 59.0403C75.8938 63.8593 77.4307 68.7774 77.6738 72.8276C77.9177 76.8912 76.8595 80.0137 74.5415 81.352C72.2235 82.6903 68.9902 82.0455 65.593 79.8024C62.207 77.5668 58.7161 73.7768 55.9339 68.9578C53.1517 64.1388 51.6148 59.2207 51.3717 55.1705C51.1278 51.1069 52.186 47.9844 54.504 46.6461C56.822 45.3078 60.0553 45.9526 63.4525 48.1957C66.8385 50.4313 70.3294 54.2213 73.1116 59.0403Z'
            stroke='#FC73FF'
            strokeWidth='0.404798'
          />
          <path
            d='M73.1119 68.9581C70.3297 73.7771 66.8388 77.5672 63.4529 79.8028C60.0556 82.0458 56.8223 82.6906 54.5043 81.3523C52.1864 80.0141 51.1282 76.8916 51.3721 72.8279C51.6152 68.7778 53.152 63.8596 55.9342 59.0406C58.7165 54.2216 62.2073 50.4316 65.5933 48.196C68.9906 45.9529 72.2238 45.3081 74.5418 46.6464C76.8598 47.9847 77.918 51.1072 77.6741 55.1708C77.431 59.221 75.8942 64.1392 73.1119 68.9581Z'
            stroke='#F1F998'
            strokeWidth='0.404798'
          />
          <path
            d='M71.5131 71.1196C67.5784 75.0543 63.2256 77.8116 59.3764 79.0947C55.5143 80.3821 52.2243 80.1681 50.3317 78.2755C48.4391 76.3828 48.2251 73.0928 49.5125 69.2308C50.7955 65.3816 53.5529 61.0287 57.4876 57.094C61.4223 53.1594 65.7751 50.402 69.6243 49.1189C73.4864 47.8315 76.7764 48.0455 78.669 49.9382C80.5616 51.8308 80.7756 55.1208 79.4883 58.9828C78.2052 62.8321 75.4478 67.1849 71.5131 71.1196Z'
            stroke='#54E686'
            strokeWidth='0.404798'
          />
          <path
            d='M69.4592 72.6966C64.6403 75.4788 59.7221 77.0156 55.6719 77.2587C51.6083 77.5026 48.4858 76.4444 47.1475 74.1265C45.8092 71.8085 46.454 68.5752 48.6971 65.1779C50.9327 61.792 54.7227 58.3011 59.5417 55.5189C64.3607 52.7366 69.2789 51.1998 73.329 50.9567C77.3927 50.7128 80.5151 51.771 81.8534 54.089C83.1917 56.407 82.5469 59.6402 80.3039 63.0375C78.0682 66.4235 74.2782 69.9143 69.4592 72.6966Z'
            stroke='#98F9BF'
            strokeWidth='0.404798'
          />
          <path
            d='M69.4591 55.5184C74.2781 58.3007 78.0681 61.7915 80.3037 65.1775C82.5468 68.5748 83.1916 71.808 81.8533 74.126C80.515 76.444 77.3925 77.5022 73.3289 77.2583C69.2787 77.0152 64.3606 75.4784 59.5416 72.6961C54.7226 69.9139 50.9326 66.423 48.697 63.0371C46.4539 59.6398 45.8091 56.4065 47.1474 54.0885C48.4857 51.7705 51.6082 50.7123 55.6718 50.9563C59.7219 51.1994 64.6401 52.7362 69.4591 55.5184Z'
            stroke='#BD98F9'
            strokeWidth='0.404798'
          />
          <path
            d='M67.0674 54.5283C72.4423 55.9685 77.0066 58.3594 80.0424 61.0514C83.0883 63.7524 84.548 66.7086 83.8553 69.294C83.1625 71.8793 80.4203 73.7097 76.432 74.5258C72.4569 75.3392 67.3086 75.1277 61.9337 73.6875C56.5588 72.2473 51.9944 69.8563 48.9586 67.1643C45.9127 64.4634 44.453 61.5072 45.1458 58.9218C45.8385 56.3364 48.5808 54.5061 52.5691 53.69C56.5441 52.8765 61.6925 53.0881 67.0674 54.5283Z'
            stroke='#7E3EE5'
            strokeWidth='0.404798'
          />
          <path
            d='M67.0665 73.6865C61.6916 75.1267 56.5433 75.3382 52.5682 74.5248C48.5799 73.7086 45.8377 71.8783 45.1449 69.2929C44.4522 66.7076 45.9119 63.7514 48.9578 61.0504C51.9935 58.3584 56.5579 55.9674 61.9328 54.5272C67.3077 53.087 72.4561 52.8755 76.4311 53.6889C80.4194 54.5051 83.1616 56.3354 83.8544 58.9208C84.5471 61.5061 83.0875 64.4623 80.0416 67.1633C77.0058 69.8553 72.4414 72.2463 67.0665 73.6865Z'
            stroke='#3EBDE5'
            strokeWidth='0.404798'
          />
          <defs>
            <filter
              id='filter0_f_401_44787'
              x='12.9572'
              y='12.4567'
              width='103.087'
              height='103.087'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'>
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='2.7128'
                result='effect1_foregroundBlur_401_44787'
              />
            </filter>
            <filter
              id='filter1_f_401_44787'
              x='5.97874'
              y='5.47825'
              width='117.61'
              height='117.61'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'>
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='BackgroundImageFix'
                result='shape'
              />
              <feGaussianBlur
                stdDeviation='1.96669'
                result='effect1_foregroundBlur_401_44787'
              />
            </filter>
          </defs>
        </svg>

        <div>
          <h2 className='text-xl lg:text-2xl xl:text-3xl font-semibold mb-2'>
            Hello there
          </h2>
          <p className='text-sm font-medium leading-loose'>
            How may I be of assistance? You can ask me a question, or pick a
            suggestion.
          </p>
        </div>
      </div>

      <div>
        <h6 className='text-center text-sm md:text-base mb-4'>
          You can ask me to...
        </h6>
        <form
          onSubmit={(e) => {
            e.preventDefault();

            handleSubmit(e);
          }}
          className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          {suggestions.map((suggestion, index) => (
            <motion.div
              className='w-full '
              key={suggestion.message}
              initial={{ opacity: 0, x: 100 }} // Initial state is fully transparent and shifted 100px to the right
              animate={{ opacity: 1, x: 0 }} // Animate to fully opaque and original position
              transition={{
                // Control the speed and delay of the animation
                delay: index * 0.2, // Delay each button's animation by 0.2 seconds times its index
                duration: 0.5, // Animation duration is 0.5 seconds
                ease: "easeOut", // Use 'easeOut' easing function
              }}>
              <Button
                fullWidth
                variant='default'
                type='submit'
                onClick={() => setInput(suggestion.message)}>
                {suggestion.heading}
              </Button>
            </motion.div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default EmptyScreen;
