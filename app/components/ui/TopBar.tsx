"use client";
import { Badge, Button, Tooltip } from "@mantine/core";
import useThemeToggler from "@/app/lib/hooks/useThemeToggler";
import { BiMoon, BiSun } from "react-icons/bi";

function TopBar() {
  const { theme, toggleTheme } = useThemeToggler();
  return (
    <div className='flex justify-end items-center gap-x-4'>
      <Button
        size='sm'
        leftSection={
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M5.02665 6.44034L4.996 6.10842C3.90679 6.20902 3.08094 6.52298 2.54338 7.20377C2.01557 7.8722 1.81999 8.82845 1.81999 10.0803V10.167C1.81999 11.5468 2.06053 12.5806 2.73678 13.2569C3.41304 13.9331 4.4469 14.1737 5.82665 14.1737H10.1733C11.5531 14.1737 12.5869 13.9331 13.2632 13.2569C13.9394 12.5806 14.18 11.5468 14.18 10.167V10.0803C14.18 8.82153 13.981 7.86051 13.4431 7.19147C12.8963 6.51144 12.0573 6.20218 10.9507 6.10842C10.8527 6.098 10.7905 6.01361 10.7984 5.93271C10.8083 5.83147 10.8887 5.77061 10.975 5.77886L10.9783 5.77913C12.2513 5.88789 13.1128 6.28005 13.6649 6.94704C14.2228 7.62112 14.5133 8.63375 14.5133 10.087V10.1737C14.5133 11.765 14.1704 12.8233 13.502 13.4902C12.8335 14.1573 11.7716 14.5003 10.1733 14.5003H5.82665C4.22834 14.5003 3.16664 14.1573 2.49819 13.4888C1.82974 12.8204 1.48665 11.7587 1.48665 10.1603V10.0737C1.48665 8.63001 1.77237 7.62308 2.32155 6.95029C2.86411 6.28562 3.71019 5.89128 4.96062 5.77258C5.05474 5.76688 5.14009 5.84266 5.14823 5.92604C5.15701 6.01609 5.09125 6.09935 4.99505 6.10851L5.02665 6.44034ZM5.02665 6.44034C5.30665 6.41368 5.50665 6.16701 5.47999 5.89368C5.45332 5.62034 5.19999 5.42034 4.93332 5.44034L10.92 6.44034C13.0533 6.62034 13.8467 7.60701 13.8467 10.0803V10.167C13.8467 12.8803 12.8867 13.8403 10.1733 13.8403H5.82665C3.11332 13.8403 2.15332 12.8803 2.15332 10.167V10.0803C2.15332 7.62034 2.93332 6.63368 5.02665 6.44034Z'
              fill='white'
              stroke='white'
              stroke-width='0.666667'
            />
            <path
              d='M8 10.1659C7.91076 10.1659 7.83333 10.0885 7.83333 9.99926V2.4126C7.83333 2.32336 7.91076 2.24593 8 2.24593C8.08924 2.24593 8.16667 2.32336 8.16667 2.4126V9.99926C8.16667 10.0885 8.08924 10.1659 8 10.1659Z'
              fill='white'
              stroke='white'
              stroke-width='0.666667'
            />
            <path
              d='M8.23592 2.13727L8.00022 1.90156L7.76452 2.13727L5.88452 4.01727C5.82136 4.08043 5.71242 4.08043 5.64926 4.01727C5.5861 3.95411 5.5861 3.84516 5.64926 3.782L7.88259 1.54867C7.94575 1.48551 8.05469 1.48551 8.11785 1.54867L10.3512 3.782C10.4143 3.84516 10.4143 3.95411 10.3512 4.01727L10.351 4.01713L10.3432 4.02553C10.323 4.04714 10.2838 4.0663 10.2336 4.0663C10.1905 4.0663 10.1501 4.05146 10.1159 4.01727L8.23592 2.13727Z'
              fill='white'
              stroke='white'
              stroke-width='0.666667'
            />
          </svg>
        }
        rightSection={
          <Badge color='green' size='xs'>
            Coming soon
          </Badge>
        }>
        Share chat
      </Button>
      <Tooltip position='bottom-end' label={"Switch Mode"}>
        <Button
          size='sm'
          onClick={toggleTheme}
          rightSection={theme === "dark" ? <BiMoon /> : <BiSun />}>
          {theme} mode
        </Button>
      </Tooltip>
    </div>
  );
}

export default TopBar;
