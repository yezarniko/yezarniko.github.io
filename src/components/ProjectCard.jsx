/* React */
import { useState } from "react";

/**
 * * Project Card
 *
 * @param {string} props.name
 * @param {string} props.previewLinik
 * @param {string} props.githubLink
 * @param {string} props.thumbnailImage
 * @returns {ReactNode} representation of Project Card
 */
function ProjectCard({ name, previewLink, githubLink, thumbnailImageLink }) {
  const [isThumbnailImageLinkBroken, setThumbnailImageLinkBroken] =
    useState(false);

  return (
    <div className="projects__box__project">
      {thumbnailImageLink && !isThumbnailImageLinkBroken ? (
        <div className="projects__box__project__thumbnail projects__box__project__thumbnail--image">
          <img src={thumbnailImageLink} onError={()=>setThumbnailImageLinkBroken(v=>!v)} />
        </div>
      ) : (
        <div className="projects__box__project__thumbnail"></div>
      )}
      <div className="projects__box__project__info_card">
        <div className="projects__box__project__info_card__title">{name}</div>
        <div className="projects__box__project__info_card__btn">
          {previewLink && (
            <a
              className="projects__box__project__info_card__btn__view"
              href={previewLink}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="eye" filter="url(#eye0_d)">
                  <path
                    id="XMLID_10_"
                    d="M18 8.08984C11.934 8.08984 6.798 12.0853 5 17.6128C6.798 23.1404 11.934 27.1358 18 27.1358C24.066 27.1358 29.202 23.1404 31 17.6128C29.202 12.0853 24.066 8.08984 18 8.08984Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="XMLID_12_"
                    d="M18 22.9034C20.7614 22.9034 23 20.5347 23 17.6128C23 14.6909 20.7614 12.3223 18 12.3223C15.2386 12.3223 13 14.6909 13 17.6128C13 20.5347 15.2386 22.9034 18 22.9034Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="eye0_d"
                    x="-2"
                    y="0.683105"
                    width="40"
                    height="41.8595"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
              view
            </a>
          )}
          {githubLink && (
            <a
              className="projects__box__project__info_card__btn__source"
              href={githubLink}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M12 0.914551C5.374 0.914551 0 6.59978 0 13.6119C0 19.222 3.438 23.9814 8.207 25.6606C8.806 25.778 9 25.3844 9 25.05V22.6862C5.662 23.4544 4.967 21.1879 4.967 21.1879C4.421 19.7203 3.634 19.3299 3.634 19.3299C2.545 18.5416 3.717 18.5585 3.717 18.5585C4.922 18.6474 5.556 19.8674 5.556 19.8674C6.626 21.808 8.363 21.2472 9.048 20.9224C9.155 20.1023 9.466 19.5415 9.81 19.2252C7.145 18.9024 4.343 17.8136 4.343 12.9495C4.343 11.5623 4.812 10.4301 5.579 9.54132C5.455 9.22072 5.044 7.92876 5.696 6.18077C5.696 6.18077 6.704 5.84005 8.997 7.48224C9.954 7.20078 10.98 7.06006 12 7.05477C13.02 7.06006 14.047 7.20078 15.006 7.48224C17.297 5.84005 18.303 6.18077 18.303 6.18077C18.956 7.92982 18.545 9.22178 18.421 9.54132C19.191 10.4301 19.656 11.5634 19.656 12.9495C19.656 17.8263 16.849 18.9003 14.177 19.2146C14.607 19.6082 15 20.3806 15 21.5657V25.05C15 25.3876 15.192 25.7844 15.801 25.6595C20.566 23.9782 24 19.2199 24 13.6119C24 6.59978 18.627 0.914551 12 0.914551Z"
                  fill="black"
                />
              </svg>
              source
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
