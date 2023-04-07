import React from "react";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer>
      <div className="footerBox">
        <div className="footerBox__developer">
          <p>
            designed and developed
            <br />
            by me and powered by
          </p>
          <div className="footerBox__logo-box">
            <svg
              width="40"
              height="40"
              viewBox="0 0 65 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="javascript-logo">
                <path id="Vector" d="M0 0H65V68H0V0Z" fill="#F7DF1E" />
                <path
                  id="Vector_2"
                  d="M17.0904 56.8256L22.0647 53.6764C23.0243 55.4564 23.8973 56.9624 25.9912 56.9624C27.9984 56.9624 29.2639 56.141 29.2639 52.9461V31.2188H35.3722V53.0365C35.3722 59.655 31.6637 62.6676 26.2531 62.6676C21.3666 62.6676 18.5301 60.0201 17.0903 56.8251"
                  fill="black"
                />
                <path
                  id="Vector_3"
                  d="M38.6909 56.1404L43.6646 53.1278C44.9738 55.3647 46.6755 57.0078 49.6859 57.0078C52.2169 57.0078 53.8309 55.684 53.8309 53.8581C53.8309 51.6671 52.173 50.891 49.3804 49.6134L47.8538 48.9282C43.4466 46.9658 40.5232 44.5009 40.5232 39.2972C40.5232 34.5044 44.0137 30.8525 49.4679 30.8525C53.3512 30.8525 56.1436 32.2677 58.1505 35.9651L53.3945 39.1601C52.3473 37.1975 51.2132 36.4217 49.468 36.4217C47.6791 36.4217 46.5446 37.6084 46.5446 39.1601C46.5446 41.0773 47.6791 41.8535 50.2967 43.0403L51.8237 43.725C57.016 46.0531 59.9394 48.4264 59.9394 53.7668C59.9394 59.5185 55.6199 62.6678 49.817 62.6678C44.1448 62.6678 40.4797 59.8379 38.691 56.1404"
                  fill="black"
                />
              </g>
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 78 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="scss-logo"
                d="M67.1641 39.0905C64.4429 39.1071 62.0779 39.869 60.0976 40.9952C59.371 39.3224 58.6444 37.8318 58.5162 36.7388C58.3737 35.4635 58.2027 34.6851 58.3737 33.1614C58.5447 31.6377 59.314 29.4681 59.2998 29.3024C59.2855 29.1368 59.1288 28.3584 57.5616 28.3418C55.9945 28.3253 54.641 28.6896 54.4843 29.1699C54.3276 29.6502 54.0284 30.7433 53.8289 31.8695C53.5582 33.5257 50.6946 39.4383 49.0562 42.5354C48.529 41.3264 48.0731 40.2664 47.9734 39.4218C47.8309 38.1465 47.66 37.3681 47.8309 35.8444C48.0019 34.3207 48.7712 32.1511 48.757 31.9855C48.7427 31.8199 48.586 31.0414 47.0188 31.0249C45.4517 31.0083 44.0982 31.3727 43.9415 31.853C43.7848 32.3333 43.6138 33.4595 43.2861 34.5526C42.9584 35.6457 39.1545 45.5166 38.1572 48.0671C37.6443 49.3755 37.2027 50.4189 36.8892 51.1311C36.8892 51.1311 36.875 51.1808 36.8322 51.2636C36.5615 51.8764 36.4048 52.2076 36.4048 52.2076C36.4048 52.2076 36.4048 52.2076 36.4048 52.2242C36.1911 52.6713 35.9632 53.0854 35.8492 53.0854C35.7637 53.0854 35.607 51.8929 35.8777 50.2699C36.4476 46.8415 37.801 41.5086 37.7868 41.3264C37.7868 41.227 38.0432 40.2996 36.9035 39.8193C35.7922 39.339 35.3933 40.1339 35.2936 40.1339C35.1938 40.1339 35.1226 40.4155 35.1226 40.4155C35.1226 40.4155 36.3621 34.4201 32.7576 34.4201C30.5066 34.4201 27.4007 37.2853 25.862 39.869C24.8932 40.4817 22.8274 41.7901 20.6191 43.1979C19.7786 43.7444 18.9095 44.291 18.0974 44.8044C18.0404 44.7382 17.9835 44.6554 17.9265 44.5891C13.5669 39.1734 5.50308 35.3475 5.84501 28.0769C5.97323 25.4269 6.75681 18.4709 21.3315 10.0243C33.3275 3.15114 42.873 5.05576 44.5256 9.27905C46.8906 15.3076 39.4109 26.5035 27.0161 28.1265C22.286 28.7393 19.8071 26.6194 19.1802 25.8244C18.5248 24.9963 18.4251 24.9467 18.1829 25.1123C17.784 25.3607 18.0404 26.106 18.1829 26.5366C18.5533 27.6628 20.0778 29.6502 22.6565 30.6274C24.936 31.4886 30.4781 31.9689 37.1884 28.9546C44.6966 25.576 50.5663 16.1854 48.8425 8.31846C47.1186 0.335607 35.721 -2.29774 24.936 2.15742C18.5248 4.80733 11.5723 8.98094 6.5716 14.4133C0.630603 20.8724 -0.309699 26.4869 0.0749705 28.8387C1.45693 37.1859 11.3586 42.6182 15.3193 46.6428C15.1198 46.7753 14.9346 46.8912 14.7779 46.9906C12.7975 48.1334 5.24663 52.721 3.36603 57.5737C1.22898 63.0722 3.70796 67.014 5.34636 67.544C10.4325 69.1836 15.6612 66.2356 18.4679 61.3664C21.2745 56.4971 20.9326 50.1705 19.6361 47.2721C19.6219 47.239 19.6076 47.2059 19.5791 47.1728C20.092 46.825 20.6191 46.4606 21.132 46.1128C22.1436 45.4172 23.1409 44.7713 23.9957 44.2413C23.5113 45.7816 23.1551 47.6199 22.9842 50.2699C22.7704 53.3835 23.8675 57.4246 25.3064 59.0146C25.9475 59.7102 26.7026 59.7267 27.187 59.7267C28.8682 59.7267 29.6233 58.1036 30.4638 56.1825C31.4896 53.8307 32.4157 51.0979 32.4157 51.0979C32.4157 51.0979 31.2617 58.4846 34.396 58.4846C35.5358 58.4846 36.6898 56.7621 37.2027 55.8843C37.2027 55.9009 37.2027 55.9009 37.2027 55.9009C37.2027 55.9009 37.2312 55.8512 37.2881 55.7353C37.4021 55.52 37.4734 55.3875 37.4734 55.3875C37.4734 55.3875 37.4734 55.3709 37.4734 55.3544C37.9293 54.4269 38.955 52.3235 40.4795 48.829C42.4456 44.3241 44.3404 38.6931 44.3404 38.6931C44.3404 38.6931 44.5114 40.0677 45.0955 42.3532C45.4374 43.6948 46.1498 45.1688 46.7197 46.5931C46.2638 47.3384 45.9788 47.7524 45.9788 47.7524C45.9788 47.7524 45.9788 47.7524 45.9931 47.769C45.6226 48.3321 45.2237 48.9449 44.7821 49.5411C43.2291 51.6942 41.377 54.1619 41.1206 54.8741C40.8214 55.7187 40.8926 56.3315 41.4625 56.8284C41.8757 57.1927 42.6165 57.2424 43.3716 57.1927C44.7678 57.0768 45.7509 56.6793 46.2353 56.4309C46.9904 56.1162 47.8737 55.6359 48.7 54.9238C50.2244 53.6154 51.1505 51.7439 51.065 49.2761C51.0223 47.9181 50.6376 46.56 50.1674 45.2847C50.3099 45.0528 50.4381 44.821 50.5806 44.5891C52.9883 40.4983 54.8547 36.01 54.8547 36.01C54.8547 36.01 55.0257 37.3847 55.6098 39.6702C55.8947 40.8295 56.4789 42.0883 56.9917 43.3138C54.7265 45.4503 53.3303 47.9346 52.8316 49.5577C51.9341 52.572 52.6322 53.93 53.9571 54.2447C54.5555 54.3938 55.4103 54.0625 56.0372 53.7479C56.835 53.4497 57.7753 52.9363 58.6729 52.1745C60.1973 50.8661 61.6648 49.0443 61.5793 46.5765C61.5365 45.4503 61.2801 44.3407 60.9239 43.2642C62.8473 42.3367 65.3262 41.8233 68.4891 42.2539C75.2707 43.1813 76.6099 48.1002 76.3534 50.1705C76.097 52.2407 74.6723 53.3669 74.2021 53.7147C73.732 54.0625 73.5753 54.1785 73.618 54.4269C73.675 54.7913 73.9029 54.7747 74.3019 54.7085C74.8575 54.5925 77.8636 53.0357 77.9918 49.2265C78.2055 44.3572 74.2164 39.0409 67.1641 39.0905ZM14.8491 59.5942C12.5981 62.4429 9.46375 63.5194 8.11028 62.6085C6.65709 61.6313 7.22697 57.4246 9.99088 54.4103C11.672 52.572 13.8376 50.8661 15.2765 49.8227C15.6042 49.5908 16.0886 49.2596 16.6727 48.8455C16.7725 48.7793 16.8294 48.7462 16.8294 48.7462C16.9434 48.6633 17.0574 48.5805 17.1714 48.4977C18.1829 52.8038 17.2141 56.5965 14.8491 59.5942ZM31.2332 46.6428C30.4496 48.8621 28.8112 54.5428 27.8139 54.2282C26.9591 53.9632 26.4319 49.6571 27.6429 45.4006C28.2555 43.2642 29.552 40.7136 30.3071 39.7199C31.5324 38.13 32.8858 37.6 33.2135 38.2459C33.6267 39.0905 31.7176 45.2516 31.2332 46.6428ZM44.7536 54.1619C44.4259 54.3607 44.1125 54.4931 43.97 54.3938C43.8703 54.3275 44.1125 54.0625 44.1125 54.0625C44.1125 54.0625 45.8079 51.9426 46.4775 50.982C46.8621 50.4189 47.318 49.7564 47.8024 49.0111C47.8024 49.0774 47.8024 49.1602 47.8024 49.2265C47.8024 51.7604 45.6939 53.4663 44.7536 54.1619ZM55.1824 51.3961C54.9402 51.1973 54.9829 50.5348 55.795 48.4646C56.1084 47.6531 56.8493 46.295 58.1173 44.9866C58.2597 45.5166 58.3595 46.03 58.3452 46.5103C58.331 49.7067 56.3649 50.8992 55.1824 51.3961Z"
                fill="#CD6799"
              />
            </svg>
            <svg
              width="40"
              height="40"
              viewBox="0 0 65 78"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="figma-logo">
                <path
                  id="path0_fill"
                  d="M16.2452 77.5969C25.2124 77.5969 32.4902 71.803 32.4902 64.6642V51.7314H16.2452C7.27799 51.7314 0.000244141 57.5253 0.000244141 64.6642C0.000244141 71.803 7.27799 77.5969 16.2452 77.5969Z"
                  fill="#0ACF83"
                />
                <path
                  id="path1_fill"
                  d="M0.000244141 38.7979C0.000244141 31.6591 7.27799 25.8652 16.2452 25.8652H32.4902V51.7307H16.2452C7.27799 51.7307 0.000244141 45.9368 0.000244141 38.7979Z"
                  fill="#A259FF"
                />
                <path
                  id="path1_fill_1_"
                  d="M0 12.9327C0 5.79385 7.27775 0 16.245 0H32.4899V25.8654H16.245C7.27775 25.8654 0 20.0716 0 12.9327Z"
                  fill="#F24E1E"
                />
                <path
                  id="path2_fill"
                  d="M32.4897 0H48.7347C57.7019 0 64.9797 5.79385 64.9797 12.9327C64.9797 20.0716 57.7019 25.8654 48.7347 25.8654H32.4897V0Z"
                  fill="#FF7262"
                />
                <path
                  id="path3_fill"
                  d="M64.9797 38.7979C64.9797 45.9368 57.7019 51.7307 48.7347 51.7307C39.7675 51.7307 32.4897 45.9368 32.4897 38.7979C32.4897 31.6591 39.7675 25.8652 48.7347 25.8652C57.7019 25.8652 64.9797 31.6591 64.9797 38.7979Z"
                  fill="#1ABCFE"
                />
              </g>
            </svg>
          </div>
        </div>
        <div className="footerBox__quicklinks">
          <h5>quick links</h5>
          <ul>
            <li>
              <HashLink to="/#landing">home</HashLink>
            </li>
            <li>
              <HashLink to="/#skills">skills</HashLink>
            </li>
            <li>
              <HashLink to="/#cs-skills">cs skills</HashLink>
            </li>
            <li>
              <HashLink to="/">my projects</HashLink>
            </li>
          </ul>
        </div>
      </div>
      <h5 className="copyright">© 2021 yezarniko. All rights reserved.</h5>
    </footer>
  );
}

export default Footer;
