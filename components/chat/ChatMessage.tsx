import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";

import { cn } from "@/lib/utils";
import { MemoizedReactMarkdown } from "../ui/MemoizedReactMarkdown";
import UserAvatar from "../ui/UserAvatar";
import MarkdownComponents from "../ui/MarkDownComponents";
import { Components } from "react-markdown";
import { Message } from "@/lib/db/schema";
import { Carousel } from "@mantine/carousel";

export interface ChatMessageProps {
  message: Message;
  childMessages?: Message[];
}

export function ChatMessage({
  message,
  childMessages,
}: Readonly<ChatMessageProps>) {
  // console.log({ childMessages, message });
  return (
    <div className={cn("group relative my-6 flex items-start md:-ml-12")}>
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 select-none items-center justify-center"
        )}>
        {message.role === "user" ? (
          <UserAvatar />
        ) : (
          <svg
            width='39'
            height='40'
            viewBox='0 0 39 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <g filter='url(#filter0_f_401_44886)'>
              <path
                d='M25.3185 20.0604C25.3185 23.6107 24.5987 26.8185 23.441 29.1339C22.2794 31.4571 20.6986 32.8448 18.9909 32.8448C17.2832 32.8448 15.7024 31.4571 14.5408 29.1339C13.3831 26.8185 12.6633 23.6107 12.6633 20.0604C12.6633 16.5102 13.3831 13.3024 14.5408 10.987C15.7024 8.66384 17.2832 7.27611 18.9909 7.27611C20.6986 7.27611 22.2794 8.66384 23.441 10.987C24.5987 13.3024 25.3185 16.5102 25.3185 20.0604Z'
                stroke='#F99898'
                strokeWidth='0.25827'
              />
              <path
                d='M18.9916 13.7332C22.5419 13.7332 25.7496 14.453 28.0651 15.6107C30.3882 16.7723 31.7759 18.3531 31.7759 20.0608C31.7759 21.7686 30.3882 23.3494 28.0651 24.5109C25.7496 25.6687 22.5419 26.3884 18.9916 26.3884C15.4413 26.3884 12.2336 25.6687 9.91815 24.5109C7.59499 23.3494 6.20726 21.7686 6.20726 20.0608C6.20726 18.3531 7.59499 16.7723 9.91815 15.6107C12.2336 14.453 15.4413 13.7332 18.9916 13.7332Z'
                stroke='#98E8F9'
                strokeWidth='0.25827'
              />
              <path
                d='M23.466 15.5864C25.9764 18.0968 27.7357 20.874 28.5543 23.3299C29.3757 25.794 29.2392 27.8931 28.0316 29.1006C26.8241 30.3082 24.725 30.4447 22.2609 29.6233C19.8051 28.8047 17.0279 27.0454 14.5174 24.535C12.007 22.0246 10.2478 19.2474 9.42913 16.7915C8.60777 14.3274 8.7443 12.2284 9.95184 11.0208C11.1594 9.81329 13.2585 9.67676 15.7225 10.4981C18.1784 11.3167 20.9556 13.076 23.466 15.5864Z'
                stroke='#BA55BC'
                strokeWidth='0.25827'
              />
              <path
                d='M25.1031 18.4229C26.022 21.8522 26.1569 25.137 25.6379 27.6731C25.1172 30.2178 23.9495 31.9674 22.2999 32.4094C20.6504 32.8513 18.7643 31.92 17.041 29.9767C15.3235 28.0398 13.798 25.1276 12.8791 21.6983C11.9602 18.2691 11.8253 14.9843 12.3442 12.4481C12.865 9.90349 14.0327 8.1539 15.6823 7.71191C17.3318 7.26992 19.2179 8.20122 20.9412 10.1446C22.6587 12.0815 24.1842 14.9936 25.1031 18.4229Z'
                stroke='#E65454'
                strokeWidth='0.25827'
              />
              <path
                d='M25.1032 21.6983C24.1843 25.1276 22.6588 28.0398 20.9412 29.9767C19.218 31.92 17.3319 32.8513 15.6823 32.4093C14.0328 31.9673 12.865 30.2177 12.3443 27.6731C11.8253 25.1369 11.9603 21.8522 12.8792 18.4229C13.798 14.9936 15.3235 12.0814 17.0411 10.1445C18.7643 8.20119 20.6505 7.26989 22.3 7.71188C23.9495 8.15387 25.1173 9.90346 25.638 12.4481C26.157 14.9843 26.022 18.269 25.1032 21.6983Z'
                stroke='#DAE654'
                strokeWidth='0.25827'
              />
              <path
                d='M24.4941 16.8366C26.2693 19.9113 27.2498 23.0492 27.4049 25.6332C27.5605 28.2259 26.8854 30.2181 25.4064 31.072C23.9275 31.9259 21.8646 31.5145 19.6971 30.0833C17.5368 28.657 15.3095 26.2389 13.5344 23.1642C11.7593 20.0896 10.7787 16.9517 10.6236 14.3676C10.468 11.775 11.1432 9.78273 12.6221 8.92888C14.101 8.07502 16.1639 8.48643 18.3314 9.91755C20.4918 11.3439 22.719 13.762 24.4941 16.8366Z'
                stroke='#FC73FF'
                strokeWidth='0.25827'
              />
              <path
                d='M24.4947 23.1644C22.7196 26.239 20.4923 28.6572 18.332 30.0835C16.1645 31.5146 14.1016 31.9261 12.6227 31.0722C11.1437 30.2183 10.4686 28.2261 10.6242 25.6334C10.7793 23.0493 11.7598 19.9114 13.535 16.8368C15.3101 13.7622 17.5373 11.3441 19.6977 9.91774C21.8652 8.48662 23.9281 8.07521 25.407 8.92907C26.8859 9.78293 27.5611 11.7751 27.4055 14.3678C27.2504 16.9519 26.2698 20.0898 24.4947 23.1644Z'
                stroke='#F1F998'
                strokeWidth='0.25827'
              />
              <path
                d='M23.4741 24.5432C20.9637 27.0536 18.1865 28.8129 15.7306 29.6315C13.2665 30.4528 11.1675 30.3163 9.95993 29.1088C8.7524 27.9012 8.61587 25.8022 9.43723 23.3381C10.2559 20.8822 12.0151 18.105 14.5255 15.5946C17.0359 13.0842 19.8131 11.3249 22.269 10.5063C24.7331 9.68492 26.8322 9.82145 28.0397 11.029C29.2473 12.2365 29.3838 14.3356 28.5624 16.7997C27.7438 19.2556 25.9845 22.0328 23.4741 24.5432Z'
                stroke='#54E686'
                strokeWidth='0.25827'
              />
              <path
                d='M22.1639 25.5493C19.0892 27.3244 15.9513 28.305 13.3673 28.4601C10.7746 28.6157 8.78234 27.9405 7.92849 26.4616C7.07463 24.9827 7.48603 22.9198 8.91716 20.7523C10.3435 18.5919 12.7616 16.3647 15.8362 14.5896C18.9109 12.8144 22.0488 11.8339 24.6328 11.6788C27.2255 11.5232 29.2178 12.1983 30.0716 13.6773C30.9255 15.1562 30.5141 17.2191 29.0829 19.3866C27.6566 21.5469 25.2385 23.7742 22.1639 25.5493Z'
                stroke='#98F9BF'
                strokeWidth='0.25827'
              />
              <path
                d='M22.1635 14.5893C25.2381 16.3644 27.6562 18.5916 29.0826 20.752C30.5137 22.9195 30.9251 24.9824 30.0712 26.4613C29.2174 27.9402 27.2251 28.6154 24.6324 28.4598C22.0484 28.3047 18.9105 27.3241 15.8359 25.549C12.7612 23.7739 10.3431 21.5466 8.91676 19.3863C7.48564 17.2188 7.07424 15.1559 7.92809 13.677C8.78195 12.198 10.7742 11.5229 13.3669 11.6785C15.9509 11.8336 19.0888 12.8141 22.1635 14.5893Z'
                stroke='#BD98F9'
                strokeWidth='0.25827'
              />
              <path
                d='M20.6378 13.9569C24.067 14.8758 26.9792 16.4013 28.9161 18.1188C30.8595 19.8421 31.7908 21.7282 31.3488 23.3777C30.9068 25.0273 29.1572 26.195 26.6126 26.7158C24.0764 27.2347 20.7916 27.0998 17.3624 26.1809C13.9331 25.262 11.0209 23.7365 9.084 22.019C7.14064 20.2957 6.20934 18.4096 6.65133 16.7601C7.09332 15.1105 8.84291 13.9428 11.3875 13.4221C13.9237 12.9031 17.2085 13.038 20.6378 13.9569Z'
                stroke='#7E3EE5'
                strokeWidth='0.25827'
              />
              <path
                d='M20.6371 26.1817C17.2078 27.1006 13.9231 27.2355 11.3869 26.7166C8.84228 26.1958 7.09269 25.0281 6.6507 23.3785C6.20871 21.729 7.14001 19.8429 9.08337 18.1196C11.0203 16.4021 13.9324 14.8766 17.3617 13.9577C20.791 13.0388 24.0758 12.9039 26.6119 13.4229C29.1566 13.9436 30.9062 15.1113 31.3481 16.7609C31.7901 18.4104 30.8588 20.2965 28.9155 22.0198C26.9786 23.7373 24.0664 25.2628 20.6371 26.1817Z'
                stroke='#3EBDE5'
                strokeWidth='0.25827'
              />
            </g>
            <g filter='url(#filter1_f_401_44886)'>
              <path
                d='M26.6076 20.1601C26.6076 24.3843 25.7512 28.201 24.3737 30.9559C22.9916 33.7201 21.1107 35.3712 19.0789 35.3712C17.047 35.3712 15.1661 33.7201 13.784 30.9559C12.4066 28.201 11.5501 24.3843 11.5501 20.1601C11.5501 15.936 12.4066 12.1193 13.784 9.36435C15.1661 6.60021 17.047 4.94906 19.0789 4.94906C21.1107 4.94906 22.9916 6.60021 24.3737 9.36435C25.7512 12.1193 26.6076 15.936 26.6076 20.1601Z'
                stroke='#F99898'
                strokeWidth='0.307295'
              />
              <path
                d='M19.0786 12.6312C23.3028 12.6312 27.1194 13.4876 29.8744 14.8651C32.6385 16.2472 34.2897 18.128 34.2897 20.1599C34.2897 22.1918 32.6385 24.0727 29.8744 25.4547C27.1194 26.8322 23.3028 27.6886 19.0786 27.6886C14.8544 27.6886 11.0378 26.8322 8.28281 25.4547C5.51867 24.0727 3.86751 22.1918 3.86751 20.1599C3.86751 18.128 5.51867 16.2472 8.28281 14.8651C11.0378 13.4876 14.8544 12.6312 19.0786 12.6312Z'
                stroke='#98E8F9'
                strokeWidth='0.307295'
              />
              <path
                d='M24.4016 14.8362C27.3886 17.8231 29.4818 21.1275 30.4558 24.0496C31.4331 26.9814 31.2706 29.4789 29.8339 30.9157C28.3971 32.3524 25.8996 32.5148 22.9678 31.5376C20.0457 30.5636 16.7413 28.4703 13.7544 25.4834C10.7675 22.4965 8.67424 19.1921 7.70022 16.27C6.72295 13.3382 6.88539 10.8407 8.32215 9.40393C9.7589 7.96718 12.2564 7.80474 15.1882 8.78201C18.1103 9.75603 21.4147 11.8492 24.4016 14.8362Z'
                stroke='#BA55BC'
                strokeWidth='0.307295'
              />
              <path
                d='M26.3501 18.2119C27.4434 22.2921 27.604 26.2004 26.9865 29.218C26.3669 32.2457 24.9775 34.3274 23.0149 34.8532C21.0522 35.3791 18.8081 34.2711 16.7577 31.9588C14.7141 29.6542 12.8991 26.1893 11.8058 22.109C10.7125 18.0288 10.5519 14.1205 11.1694 11.1029C11.7889 8.07528 13.1784 5.99357 15.141 5.46769C17.1037 4.9418 19.3478 6.04988 21.3982 8.36213C23.4418 10.6667 25.2568 14.1317 26.3501 18.2119Z'
                stroke='#E65454'
                strokeWidth='0.307295'
              />
              <path
                d='M26.3509 22.1087C25.2576 26.1889 23.4425 29.6539 21.3989 31.9584C19.3485 34.2707 17.1044 35.3788 15.1418 34.8529C13.1791 34.327 11.7897 32.2453 11.1701 29.2176C10.5526 26.2 10.7132 22.2918 11.8065 18.2115C12.8998 14.1313 14.7149 10.6663 16.7584 8.36176C18.8088 6.04952 21.053 4.94143 23.0156 5.46732C24.9782 5.99321 26.3677 8.07491 26.9872 11.1026C27.6047 14.1202 27.4442 18.0284 26.3509 22.1087Z'
                stroke='#DAE654'
                strokeWidth='0.307295'
              />
              <path
                d='M25.6261 16.3238C27.7381 19.982 28.9048 23.7155 29.0894 26.7901C29.2745 29.875 28.4712 32.2454 26.7115 33.2613C24.9519 34.2772 22.4974 33.7877 19.9184 32.085C17.348 30.3878 14.698 27.5107 12.5859 23.8525C10.4739 20.1942 9.30719 16.4607 9.12265 13.3861C8.93749 10.3012 9.7408 7.93086 11.5005 6.91493C13.2601 5.89899 15.7146 6.38849 18.2936 8.09127C20.864 9.78838 23.514 12.6655 25.6261 16.3238Z'
                stroke='#FC73FF'
                strokeWidth='0.307295'
              />
              <path
                d='M25.6256 23.8532C23.5135 27.5114 20.8635 30.3886 18.2931 32.0857C15.7141 33.7885 13.2596 34.278 11.5 33.262C9.74032 32.2461 8.93701 29.8757 9.12217 26.7909C9.30672 23.7163 10.4734 19.9827 12.5855 16.3245C14.6975 12.6662 17.3476 9.78911 19.918 8.09199C22.4969 6.38922 24.9514 5.89971 26.7111 6.91565C28.4707 7.93159 29.274 10.302 29.0889 13.3868C28.9043 16.4614 27.7377 20.195 25.6256 23.8532Z'
                stroke='#F1F998'
                strokeWidth='0.307295'
              />
              <path
                d='M24.4119 25.4939C21.4249 28.4808 18.1205 30.5741 15.1985 31.5481C12.2667 32.5254 9.76915 32.3629 8.33239 30.9262C6.89564 29.4894 6.7332 26.9919 7.71047 24.0601C8.68449 21.138 10.7777 17.8336 13.7646 14.8467C16.7516 11.8597 20.056 9.76653 22.978 8.79251C25.9098 7.81524 28.4074 7.97768 29.8441 9.41443C31.2809 10.8512 31.4433 13.3487 30.466 16.2805C29.492 19.2026 27.3988 22.507 24.4119 25.4939Z'
                stroke='#54E686'
                strokeWidth='0.307295'
              />
              <path
                d='M22.853 26.69C19.1948 28.8021 15.4612 29.9688 12.3866 30.1533C9.30178 30.3385 6.9314 29.5352 5.91546 27.7755C4.89952 26.0159 5.38902 23.5614 7.0918 20.9824C8.78892 18.412 11.666 15.762 15.3243 13.6499C18.9825 11.5378 22.7161 10.3712 25.7907 10.1866C28.8755 10.0015 31.2459 10.8048 32.2618 12.5644C33.2778 14.3241 32.7883 16.7785 31.0855 19.3575C29.3884 21.9279 26.5112 24.5779 22.853 26.69Z'
                stroke='#98F9BF'
                strokeWidth='0.307295'
              />
              <path
                d='M22.8532 13.6503C26.5114 15.7624 29.3886 18.4124 31.0857 20.9828C32.7885 23.5618 33.278 26.0162 32.262 27.7759C31.2461 29.5356 28.8757 30.3389 25.7909 30.1537C22.7163 29.9692 18.9827 28.8025 15.3245 26.6904C11.6662 24.5783 8.78911 21.9283 7.09199 19.3579C5.38922 16.7789 4.89971 14.3245 5.91565 12.5648C6.93159 10.8052 9.30197 10.0018 12.3868 10.187C15.4614 10.3715 19.195 11.5382 22.8532 13.6503Z'
                stroke='#BD98F9'
                strokeWidth='0.307295'
              />
              <path
                d='M21.0369 12.8982C25.1171 13.9915 28.5821 15.8065 30.8867 17.8501C33.1989 19.9005 34.307 22.1446 33.7811 24.1073C33.2552 26.0699 31.1735 27.4594 28.1459 28.0789C25.1283 28.6964 21.22 28.5358 17.1397 27.4425C13.0595 26.3492 9.59454 24.5342 7.28999 22.4906C4.97774 20.4402 3.86966 18.1961 4.39554 16.2334C4.92143 14.2708 7.00313 12.8813 10.0308 12.2618C13.0484 11.6443 16.9567 11.8049 21.0369 12.8982Z'
                stroke='#7E3EE5'
                strokeWidth='0.307295'
              />
              <path
                d='M21.0371 27.4424C16.9569 28.5357 13.0486 28.6963 10.031 28.0788C7.00337 27.4592 4.92166 26.0698 4.39577 24.1072C3.86989 22.1445 4.97797 19.9004 7.29022 17.85C9.59478 15.8064 13.0597 13.9913 17.14 12.898C21.2202 11.8048 25.1285 11.6442 28.1461 12.2617C31.1737 12.8812 33.2554 14.2707 33.7813 16.2333C34.3072 18.196 33.1991 20.4401 30.8869 22.4905C28.5823 24.5341 25.1174 26.3491 21.0371 27.4424Z'
                stroke='#3EBDE5'
                strokeWidth='0.307295'
              />
            </g>
            <path
              d='M22.0947 20.0296C22.0947 21.7685 21.7422 23.3396 21.1751 24.4737C20.6062 25.6116 19.8319 26.2913 18.9955 26.2913C18.1591 26.2913 17.3848 25.6116 16.8159 24.4737C16.2488 23.3396 15.8963 21.7685 15.8963 20.0296C15.8963 18.2907 16.2488 16.7195 16.8159 15.5854C17.3848 14.4475 18.1591 13.7678 18.9955 13.7678C19.8319 13.7678 20.6062 14.4475 21.1751 15.5854C21.7422 16.7195 22.0947 18.2907 22.0947 20.0296Z'
              stroke='#F99898'
              strokeWidth='0.126499'
            />
            <path
              d='M18.9959 16.9307C20.7348 16.9307 22.3059 17.2832 23.44 17.8503C24.5779 18.4192 25.2576 19.1935 25.2576 20.0299C25.2576 20.8663 24.5779 21.6406 23.44 22.2095C22.3059 22.7766 20.7348 23.1291 18.9959 23.1291C17.257 23.1291 15.6858 22.7766 14.5517 22.2095C13.4139 21.6406 12.7341 20.8663 12.7341 20.0299C12.7341 19.1935 13.4139 18.4192 14.5517 17.8503C15.6858 17.2832 17.257 16.9307 18.9959 16.9307Z'
              stroke='#98E8F9'
              strokeWidth='0.126499'
            />
            <path
              d='M21.1872 17.8382C22.4168 19.0678 23.2785 20.428 23.6795 21.6309C24.0818 22.8378 24.0149 23.8659 23.4235 24.4574C22.832 25.0488 21.8039 25.1157 20.597 24.7134C19.3941 24.3124 18.0338 23.4507 16.8043 22.2212C15.5747 20.9916 14.713 19.6313 14.312 18.4284C13.9097 17.2215 13.9766 16.1934 14.568 15.602C15.1595 15.0105 16.1876 14.9437 17.3945 15.3459C18.5974 15.7469 19.9577 16.6086 21.1872 17.8382Z'
              stroke='#BA55BC'
              strokeWidth='0.126499'
            />
            <path
              d='M21.9891 19.2276C22.4391 20.9072 22.5053 22.5161 22.2511 23.7583C21.996 25.0046 21.424 25.8616 20.6161 26.0781C19.8082 26.2945 18.8844 25.8384 18.0403 24.8866C17.1991 23.9379 16.4519 22.5115 16.0018 20.8318C15.5518 19.1522 15.4857 17.5433 15.7399 16.3011C15.9949 15.0548 16.5669 14.1978 17.3748 13.9814C18.1827 13.7649 19.1065 14.221 19.9506 15.1729C20.7918 16.1215 21.539 17.5479 21.9891 19.2276Z'
              stroke='#E65454'
              strokeWidth='0.126499'
            />
            <path
              d='M21.9895 20.8317C21.5394 22.5113 20.7922 23.9377 19.951 24.8864C19.1069 25.8382 18.1831 26.2944 17.3752 26.0779C16.5672 25.8614 15.9953 25.0045 15.7402 23.7581C15.486 22.5159 15.5521 20.907 16.0022 19.2274C16.4523 17.5477 17.1994 16.1214 18.0407 15.1727C18.8847 14.2208 19.8085 13.7647 20.6165 13.9812C21.4244 14.1977 21.9964 15.0546 22.2514 16.3009C22.5056 17.5432 22.4395 19.152 21.9895 20.8317Z'
              stroke='#DAE654'
              strokeWidth='0.126499'
            />
            <path
              d='M21.6908 18.4502C22.5602 19.9562 23.0405 21.4931 23.1164 22.7588C23.1927 24.0287 22.862 25.0044 22.1376 25.4227C21.4132 25.8409 20.4028 25.6394 19.3412 24.9384C18.2831 24.2398 17.1922 23.0554 16.3227 21.5495C15.4533 20.0435 14.973 18.5066 14.897 17.2409C14.8208 15.971 15.1515 14.9953 15.8759 14.577C16.6003 14.1588 17.6107 14.3603 18.6723 15.0613C19.7304 15.7599 20.8213 16.9443 21.6908 18.4502Z'
              stroke='#FC73FF'
              strokeWidth='0.126499'
            />
            <path
              d='M21.691 21.5498C20.8215 23.0558 19.7306 24.2402 18.6725 24.9388C17.6109 25.6397 16.6005 25.8413 15.8761 25.423C15.1517 25.0048 14.8211 24.029 14.8973 22.7591C14.9732 21.4935 15.4535 19.9565 16.323 18.4506C17.1924 16.9447 18.2833 15.7603 19.3414 15.0617C20.4031 14.3607 21.4135 14.1592 22.1378 14.5774C22.8622 14.9956 23.1929 15.9714 23.1167 17.2413C23.0407 18.507 22.5604 20.0439 21.691 21.5498Z'
              stroke='#F1F998'
              strokeWidth='0.126499'
            />
            <path
              d='M21.1916 22.2248C19.962 23.4544 18.6018 24.3161 17.3989 24.7171C16.192 25.1194 15.1639 25.0525 14.5724 24.4611C13.981 23.8696 13.9141 22.8415 14.3164 21.6346C14.7174 20.4317 15.579 19.0714 16.8086 17.8419C18.0382 16.6123 19.3985 15.7506 20.6014 15.3496C21.8083 14.9473 22.8364 15.0142 23.4278 15.6056C24.0193 16.1971 24.0861 17.2252 23.6838 18.4321C23.2829 19.635 22.4212 20.9952 21.1916 22.2248Z'
              stroke='#54E686'
              strokeWidth='0.126499'
            />
            <path
              d='M20.5498 22.7181C19.0438 23.5876 17.5069 24.0678 16.2412 24.1438C14.9713 24.22 13.9956 23.8893 13.5773 23.1649C13.1591 22.4406 13.3606 21.4302 14.0616 20.3685C14.7602 19.3104 15.9446 18.2195 17.4505 17.3501C18.9565 16.4806 20.4934 16.0004 21.7591 15.9244C23.029 15.8482 24.0047 16.1789 24.423 16.9032C24.8412 17.6276 24.6397 18.638 23.9387 19.6996C23.2401 20.7578 22.0557 21.8487 20.5498 22.7181Z'
              stroke='#98F9BF'
              strokeWidth='0.126499'
            />
            <path
              d='M20.5498 17.3495C22.0558 18.219 23.2402 19.3099 23.9388 20.368C24.6397 21.4296 24.8413 22.44 24.423 23.1644C24.0048 23.8888 23.029 24.2195 21.7591 24.1433C20.4935 24.0673 18.9565 23.587 17.4506 22.7176C15.9447 21.8481 14.7603 20.7572 14.0617 19.6991C13.3607 18.6375 13.1592 17.6271 13.5774 16.9027C13.9956 16.1783 14.9714 15.8476 16.2413 15.9239C17.507 15.9998 19.0439 16.4801 20.5498 17.3495Z'
              stroke='#BD98F9'
              strokeWidth='0.126499'
            />
            <path
              d='M19.8024 17.0403C21.482 17.4904 22.9084 18.2376 23.8571 19.0788C24.8089 19.9229 25.2651 20.8467 25.0486 21.6546C24.8321 22.4625 23.9752 23.0345 22.7288 23.2896C21.4866 23.5438 19.8777 23.4776 18.1981 23.0276C16.5184 22.5775 15.0921 21.8303 14.1434 20.9891C13.1915 20.145 12.7354 19.2212 12.9519 18.4133C13.1684 17.6054 14.0253 17.0334 15.2716 16.7784C16.5139 16.5242 18.1227 16.5903 19.8024 17.0403Z'
              stroke='#7E3EE5'
              strokeWidth='0.126499'
            />
            <path
              d='M19.8022 23.0272C18.1226 23.4772 16.5137 23.5433 15.2715 23.2891C14.0252 23.0341 13.1682 22.4621 12.9517 21.6542C12.7352 20.8463 13.1914 19.9225 14.1432 19.0784C15.0919 18.2372 16.5183 17.49 18.1979 17.0399C19.8776 16.5899 21.4864 16.5237 22.7287 16.7779C23.975 17.033 24.8319 17.605 25.0484 18.4129C25.2649 19.2208 24.8088 20.1446 23.8569 20.9887C22.9082 21.8299 21.4819 22.5771 19.8022 23.0272Z'
              stroke='#3EBDE5'
              strokeWidth='0.126499'
            />
            <defs>
              <filter
                id='filter0_f_401_44886'
                x='2.89239'
                y='3.89288'
                width='32.2142'
                height='32.2147'
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
                  stdDeviation='0.847751'
                  result='effect1_foregroundBlur_401_44886'
                />
              </filter>
              <filter
                id='filter1_f_401_44886'
                x='0.712228'
                y='1.71223'
                width='36.7533'
                height='36.7533'
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
                  stdDeviation='0.614589'
                  result='effect1_foregroundBlur_401_44886'
                />
              </filter>
            </defs>
          </svg>
        )}
      </div>
      <div className='flex-1 px-1 ml-4 space-y-2 overflow-hidden'>
        <MemoizedReactMarkdown
          className='prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 leading-relaxed space-y-4'
          remarkPlugins={[remarkGfm, remarkMath]}
          components={MarkdownComponents as Partial<Components>}>
          {message.content}
        </MemoizedReactMarkdown>
      </div>
    </div>
  );
}
