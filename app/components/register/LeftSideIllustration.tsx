import React from "react";

function LeftSideIllustration() {
  return (
    <div className='relative hidden lg:block bg-register-right-illustration bg-cover bg-no-repeat bg-center w-full h-full'>
      <div
        className='absolute inset-0'
        style={{
          background:
            "linear-gradient(180deg, rgba(24, 24, 24, 0) 52.83%, #181818 100%)",
        }}
      />
      <svg
        className='absolute bottom-14 left-20'
        xmlns='http://www.w3.org/2000/svg'
        width='452'
        height='75'
        viewBox='0 0 452 75'
        fill='none'>
        <path
          d='M52.3635 25.75C51.8863 24.0909 51.2158 22.625 50.3522 21.3523C49.4886 20.0568 48.4317 18.9659 47.1817 18.0796C45.9545 17.1705 44.5454 16.4773 42.9545 16C41.3863 15.5228 39.6476 15.2841 37.7385 15.2841C34.1704 15.2841 31.034 16.1705 28.3295 17.9432C25.6476 19.7159 23.5567 22.2955 22.0567 25.6818C20.5567 29.0455 19.8067 33.1591 19.8067 38.0228C19.8067 42.8864 20.5454 47.0228 22.0226 50.4318C23.4999 53.8409 25.5908 56.4432 28.2954 58.2387C30.9999 60.0114 34.1931 60.8978 37.8749 60.8978C41.2158 60.8978 44.0681 60.3068 46.4317 59.125C48.8181 57.9205 50.6363 56.2273 51.8863 54.0455C53.159 51.8637 53.7954 49.2841 53.7954 46.3068L56.7954 46.75H38.7954V35.6364H68.0113V44.4318C68.0113 50.5682 66.7158 55.8409 64.1249 60.25C61.534 64.6364 57.9658 68.0228 53.4204 70.4091C48.8749 72.7728 43.6704 73.9546 37.8067 73.9546C31.2613 73.9546 25.5113 72.5114 20.5567 69.625C15.6022 66.7159 11.7385 62.5909 8.96582 57.25C6.21582 51.8864 4.84082 45.5228 4.84082 38.1591C4.84082 32.5 5.659 27.4546 7.29537 23.0227C8.95446 18.5682 11.2726 14.7955 14.2499 11.7046C17.2272 8.61366 20.6931 6.26138 24.6476 4.64775C28.6022 3.03411 32.8863 2.22729 37.4999 2.22729C41.4545 2.22729 45.1363 2.80684 48.5454 3.96593C51.9545 5.1023 54.9772 6.71593 57.6135 8.80684C60.2726 10.8977 62.4431 13.3864 64.1249 16.2727C65.8067 19.1364 66.8863 22.2955 67.3635 25.75H52.3635Z'
          fill='#D2D2D2'
        />
        <path
          d='M91.8384 73.9887C88.4975 73.9887 85.5203 73.4091 82.9066 72.25C80.293 71.0682 78.2248 69.3296 76.7021 67.0341C75.2021 64.7159 74.4521 61.8296 74.4521 58.375C74.4521 55.4659 74.9862 53.0228 76.0543 51.0455C77.1225 49.0682 78.5771 47.4773 80.418 46.2728C82.2589 45.0682 84.3498 44.1591 86.6907 43.5455C89.0544 42.9318 91.5316 42.5 94.1225 42.25C97.168 41.9318 99.6225 41.6364 101.486 41.3637C103.35 41.0682 104.702 40.6364 105.543 40.0682C106.384 39.5 106.804 38.6591 106.804 37.5455V37.3409C106.804 35.1818 106.123 33.5114 104.759 32.3296C103.418 31.1477 101.509 30.5568 99.0316 30.5568C96.418 30.5568 94.3384 31.1364 92.793 32.2955C91.2475 33.4318 90.2248 34.8637 89.7248 36.5909L76.293 35.5C76.9748 32.3182 78.3157 29.5682 80.3157 27.25C82.3157 24.9091 84.8953 23.1137 88.0543 21.8637C91.2362 20.5909 94.918 19.9546 99.0998 19.9546C102.009 19.9546 104.793 20.2955 107.452 20.9773C110.134 21.6591 112.509 22.7159 114.577 24.1477C116.668 25.5796 118.316 27.4205 119.52 29.6705C120.725 31.8978 121.327 34.5682 121.327 37.6818V73H107.554V65.7387H107.145C106.304 67.375 105.179 68.8182 103.77 70.0682C102.361 71.2955 100.668 72.2614 98.6907 72.9659C96.7134 73.6478 94.4293 73.9887 91.8384 73.9887ZM95.9975 63.9659C98.1339 63.9659 100.02 63.5455 101.657 62.7046C103.293 61.8409 104.577 60.6818 105.509 59.2273C106.441 57.7728 106.907 56.125 106.907 54.2841V48.7273C106.452 49.0228 105.827 49.2955 105.032 49.5455C104.259 49.7728 103.384 49.9887 102.407 50.1932C101.429 50.375 100.452 50.5455 99.4748 50.7046C98.4975 50.8409 97.6112 50.9659 96.8157 51.0796C95.1112 51.3296 93.6225 51.7273 92.3498 52.2728C91.0771 52.8182 90.0884 53.5568 89.3839 54.4887C88.6793 55.3978 88.3271 56.5341 88.3271 57.8978C88.3271 59.875 89.043 61.3864 90.4748 62.4318C91.9293 63.4546 93.7703 63.9659 95.9975 63.9659Z'
          fill='#D2D2D2'
        />
        <path
          d='M130.947 73V3.18184H145.47V29.4318H145.913C146.549 28.0228 147.47 26.5909 148.674 25.1364C149.901 23.6591 151.492 22.4318 153.447 21.4546C155.424 20.4546 157.879 19.9546 160.81 19.9546C164.629 19.9546 168.151 20.9546 171.379 22.9546C174.606 24.9318 177.185 27.9205 179.117 31.9205C181.049 35.8978 182.015 40.8864 182.015 46.8864C182.015 52.7273 181.072 57.6591 179.185 61.6818C177.322 65.6818 174.776 68.7159 171.549 70.7841C168.345 72.8296 164.754 73.8523 160.776 73.8523C157.958 73.8523 155.56 73.3864 153.583 72.4546C151.629 71.5228 150.026 70.3523 148.776 68.9432C147.526 67.5114 146.572 66.0682 145.913 64.6137H145.265V73H130.947ZM145.163 46.8182C145.163 49.9318 145.595 52.6478 146.458 54.9659C147.322 57.2841 148.572 59.0909 150.208 60.3864C151.845 61.6591 153.833 62.2955 156.174 62.2955C158.538 62.2955 160.538 61.6478 162.174 60.3523C163.81 59.0341 165.049 57.2159 165.89 54.8978C166.754 52.5568 167.185 49.8637 167.185 46.8182C167.185 43.7955 166.765 41.1364 165.924 38.8409C165.083 36.5455 163.845 34.75 162.208 33.4546C160.572 32.1591 158.56 31.5114 156.174 31.5114C153.81 31.5114 151.81 32.1364 150.174 33.3864C148.56 34.6364 147.322 36.4091 146.458 38.7046C145.595 41 145.163 43.7046 145.163 46.8182Z'
          fill='#D2D2D2'
        />
        <path
          d='M213.649 74.0228C208.263 74.0228 203.626 72.9318 199.74 70.75C195.876 68.5455 192.899 65.4318 190.808 61.4091C188.717 57.3637 187.672 52.5796 187.672 47.0568C187.672 41.6705 188.717 36.9432 190.808 32.875C192.899 28.8068 195.842 25.6364 199.638 23.3637C203.456 21.0909 207.933 19.9546 213.069 19.9546C216.524 19.9546 219.74 20.5114 222.717 21.625C225.717 22.7159 228.331 24.3637 230.558 26.5682C232.808 28.7728 234.558 31.5455 235.808 34.8864C237.058 38.2046 237.683 42.0909 237.683 46.5455V50.5341H193.467V41.5341H224.013C224.013 39.4432 223.558 37.5909 222.649 35.9773C221.74 34.3637 220.479 33.1023 218.865 32.1932C217.274 31.2614 215.422 30.7955 213.308 30.7955C211.104 30.7955 209.149 31.3068 207.444 32.3296C205.763 33.3296 204.444 34.6818 203.49 36.3864C202.535 38.0682 202.047 39.9432 202.024 42.0114V50.5682C202.024 53.1591 202.501 55.3978 203.456 57.2841C204.433 59.1705 205.808 60.625 207.581 61.6478C209.354 62.6705 211.456 63.1818 213.888 63.1818C215.501 63.1818 216.979 62.9546 218.319 62.5C219.66 62.0455 220.808 61.3637 221.763 60.4546C222.717 59.5455 223.444 58.4318 223.944 57.1137L237.376 58C236.694 61.2273 235.297 64.0455 233.183 66.4546C231.092 68.8409 228.388 70.7046 225.069 72.0455C221.774 73.3637 217.967 74.0228 213.649 74.0228Z'
          fill='#D2D2D2'
        />
        <path
          d='M273.093 20.6364V31.5455H241.559V20.6364H273.093ZM248.718 8.09093H263.24V56.9091C263.24 58.25 263.445 59.2955 263.854 60.0455C264.263 60.7728 264.831 61.2841 265.559 61.5796C266.309 61.875 267.172 62.0228 268.149 62.0228C268.831 62.0228 269.513 61.9659 270.195 61.8523C270.877 61.7159 271.399 61.6137 271.763 61.5455L274.047 72.3523C273.32 72.5796 272.297 72.8409 270.979 73.1364C269.661 73.4546 268.059 73.6478 266.172 73.7159C262.672 73.8523 259.604 73.3864 256.968 72.3182C254.354 71.25 252.32 69.5909 250.865 67.3409C249.411 65.0909 248.695 62.25 248.718 58.8182V8.09093Z'
          fill='#D2D2D2'
        />
        <path
          d='M296.281 42.7273V73H281.758V3.18184H295.871V29.875H296.485C297.667 26.7841 299.576 24.3637 302.212 22.6137C304.849 20.8409 308.156 19.9546 312.133 19.9546C315.769 19.9546 318.94 20.75 321.644 22.3409C324.371 23.9091 326.485 26.1705 327.985 29.125C329.508 32.0568 330.258 35.5682 330.235 39.6591V73H315.712V42.25C315.735 39.0228 314.917 36.5114 313.258 34.7159C311.622 32.9205 309.326 32.0228 306.371 32.0228C304.394 32.0228 302.644 32.4432 301.121 33.2841C299.621 34.125 298.44 35.3523 297.576 36.9659C296.735 38.5568 296.303 40.4773 296.281 42.7273Z'
          fill='#D2D2D2'
        />
        <path
          d='M348.233 73.8864C345.983 73.8864 344.051 73.0909 342.437 71.5C340.846 69.8864 340.051 67.9546 340.051 65.7046C340.051 63.4773 340.846 61.5682 342.437 59.9773C344.051 58.3864 345.983 57.5909 348.233 57.5909C350.415 57.5909 352.324 58.3864 353.96 59.9773C355.596 61.5682 356.415 63.4773 356.415 65.7046C356.415 67.2046 356.028 68.5796 355.255 69.8296C354.505 71.0568 353.517 72.0455 352.29 72.7955C351.062 73.5228 349.71 73.8864 348.233 73.8864Z'
          fill='#D2D2D2'
        />
        <path
          d='M378.725 73H362.906L387.009 3.18184H406.031L430.1 73H414.281L396.793 19.1364H396.247L378.725 73ZM377.736 45.5568H415.1V57.0796H377.736V45.5568Z'
          fill='#D2D2D2'
        />
        <path d='M451.344 3.18184V73H436.583V3.18184H451.344Z' fill='#D2D2D2' />
        <path
          d='M48.3635 23.75C47.8863 22.0909 47.2158 20.625 46.3522 19.3523C45.4886 18.0568 44.4317 16.9659 43.1817 16.0796C41.9545 15.1705 40.5454 14.4773 38.9545 14C37.3863 13.5228 35.6476 13.2841 33.7385 13.2841C30.1704 13.2841 27.034 14.1705 24.3295 15.9432C21.6476 17.7159 19.5567 20.2955 18.0567 23.6818C16.5567 27.0455 15.8067 31.1591 15.8067 36.0228C15.8067 40.8864 16.5454 45.0228 18.0226 48.4318C19.4999 51.8409 21.5908 54.4432 24.2954 56.2387C26.9999 58.0114 30.1931 58.8978 33.8749 58.8978C37.2158 58.8978 40.0681 58.3068 42.4317 57.125C44.8181 55.9205 46.6363 54.2273 47.8863 52.0455C49.159 49.8637 49.7954 47.2841 49.7954 44.3068L52.7954 44.75H34.7954V33.6364H64.0113V42.4318C64.0113 48.5682 62.7158 53.8409 60.1249 58.25C57.534 62.6364 53.9658 66.0228 49.4204 68.4091C44.8749 70.7728 39.6704 71.9546 33.8067 71.9546C27.2613 71.9546 21.5113 70.5114 16.5567 67.625C11.6022 64.7159 7.73855 60.5909 4.96582 55.25C2.21582 49.8864 0.84082 43.5228 0.84082 36.1591C0.84082 30.5 1.659 25.4546 3.29537 21.0227C4.95446 16.5682 7.27264 12.7955 10.2499 9.70457C13.2272 6.61366 16.6931 4.26138 20.6476 2.64775C24.6022 1.03411 28.8863 0.227295 33.4999 0.227295C37.4545 0.227295 41.1363 0.806841 44.5454 1.96593C47.9545 3.1023 50.9772 4.71593 53.6135 6.80684C56.2726 8.89775 58.4431 11.3864 60.1249 14.2727C61.8067 17.1364 62.8863 20.2955 63.3635 23.75H48.3635Z'
          fill='#0A0A0A'
        />
        <path
          d='M87.8384 71.9887C84.4975 71.9887 81.5203 71.4091 78.9066 70.25C76.293 69.0682 74.2248 67.3296 72.7021 65.0341C71.2021 62.7159 70.4521 59.8296 70.4521 56.375C70.4521 53.4659 70.9862 51.0228 72.0543 49.0455C73.1225 47.0682 74.5771 45.4773 76.418 44.2728C78.2589 43.0682 80.3498 42.1591 82.6907 41.5455C85.0544 40.9318 87.5316 40.5 90.1225 40.25C93.168 39.9318 95.6225 39.6364 97.4862 39.3637C99.3498 39.0682 100.702 38.6364 101.543 38.0682C102.384 37.5 102.804 36.6591 102.804 35.5455V35.3409C102.804 33.1818 102.123 31.5114 100.759 30.3296C99.418 29.1477 97.5089 28.5568 95.0316 28.5568C92.418 28.5568 90.3384 29.1364 88.793 30.2955C87.2475 31.4318 86.2248 32.8637 85.7248 34.5909L72.293 33.5C72.9748 30.3182 74.3157 27.5682 76.3157 25.25C78.3157 22.9091 80.8953 21.1137 84.0543 19.8637C87.2362 18.5909 90.918 17.9546 95.0998 17.9546C98.0089 17.9546 100.793 18.2955 103.452 18.9773C106.134 19.6591 108.509 20.7159 110.577 22.1477C112.668 23.5796 114.316 25.4205 115.52 27.6705C116.725 29.8978 117.327 32.5682 117.327 35.6818V71H103.554V63.7387H103.145C102.304 65.375 101.179 66.8182 99.7703 68.0682C98.3612 69.2955 96.668 70.2614 94.6907 70.9659C92.7134 71.6478 90.4293 71.9887 87.8384 71.9887ZM91.9975 61.9659C94.1339 61.9659 96.0203 61.5455 97.6566 60.7046C99.293 59.8409 100.577 58.6818 101.509 57.2273C102.441 55.7728 102.907 54.125 102.907 52.2841V46.7273C102.452 47.0228 101.827 47.2955 101.032 47.5455C100.259 47.7728 99.3839 47.9887 98.4066 48.1932C97.4293 48.375 96.4521 48.5455 95.4748 48.7046C94.4975 48.8409 93.6112 48.9659 92.8157 49.0796C91.1112 49.3296 89.6225 49.7273 88.3498 50.2728C87.0771 50.8182 86.0884 51.5568 85.3839 52.4887C84.6793 53.3978 84.3271 54.5341 84.3271 55.8978C84.3271 57.875 85.043 59.3864 86.4748 60.4318C87.9293 61.4546 89.7703 61.9659 91.9975 61.9659Z'
          fill='#0A0A0A'
        />
        <path
          d='M126.947 71V1.18184H141.47V27.4318H141.913C142.549 26.0228 143.47 24.5909 144.674 23.1364C145.901 21.6591 147.492 20.4318 149.447 19.4546C151.424 18.4546 153.879 17.9546 156.81 17.9546C160.629 17.9546 164.151 18.9546 167.379 20.9546C170.606 22.9318 173.185 25.9205 175.117 29.9205C177.049 33.8978 178.015 38.8864 178.015 44.8864C178.015 50.7273 177.072 55.6591 175.185 59.6818C173.322 63.6818 170.776 66.7159 167.549 68.7841C164.345 70.8296 160.754 71.8523 156.776 71.8523C153.958 71.8523 151.56 71.3864 149.583 70.4546C147.629 69.5228 146.026 68.3523 144.776 66.9432C143.526 65.5114 142.572 64.0682 141.913 62.6137H141.265V71H126.947ZM141.163 44.8182C141.163 47.9318 141.595 50.6478 142.458 52.9659C143.322 55.2841 144.572 57.0909 146.208 58.3864C147.845 59.6591 149.833 60.2955 152.174 60.2955C154.538 60.2955 156.538 59.6478 158.174 58.3523C159.81 57.0341 161.049 55.2159 161.89 52.8978C162.754 50.5568 163.185 47.8637 163.185 44.8182C163.185 41.7955 162.765 39.1364 161.924 36.8409C161.083 34.5455 159.845 32.75 158.208 31.4546C156.572 30.1591 154.56 29.5114 152.174 29.5114C149.81 29.5114 147.81 30.1364 146.174 31.3864C144.56 32.6364 143.322 34.4091 142.458 36.7046C141.595 39 141.163 41.7046 141.163 44.8182Z'
          fill='#0A0A0A'
        />
        <path
          d='M209.649 72.0228C204.263 72.0228 199.626 70.9318 195.74 68.75C191.876 66.5455 188.899 63.4318 186.808 59.4091C184.717 55.3637 183.672 50.5796 183.672 45.0568C183.672 39.6705 184.717 34.9432 186.808 30.875C188.899 26.8068 191.842 23.6364 195.638 21.3637C199.456 19.0909 203.933 17.9546 209.069 17.9546C212.524 17.9546 215.74 18.5114 218.717 19.625C221.717 20.7159 224.331 22.3637 226.558 24.5682C228.808 26.7728 230.558 29.5455 231.808 32.8864C233.058 36.2046 233.683 40.0909 233.683 44.5455V48.5341H189.467V39.5341H220.013C220.013 37.4432 219.558 35.5909 218.649 33.9773C217.74 32.3637 216.479 31.1023 214.865 30.1932C213.274 29.2614 211.422 28.7955 209.308 28.7955C207.104 28.7955 205.149 29.3068 203.444 30.3296C201.763 31.3296 200.444 32.6818 199.49 34.3864C198.535 36.0682 198.047 37.9432 198.024 40.0114V48.5682C198.024 51.1591 198.501 53.3978 199.456 55.2841C200.433 57.1705 201.808 58.625 203.581 59.6478C205.354 60.6705 207.456 61.1818 209.888 61.1818C211.501 61.1818 212.979 60.9546 214.319 60.5C215.66 60.0455 216.808 59.3637 217.763 58.4546C218.717 57.5455 219.444 56.4318 219.944 55.1137L233.376 56C232.694 59.2273 231.297 62.0455 229.183 64.4546C227.092 66.8409 224.388 68.7046 221.069 70.0455C217.774 71.3637 213.967 72.0228 209.649 72.0228Z'
          fill='#0A0A0A'
        />
        <path
          d='M269.093 18.6364V29.5455H237.559V18.6364H269.093ZM244.718 6.09093H259.24V54.9091C259.24 56.25 259.445 57.2955 259.854 58.0455C260.263 58.7728 260.831 59.2841 261.559 59.5796C262.309 59.875 263.172 60.0228 264.149 60.0228C264.831 60.0228 265.513 59.9659 266.195 59.8523C266.877 59.7159 267.399 59.6137 267.763 59.5455L270.047 70.3523C269.32 70.5796 268.297 70.8409 266.979 71.1364C265.661 71.4546 264.059 71.6478 262.172 71.7159C258.672 71.8523 255.604 71.3864 252.968 70.3182C250.354 69.25 248.32 67.5909 246.865 65.3409C245.411 63.0909 244.695 60.25 244.718 56.8182V6.09093Z'
          fill='#0A0A0A'
        />
        <path
          d='M292.281 40.7273V71H277.758V1.18184H291.871V27.875H292.485C293.667 24.7841 295.576 22.3637 298.212 20.6137C300.849 18.8409 304.156 17.9546 308.133 17.9546C311.769 17.9546 314.94 18.75 317.644 20.3409C320.371 21.9091 322.485 24.1705 323.985 27.125C325.508 30.0568 326.258 33.5682 326.235 37.6591V71H311.712V40.25C311.735 37.0228 310.917 34.5114 309.258 32.7159C307.622 30.9205 305.326 30.0228 302.371 30.0228C300.394 30.0228 298.644 30.4432 297.121 31.2841C295.621 32.125 294.44 33.3523 293.576 34.9659C292.735 36.5568 292.303 38.4773 292.281 40.7273Z'
          fill='#0A0A0A'
        />
        <path
          d='M344.233 71.8864C341.983 71.8864 340.051 71.0909 338.437 69.5C336.846 67.8864 336.051 65.9546 336.051 63.7046C336.051 61.4773 336.846 59.5682 338.437 57.9773C340.051 56.3864 341.983 55.5909 344.233 55.5909C346.415 55.5909 348.324 56.3864 349.96 57.9773C351.596 59.5682 352.415 61.4773 352.415 63.7046C352.415 65.2046 352.028 66.5796 351.255 67.8296C350.505 69.0568 349.517 70.0455 348.29 70.7955C347.062 71.5228 345.71 71.8864 344.233 71.8864Z'
          fill='#0A0A0A'
        />
        <path
          d='M374.725 71H358.906L383.009 1.18184H402.031L426.1 71H410.281L392.793 17.1364H392.247L374.725 71ZM373.736 43.5568H411.1V55.0796H373.736V43.5568Z'
          fill='#0A0A0A'
        />
        <path d='M447.344 1.18184V71H432.583V1.18184H447.344Z' fill='#0A0A0A' />
      </svg>
    </div>
  );
}

export default LeftSideIllustration;
