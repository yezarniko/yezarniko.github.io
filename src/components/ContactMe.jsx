/**
 * *Contact Me
 *
 * @returns {ReactNode} Contact Me UI
 */
function ContactMe() {
  return (
    <div className="contactMe" id="contactMe">
      <h3>Contact Me</h3>
      <div className="contactMe__card">
        <div className="contactMe__card__message">
          <svg
            id="heart-icon"
            width="74"
            height="71"
            viewBox="0 0 74 71"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="iconmonstr-favorite-8 1">
              <path
                id="Vector"
                d="M55.0899 10.3331L67.8333 20.5216V35.689L37 60.3408L6.16667 35.686V20.5216L18.9101 10.3331L37 21.9032L55.0899 10.3331ZM55.5 2.95801L37 14.7913L18.5 2.95801L0 17.7497V38.458L37 68.0413L74 38.458V17.7497L55.5 2.95801Z"
                fill="#A259FF"
              />
            </g>
          </svg>
          <p>You can freely contact me for any reason</p>
        </div>
        <div className="contactMe__card__info">
          <div className="contactMe__card__info__item">
            <svg
              width="30"
              height="40"
              viewBox="0 0 41 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M35.875 60H5.125C2.296 60 0 57.76 0 55V5C0 2.24 2.296 0 5.125 0H35.875C38.704 0 41 2.24 41 5V55C41 57.76 38.704 60 35.875 60ZM38.4375 47.2925H2.5625V55C2.5625 56.38 3.71306 57.5 5.125 57.5H35.875C37.2895 57.5 38.4375 56.38 38.4375 55V47.2925ZM20.5 54.7925C19.0829 54.7925 17.9375 53.6725 17.9375 52.2925C17.9375 50.9125 19.0829 49.7925 20.5 49.7925C21.9145 49.7925 23.0599 50.9125 23.0599 52.2925C23.0599 53.6725 21.9145 54.7925 20.5 54.7925ZM38.4375 12.2925H2.5625V44.7925H38.4375V12.2925ZM35.875 2.5H5.125C3.71306 2.5 2.5625 3.6225 2.5625 5V9.7925H38.4375V5C38.4375 3.6225 37.2895 2.5 35.875 2.5ZM24.3438 7.2925H16.6562C15.949 7.2925 15.375 6.7325 15.375 6.0425C15.375 5.3525 15.949 4.7925 16.6562 4.7925H24.3438C25.051 4.7925 25.625 5.3525 25.625 6.0425C25.625 6.7325 25.051 7.2925 24.3438 7.2925Z"
                fill="black"
              />
            </svg>
            <div>
              <a id="phone-number" href="tel:09797223755">
                09797223755
              </a>
            </div>
          </div>
          <div className="contactMe__card__info__item">
            <svg
              width="32"
              height="40"
              viewBox="0 0 47 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M47 0L37.3864 32.3125L24.361 21.6787L36.863 9.58604L20.1053 20.2022L8.54545 17.625L47 0ZM23.5 24.4811V35.25L28.185 28.7425L23.5 24.4811ZM4.91791 37.8468L1.84368 36.8539L14.0231 26.6412L17.0909 27.4167L4.91791 37.8468ZM11.8867 46.2421L9.06032 45.1357L18.5436 36.3173L21.3636 37.2083L11.8867 46.2421ZM3.16395 47L0 46.0071L17.0909 30.5559L20.1609 31.3333L3.16395 47Z"
                fill="black"
              />
            </svg>
            <div>
              <a href="mailto:yezarniko@protonmail.com">
                yezarniko@protonmail.com
              </a>
            </div>
          </div>
          <div className="contactMe__card__info__item">
            <a
              href="https://www.facebook.com/yznk2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 47 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M44.4052 0H2.59479C1.16129 0 0 1.08717 0 2.42917V41.5727C0 42.9128 1.16129 44 2.59479 44H25.1058V26.961H18.9802V20.3207H25.1058V15.4238C25.1058 9.7405 28.813 6.64583 34.2297 6.64583C36.8245 6.64583 39.0531 6.82733 39.7033 6.908V12.848L35.9472 12.8498C33.0018 12.8498 32.432 14.1607 32.432 16.082V20.3225H39.4565L38.542 26.9628H32.432V44H44.4091C45.8387 44 47 42.9128 47 41.5708V2.42917C47 1.08717 45.8387 0 44.4052 0Z"
                  fill="black"
                />
              </svg>
            </a>
            <a
              href="https://github.com/yezarniko"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 47 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M23.5 0C10.5241 0 0 11.0177 0 24.6067C0 35.4788 6.73275 44.7022 16.072 47.9565C17.2451 48.1841 17.625 47.4213 17.625 46.7733V42.1923C11.0881 43.681 9.72704 39.2887 9.72704 39.2887C8.65779 36.4446 7.11658 35.688 7.11658 35.688C4.98396 34.1603 7.27913 34.1931 7.27913 34.1931C9.63892 34.3653 10.8805 36.7296 10.8805 36.7296C12.9759 40.4904 16.3775 39.4036 17.719 38.7741C17.9285 37.1849 18.5376 36.0981 19.2113 35.485C13.9923 34.8595 8.50504 32.7495 8.50504 23.3231C8.50504 20.6348 9.4235 18.4407 10.9255 16.7182C10.6827 16.0969 9.87783 13.5932 11.1547 10.2056C11.1547 10.2056 13.1287 9.54536 17.6191 12.7278C19.4932 12.1824 21.5025 11.9097 23.5 11.8994C25.4975 11.9097 27.5087 12.1824 29.3867 12.7278C33.8733 9.54536 35.8434 10.2056 35.8434 10.2056C37.1222 13.5952 36.3173 16.099 36.0745 16.7182C37.5824 18.4407 38.493 20.6368 38.493 23.3231C38.493 32.7741 32.996 34.8554 27.7633 35.4644C28.6054 36.2273 29.375 37.7242 29.375 40.0208V46.7733C29.375 47.4274 29.751 48.1964 30.9436 47.9544C40.2751 44.6961 47 35.4747 47 24.6067C47 11.0177 36.4779 0 23.5 0Z"
                  fill="black"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
