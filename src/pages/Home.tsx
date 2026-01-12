import { useState } from "react";
import { Link } from "react-router-dom";
import Typewriter from "../components/Typewriter.tsx";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeFilter, setActiveFilter] = useState("*");
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handlePrevTestimonial = () => {
    setTestimonialIndex((index) => (index - 1 + 2) % 2);
  };

  const handleNextTestimonial = () => {
    setTestimonialIndex((index) => (index + 1) % 2);
  };

  return (
    <>
      <section
        id="home"
        className="relative z-40 overflow-hidden pt-28 pb-24 sm:pt-36 lg:pt-[170px] lg:pb-[120px]"
      >
        <div className="px-4 xl:container">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-3 lg:w-1/2">
              <div className="mx-auto mb-12 max-w-[530px] text-center lg:ml-0 lg:mb-0 lg:text-left">
                <span
                  className="wow fadeInUp mb-8 inline-block rounded-full bg-primary bg-opacity-5 py-[10px] px-5 font-heading text-base text-primary dark:bg-white dark:bg-opacity-10 dark:text-white"
                  data-wow-delay=".2s"
                >
                  <span className="inline-block w-2 h-2 mr-2 rounded-full bg-primary"></span>
                  Aldo Website LLC
                </span>
                <h1
                  className="wow fadeInUp mb-5 font-heading text-2xl font-semibold dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]"
                  data-wow-delay=".3s"
                >
                  Websites built to grow your
                  <br />
                  &nbsp;
                  <Typewriter
                    className="underline"
                    words={[
                      "Local Business",
                      "Service Brand",
                      "Online Store",
                      "Agency",
                    ]}
                  />
                </h1>
                <p
                  className="mb-12 text-base wow fadeInUp text-dark-text"
                  data-wow-delay=".4s"
                >
                  Aldo Website LLC designs and develops fast, SEO-ready websites
                  with clear messaging, conversion-focused layouts, and clean
                  code you can scale.
                </p>
                <div
                  className="flex flex-wrap items-center justify-center wow fadeInUp lg:justify-start"
                  data-wow-delay=".5s"
                >
                  <a
                    href="#support"
                    className="inline-flex items-center rounded bg-primary py-[10px] px-6 font-heading text-base text-white hover:bg-opacity-90 md:py-[14px] md:px-8"
                  >
                    Start a Project
                    <span className="pl-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center rounded py-[14px] px-8 font-heading text-base text-dark hover:text-primary dark:text-white dark:hover:text-primary"
                  >
                    <span className="pr-3">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z" />
                      </svg>
                    </span>
                    See Our Process
                  </a>
                </div>
                {/* <div className="mt-10 flex items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handlePrevTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e9e9] text-dark-text transition hover:border-primary hover:text-primary dark:border-[#2E333D] dark:text-white"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-current"
                    >
                      <path d="M6.52329 10.8331L10.9933 15.3031L9.81496 16.4814L3.3333 9.99978L9.81496 3.51811L10.9933 4.69645L6.52329 9.16645L16.6666 9.16645L16.6666 10.8331L6.52329 10.8331Z" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={handleNextTestimonial}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e9e9e9] text-dark-text transition hover:border-primary hover:text-primary dark:border-[#2E333D] dark:text-white"
                    aria-label="Next testimonial"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      className="fill-current"
                    >
                      <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInRight relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0"
                data-wow-delay=".3s"
              >
                <div className="absolute top-0 right-0 lg:w-11/12">
                  <img src="/images/hero/image-2.jpg" alt="hero-image" />
                </div>
                <div className="absolute bottom-0 left-0 z-10">
                  <img src="/images/hero/image-1.jpg" alt="hero-image" />
                  <div className="absolute -top-6 -right-6 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
                </div>
                <div className="absolute bottom-0 left-0">
                  <svg
                    width="72"
                    height="38"
                    viewBox="0 0 72 38"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 11.9726C59.6808 11.6895 57.4524 12.6321 55.1508 14.6049C51.3631 17.8514 44.7908 19.4664 38.8668 14.6196C36.329 12.5432 34.117 12.2149 32.2894 12.5195C30.3972 12.8349 28.8057 13.8437 27.5547 14.6776C25.5734 15.9985 23.3915 17.3866 20.8786 17.7123C18.2847 18.0485 15.515 17.2431 12.3598 14.6138C9.71804 12.4123 7.45748 11.9889 5.72104 12.256C3.94436 12.5294 2.56003 13.5501 1.76341 14.4915C1.40666 14.9131 0.775686 14.9657 0.354079 14.609C-0.0675277 14.2522 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6412 5.41692 10.2793C7.80979 9.91114 10.6326 10.571 13.6402 13.0774C16.485 15.4481 18.7154 15.976 20.6215 15.7289C22.6086 15.4713 24.4266 14.3594 26.4453 13.0136L27 13.8456L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5467C34.383 10.143 37.1711 10.648 40.1333 13.0716C45.1548 17.1801 50.6369 15.8397 53.8492 13.0863C56.3795 10.9176 59.1512 9.61012 62.2455 9.98733C65.3089 10.3608 68.4333 12.357 71.7557 16.1906C72.1174 16.608 72.0723 17.2395 71.655 17.6012C71.2376 17.9629 70.606 17.9178 70.2443 17.5005C67.0668 13.834 64.3571 12.2595 62.0035 11.9726Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 21.8954C59.6808 21.6123 57.4524 22.5548 55.1508 24.5276C51.3631 27.7742 44.7908 29.3892 38.8668 24.5423C36.329 22.4659 34.117 22.1377 32.2894 22.4423C30.3972 22.7576 28.8057 23.7664 27.5547 24.6004C25.5734 25.9213 23.3915 27.3093 20.8786 27.6351C18.2847 27.9713 15.515 27.1659 12.3598 24.5366C9.71804 22.3351 7.45748 21.9117 5.72104 22.1788C3.94436 22.4521 2.56003 23.4728 1.76341 24.4143C1.40666 24.8359 0.775686 24.8885 0.354079 24.5318C-0.0675277 24.175 -0.120109 23.544 0.236635 23.1224C1.27334 21.8972 3.0643 20.564 5.41692 20.2021C7.80979 19.8339 10.6326 20.4938 13.6402 23.0002C16.485 25.3708 18.7154 25.8988 20.6215 25.6517C22.6086 25.3941 24.4266 24.2821 26.4453 22.9363L27 23.7684L26.4453 22.9363C27.6943 22.1036 29.6028 20.8624 31.9606 20.4695C34.383 20.0658 37.1711 20.5708 40.1333 22.9944C45.1548 27.1029 50.6369 25.7624 53.8492 23.0091C56.3795 20.8403 59.1512 19.5329 62.2455 19.9101C65.3089 20.2835 68.4333 22.2798 71.7557 26.1134C72.1174 26.5307 72.0723 27.1623 71.655 27.524C71.2376 27.8857 70.606 27.8406 70.2443 27.4232C67.0668 23.7568 64.3571 22.1823 62.0035 21.8954Z"
                      fill="#4A6CF7"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.697 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0605 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5579C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5745C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3923C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0257 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0362C72.1174 36.4535 72.0723 37.0851 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                      fill="#4A6CF7"
                    />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-1/2">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.9"
                      d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z"
                      fill="url(#paint0_angular_300_926)"
                    />
                    <defs>
                      <radialGradient
                        id="paint0_angular_300_926"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(60 60) rotate(90) scale(60)"
                      >
                        <stop stopColor="#4A6CF7" />
                        <stop offset="1" stopColor="#111722" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-full bg-center bg-cover -z-10 opacity-10 dark:opacity-40 bg-noise-pattern"></div>
        <div className="absolute top-0 right-0 -z-10">
          <svg
            width="1356"
            height="860"
            viewBox="0 0 1356 860"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5" filter="url(#filter0_f_201_2181)">
              <rect
                x="450.088"
                y="-126.709"
                width="351.515"
                height="944.108"
                transform="rotate(-34.6784 450.088 -126.709)"
                fill="url(#paint0_linear_201_2181)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_2181"
                x="0.0878906"
                y="-776.711"
                width="1726.24"
                height="1876.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_201_2181"
                />
              </filter>
              <linearGradient
                id="paint0_linear_201_2181"
                x1="417.412"
                y1="59.4717"
                x2="966.334"
                y2="603.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ABBCFF" />
                <stop offset="0.859375" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 -z-10">
          <svg
            width="1469"
            height="498"
            viewBox="0 0 1469 498"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_201_2182)">
              <rect
                y="450"
                width="1019"
                height="261"
                fill="url(#paint0_linear_201_2182)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_2182"
                x="-450"
                y="0"
                width="1919"
                height="1161"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_201_2182"
                />
              </filter>
              <linearGradient
                id="paint0_linear_201_2182"
                x1="-94.7239"
                y1="501.47"
                x2="-65.8058"
                y2="802.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ABBCFF" />
                <stop offset="0.859375" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="wow fadeInUp relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> SERVICES </span>
            <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Strategy, design, and development for modern businesses
            </h2>
            <p className="text-base text-dark-text">
              From positioning to launch, we handle the pieces that turn
              visitors into customers.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".2s"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path d="M3.66663 23.8333H14.6666V38.5H3.66663V23.8333ZM16.5 5.5H27.5V38.5H16.5V5.5Z" />
                    <path
                      opacity="0.5"
                      d="M29.3333 14.6667H40.3333V38.5H29.3333V14.6667Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl md:mb-5">
                    Strategy and Messaging
                  </h3>
                  <p className="text-base text-dark-text">
                    We shape your offer, site structure, and copy so people
                    understand you fast.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".25s"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path d="M22.9424 2.39982L39.0226 12.0468C39.1585 12.1282 39.271 12.2434 39.3492 12.3813C39.4273 12.5191 39.4684 12.6749 39.4684 12.8333C39.4684 12.9918 39.4273 13.1475 39.3492 13.2854C39.271 13.4232 39.1585 13.5384 39.0226 13.6198L22.0001 23.8333L4.97756 13.6198C4.84161 13.5384 4.72908 13.4232 4.65094 13.2854C4.57281 13.1475 4.53174 12.9918 4.53174 12.8333C4.53174 12.6749 4.57281 12.5191 4.65094 12.3813C4.72908 12.2434 4.84161 12.1282 4.97756 12.0468L21.0559 2.39982C21.341 2.22851 21.6674 2.138 22.0001 2.138C22.3327 2.138 22.6591 2.22851 22.9442 2.39982H22.9424Z" />
                    <path
                      opacity="0.5"
                      d="M36.8189 19.2501L39.0226 20.5719C39.1585 20.6533 39.271 20.7685 39.3492 20.9064C39.4273 21.0442 39.4684 21.1999 39.4684 21.3584C39.4684 21.5168 39.4273 21.6726 39.3492 21.8104C39.271 21.9483 39.1585 22.0635 39.0226 22.1449L22.0001 32.3584L4.97756 22.1449C4.84161 22.0635 4.72908 21.9483 4.65094 21.8104C4.57281 21.6726 4.53174 21.5168 4.53174 21.3584C4.53174 21.1999 4.57281 21.0442 4.65094 20.9064C4.72908 20.7685 4.84161 20.6533 4.97756 20.5719L7.18123 19.2501L22.0001 28.1417L36.8189 19.2501ZM36.8189 27.8667L39.0226 29.1886C39.1585 29.2699 39.271 29.3852 39.3492 29.523C39.4273 29.6609 39.4684 29.8166 39.4684 29.9751C39.4684 30.1335 39.4273 30.2893 39.3492 30.4271C39.271 30.5649 39.1585 30.6802 39.0226 30.7616L22.9442 40.4086C22.6591 40.5799 22.3327 40.6704 22.0001 40.6704C21.6674 40.6704 21.341 40.5799 21.0559 40.4086L4.97756 30.7616C4.84161 30.6802 4.72908 30.5649 4.65094 30.4271C4.57281 30.2893 4.53174 30.1335 4.53174 29.9751C4.53174 29.8166 4.57281 29.6609 4.65094 29.523C4.72908 29.3852 4.84161 29.2699 4.97756 29.1886L7.18123 27.8667L22.0001 36.7584L36.8189 27.8667Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl md:mb-5">
                    Custom Web Design
                  </h3>
                  <p className="text-base text-dark-text">
                    Unique layouts that match your brand and guide visitors to
                    action.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".3s"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path d="M36.6667 40.3334H7.33333C6.8471 40.3334 6.38079 40.1402 6.03697 39.7964C5.69315 39.4526 5.5 38.9863 5.5 38.5V14.6667H38.5V38.5C38.5 38.9863 38.3068 39.4526 37.963 39.7964C37.6192 40.1402 37.1529 40.3334 36.6667 40.3334ZM12.8333 20.1667V27.5H20.1667V20.1667H12.8333ZM12.8333 31.1667V34.8334H31.1667V31.1667H12.8333ZM23.8333 22V25.6667H31.1667V22H23.8333Z" />
                    <path
                      opacity="0.5"
                      d="M38.5 11H5.5V5.49996C5.5 5.01373 5.69315 4.54741 6.03697 4.2036C6.38079 3.85978 6.8471 3.66663 7.33333 3.66663H36.6667C37.1529 3.66663 37.6192 3.85978 37.963 4.2036C38.3068 4.54741 38.5 5.01373 38.5 5.49996V11Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl md:mb-5">
                    Development and Performance
                  </h3>
                  <p className="text-base text-dark-text">
                    Responsive builds with clean code, fast load times, and
                    reliable hosting.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".35s"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path d="M22 3.66663C32.1255 3.66663 40.3333 11.8745 40.3333 22C40.3333 32.1255 32.1255 40.3333 22 40.3333C11.8745 40.3333 3.66663 32.1255 3.66663 22C3.66663 11.8745 11.8745 3.66663 22 3.66663ZM22 7.33329C13.9003 7.33329 7.33329 13.9003 7.33329 22C7.33329 30.0996 13.9003 36.6666 22 36.6666C30.0996 36.6666 36.6666 30.0996 36.6666 22C36.6666 13.9003 30.0996 7.33329 22 7.33329ZM29.777 11.6288L32.3711 14.2211L25.5438 21.0521C25.6245 21.3546 25.6666 21.6718 25.6666 22C25.6666 24.0258 24.0258 25.6666 22 25.6666C19.9741 25.6666 18.3333 24.0258 18.3333 22C18.3333 19.9741 19.9741 18.3333 22 18.3333C22.3281 18.3333 22.6453 18.3755 22.9478 18.4561L29.7788 11.6288H29.777Z" />
                    <path
                      opacity="0.5"
                      d="M22 9.16663C23.8663 9.16663 25.6391 9.56446 27.2396 10.2813L24.3741 13.145C23.617 12.9433 22.8213 12.8333 22 12.8333C16.9381 12.8333 12.8333 16.9381 12.8333 22C12.8333 24.53 13.86 26.8216 15.5173 28.4826L12.925 31.075L12.639 30.7798C10.4866 28.4845 9.16663 25.3953 9.16663 22C9.16663 14.9123 14.9123 9.16663 22 9.16663ZM33.7186 16.7621C34.4336 18.3608 34.8333 20.1355 34.8333 22C34.8333 25.5438 33.396 28.7521 31.075 31.075L28.4826 28.4826C30.14 26.8216 31.1666 24.53 31.1666 22C31.1666 21.1786 31.0585 20.383 30.855 19.6258L33.7186 16.7621Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl md:mb-5">
                    SEO and Analytics
                  </h3>
                  <p className="text-base text-dark-text">
                    On-page SEO, tracking setup, and reporting to measure
                    results.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[380px] text-center md:mb-16"
                data-wow-delay=".4s"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path d="M25.6667 38.5H7.33333C6.8471 38.5 6.38079 38.3068 6.03697 37.963C5.69315 37.6192 5.5 37.1529 5.5 36.6667V18.3333H25.6667V38.5ZM38.5 14.6667H5.5V7.33333C5.5 6.8471 5.69315 6.38079 6.03697 6.03697C6.38079 5.69315 6.8471 5.5 7.33333 5.5H36.6667C37.1529 5.5 37.6192 5.69315 37.963 6.03697C38.3068 6.38079 38.5 6.8471 38.5 7.33333V14.6667Z" />
                    <path
                      opacity="0.5"
                      d="M29.3334 38.5V18.3334H38.5V36.6667C38.5 37.1529 38.3069 37.6193 37.9631 37.9631C37.6193 38.3069 37.1529 38.5 36.6667 38.5H29.3334Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl md:mb-5">
                    Ecommerce and Integrations
                  </h3>
                  <p className="text-base text-dark-text">
                    Shopify, Stripe, booking tools, and CRM integrations that
                    save time.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div
                className="wow fadeInUp group mx-auto max-w-[380px] text-center md:mb-16"
                data-wow-delay=".45s"
              >
                <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full bg-primary bg-opacity-5 text-primary transition group-hover:bg-primary group-hover:bg-opacity-100 group-hover:text-white dark:bg-white dark:bg-opacity-5 dark:text-white dark:group-hover:bg-primary dark:group-hover:bg-opacity-100 md:mb-9 md:h-[90px] md:w-[90px]">
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    className="fill-current"
                  >
                    <path
                      opacity="0.5"
                      d="M10.0154 8.12714C13.3421 5.24452 17.598 3.6605 21.9999 3.66664C32.1254 3.66664 40.3332 11.8745 40.3332 22C40.3332 25.916 39.1049 29.546 37.0149 32.5233L31.1665 22H36.6665C36.6668 19.1246 35.8218 16.3126 34.2368 13.9136C32.6517 11.5146 30.3964 9.63443 27.7514 8.50687C25.1063 7.37931 22.1882 7.0541 19.3598 7.57168C16.5314 8.08926 13.9175 9.42679 11.8432 11.418L10.0154 8.12714Z"
                    />
                    <path d="M33.9843 35.8729C30.6576 38.7555 26.4017 40.3395 21.9998 40.3333C11.8743 40.3333 3.6665 32.1255 3.6665 22C3.6665 18.084 4.89484 14.454 6.98484 11.4767L12.8332 22H7.33317C7.33293 24.8754 8.17788 27.6874 9.76295 30.0864C11.348 32.4854 13.6033 34.3656 16.2483 35.4931C18.8934 36.6207 21.8115 36.9459 24.6399 36.4283C27.4683 35.9107 30.0822 34.5732 32.1565 32.582L33.9843 35.8729Z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl md:mb-5">
                    Care Plans and Updates
                  </h3>
                  <p className="text-base text-dark-text">
                    Ongoing improvements, security patches, and content support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="relative pt-6 mx-auto mb-12 text-center wow fadeInUp lg:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> ABOUT ALDO </span>
            <h2 className="mx-auto mb-5 max-w-[570px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              A boutique web studio built for clarity and conversion
            </h2>
            <p className="mx-auto max-w-[570px] text-base text-dark-text">
              We partner with founders and small teams to build websites that
              look premium, load fast, and turn visitors into real inquiries.
            </p>
          </div>

          <div
            className="wow fadeInUp relative z-10 overflow-hidden rounded px-8 pt-0 pb-8 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]"
            data-wow-delay=".3s"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover -z-10 opacity-10 dark:opacity-40 bg-noise-pattern"></div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
              <svg
                width="1174"
                height="560"
                viewBox="0 0 1174 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4" filter="url(#filter0_f_41_257)">
                  <rect
                    x="450.531"
                    y="279"
                    width="272.933"
                    height="328.051"
                    fill="url(#paint0_linear_41_257)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_41_257"
                    x="0.531494"
                    y="-171"
                    width="1172.93"
                    height="1228.05"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="225"
                      result="effect1_foregroundBlur_41_257"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_41_257"
                    x1="425.16"
                    y1="343.693"
                    x2="568.181"
                    y2="660.639"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ABBCFF" />
                    <stop offset="0.859375" stopColor="#4A6CF7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flex items-center justify-around w-full tabButtons">
              <button
                type="button"
                onClick={() => setActiveTab(0)}
                className={`w-full border-b px-2 pt-8 pb-6 font-heading text-base font-medium hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary lg:pt-9 lg:pb-7${
                  activeTab === 0
                    ? " text-primary border-primary dark:border-primary"
                    : ""
                }`}
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(1)}
                className={`w-full border-b px-2 pt-8 pb-6 font-heading text-base font-medium hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary lg:pt-9 lg:pb-7${
                  activeTab === 1
                    ? " text-primary border-primary dark:border-primary"
                    : ""
                }`}
              >
                Our Mission
              </button>
              <button
                type="button"
                onClick={() => setActiveTab(2)}
                className={`w-full border-b px-2 pt-8 pb-6 font-heading text-base font-medium hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary lg:pt-9 lg:pb-7${
                  activeTab === 2
                    ? " text-primary border-primary dark:border-primary"
                    : ""
                }`}
              >
                Our Vision
              </button>
            </div>
            <div className="w-full">
              <div className={`tabPanel${activeTab === 0 ? "" : " hidden"}`}>
                <div className="-mx-4 w-full flex flex-wrap items-center pt-[70px]">
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                      <div className="absolute top-0 left-0">
                        <img
                          src="/images/about/image-1.jpg"
                          alt="about-image"
                        />
                      </div>
                      <div className="absolute right-0 z-10 -translate-y-1/2 top-1/2">
                        <img
                          src="/images/about/image-2.jpg"
                          alt="about-image"
                        />
                        <div className="absolute -left-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
                      </div>
                      <div className="absolute right-0 z-40 top-24">
                        <svg
                          width="72"
                          height="38"
                          viewBox="0 0 72 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                            fill="#4A6CF7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="max-w-[565px] lg:ml-auto">
                      <h2 className="mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
                        We build websites that feel clear, calm, and confident
                      </h2>
                      <p className="mb-6 text-base text-dark-text">
                        Aldo Website LLC is a small, senior team that blends
                        strategy, design, and development.
                      </p>
                      <p className="mb-6 text-base text-dark-text">
                        We start with positioning and content so the design has
                        something strong to say.
                      </p>
                      <p className="text-base text-dark-text">
                        Every site is optimized for speed, accessibility, and
                        easy updates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tabPanel${activeTab === 1 ? "" : " hidden"}`}>
                <div className="-mx-4 w-full flex flex-wrap items-center pt-[70px]">
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                      <div className="absolute top-0 left-0">
                        <img
                          src="/images/about/image-1.jpg"
                          alt="about-image"
                        />
                      </div>
                      <div className="absolute right-0 z-10 -translate-y-1/2 top-1/2">
                        <img
                          src="/images/about/image-2.jpg"
                          alt="about-image"
                        />
                        <div className="absolute -left-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
                      </div>
                      <div className="absolute right-0 z-40 top-24">
                        <svg
                          width="72"
                          height="38"
                          viewBox="0 0 72 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                            fill="#4A6CF7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="max-w-[565px] lg:ml-auto">
                      <h2 className="mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
                        Our mission is to help good businesses look as good
                        online as they are in real life
                      </h2>
                      <p className="mb-6 text-base text-dark-text">
                        We translate your expertise into a clear story and a
                        focused user journey.
                      </p>
                      <p className="mb-6 text-base text-dark-text">
                        No bloated pages or confusing navigation, just the
                        information your clients need.
                      </p>
                      <p className="text-base text-dark-text">
                        Launch is handled with care, and we stay available after
                        the handoff.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`tabPanel${activeTab === 2 ? "" : " hidden"}`}>
                <div className="-mx-4 w-full flex flex-wrap items-center pt-[70px]">
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                      <div className="absolute top-0 left-0">
                        <img
                          src="/images/about/image-1.jpg"
                          alt="about-image"
                        />
                      </div>
                      <div className="absolute right-0 z-10 -translate-y-1/2 top-1/2">
                        <img
                          src="/images/about/image-2.jpg"
                          alt="about-image"
                        />
                        <div className="absolute -left-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
                      </div>
                      <div className="absolute right-0 z-40 top-24">
                        <svg
                          width="72"
                          height="38"
                          viewBox="0 0 72 38"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z"
                            fill="#4A6CF7"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                            fill="#4A6CF7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="max-w-[565px] lg:ml-auto">
                      <h2 className="mb-8 font-heading text-2xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
                        Our vision is a web that works for small teams, not
                        against them
                      </h2>
                      <p className="mb-6 text-base text-dark-text">
                        Modern sites should be simple to maintain, fast on
                        mobile, and measurable.
                      </p>
                      <p className="mb-6 text-base text-dark-text">
                        We build with scalable structure so you can grow without
                        rebuilding every year.
                      </p>
                      <p className="text-base text-dark-text">
                        Whether you are rebranding or starting fresh, we make
                        the process easy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="relative pt-6 mx-auto mb-12 text-center wow fadeInUp md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> OUR TEAM </span>
            <h2 className="mx-auto mb-5 max-w-[620px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Small team, senior attention on every project
            </h2>
            <p className="mx-auto max-w-[620px] text-base text-dark-text">
              You work directly with the people handling strategy, design, and
              development.
            </p>
          </div>

          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]"
                data-wow-delay=".2s"
              >
                <div className="relative mb-8 overflow-hidden rounded">
                  <img
                    src="/images/team/image-1.jpg"
                    alt="team-image"
                    className="w-full"
                  />
                  <div className="absolute transition duration-300 -translate-x-1/2 translate-y-10 opacity-0 bottom-6 left-1/2 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl">
                    Strategy and Messaging
                  </h3>
                  <p className="text-base font-heading text-dark-text">
                    Discovery, positioning, and copy
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]"
                data-wow-delay=".25s"
              >
                <div className="relative mb-8 overflow-hidden rounded">
                  <img
                    src="/images/team/image-2.jpg"
                    alt="team-image"
                    className="w-full"
                  />
                  <div className="absolute transition duration-300 -translate-x-1/2 translate-y-10 opacity-0 bottom-6 left-1/2 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl">
                    Design and UX
                  </h3>
                  <p className="text-base font-heading text-dark-text">
                    Visual system, UI, and prototypes
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-1/4">
              <div
                className="wow fadeInUp group mx-auto mb-10 max-w-[300px] text-center xs:max-w-[370px]"
                data-wow-delay=".3s"
              >
                <div className="relative mb-8 overflow-hidden rounded">
                  <img
                    src="/images/team/image-3.jpg"
                    alt="team-image"
                    className="w-full"
                  />
                  <div className="absolute transition duration-300 -translate-x-1/2 translate-y-10 opacity-0 bottom-6 left-1/2 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="flex items-center justify-center space-x-3">
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.6667 11.2501H13.75L14.5834 7.91675H11.6667V6.25008C11.6667 5.39175 11.6667 4.58341 13.3334 4.58341H14.5834V1.78341C14.3117 1.74758 13.2859 1.66675 12.2025 1.66675C9.94004 1.66675 8.33337 3.04758 8.33337 5.58341V7.91675H5.83337V11.2501H8.33337V18.3334H11.6667V11.2501Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                      <a
                        href="#"
                        name="social-icon"
                        aria-label="social-icon"
                        className="flex items-center justify-center w-10 h-10 text-white transition bg-white border border-white rounded-full border-opacity-10 bg-opacity-10 backdrop-blur hover:border-transparent hover:bg-primary hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.78328 4.16677C5.78306 4.6088 5.60726 5.03263 5.29454 5.34504C4.98182 5.65744 4.55781 5.83282 4.11578 5.8326C3.67376 5.83238 3.24992 5.65657 2.93752 5.34386C2.62511 5.03114 2.44973 4.60713 2.44995 4.1651C2.45017 3.72307 2.62598 3.29924 2.9387 2.98683C3.25141 2.67443 3.67542 2.49905 4.11745 2.49927C4.55948 2.49949 4.98331 2.6753 5.29572 2.98801C5.60812 3.30073 5.78351 3.72474 5.78328 4.16677ZM5.83328 7.06677H2.49995V17.5001H5.83328V7.06677ZM11.1 7.06677H7.78328V17.5001H11.0666V12.0251C11.0666 8.9751 15.0416 8.69177 15.0416 12.0251V17.5001H18.3333V10.8918C18.3333 5.7501 12.45 5.94177 11.0666 8.46677L11.1 7.06677Z"
                            fill="white"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-medium font-heading text-dark dark:text-white sm:text-2xl">
                    Development and QA
                  </h3>
                  <p className="text-base font-heading text-dark-text">
                    Responsive build, performance, and testing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="relative pt-6 mx-auto mb-12 text-center wow fadeInUp md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> WORK </span>
            <h2 className="mx-auto mb-5 max-w-[500px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Selected projects and outcomes
            </h2>
            <p className="mx-auto max-w-[620px] text-base text-dark-text">
              A mix of service websites, landing pages, and online storefronts
              built for real results.
            </p>
          </div>

          <div className="w-full">
            <div
              className="flex items-center justify-center pb-2 mb-16 overflow-x-auto portfolio-btn-wrapper wow fadeInUp"
              data-wow-delay=".2s"
            >
              <button
                type="button"
                onClick={() => setActiveFilter("*")}
                className={`px-5 text-base whitespace-nowrap font-heading text-dark dark:text-white${
                  activeFilter === "*" ? " active" : ""
                }`}
              >
                All
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter(".branding")}
                className={`px-5 text-base whitespace-nowrap font-heading text-dark dark:text-white${
                  activeFilter === ".branding" ? " active" : ""
                }`}
              >
                Service Websites
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter(".digital")}
                className={`px-5 text-base whitespace-nowrap font-heading text-dark dark:text-white${
                  activeFilter === ".digital" ? " active" : ""
                }`}
              >
                Landing Pages
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter(".ecom")}
                className={`px-5 text-base whitespace-nowrap font-heading text-dark dark:text-white${
                  activeFilter === ".ecom" ? " active" : ""
                }`}
              >
                Online Stores
              </button>
            </div>

            <div className="flex flex-wrap -mx-4 portfolio-grid">
              <div className="grid-sizer"></div>
              <div
                className={`w-full px-4 grid-item ecom lg:w-2/3${
                  activeFilter !== "*" && activeFilter !== ".ecom"
                    ? " hidden"
                    : ""
                }`}
              >
                <div
                  className="relative mb-10 overflow-hidden rounded wow fadeInUp group"
                  data-wow-delay=".2s"
                >
                  <img
                    src="/images/portfolio/image-1.jpg"
                    alt="portfolio-image"
                    className="w-full"
                  />

                  <div className="duration-300 absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded bg-[#000] bg-opacity-30 py-5 px-4 opacity-0 backdrop-blur-[30px] transition group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                    <div className="border-r border-[#e9e9e9] border-opacity-30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                      <h3 className="text-base font-medium text-white font-heading sm:text-xl lg:text-base xl:text-xl">
                        Service Business Website
                      </h3>
                      <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                        Lead generation redesign
                      </p>
                    </div>
                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                      <a
                        href="#"
                        className="dark:hover:us-bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8] bg-opacity-[15%] text-white hover:bg-primary hover:bg-opacity-100 dark:hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="fill-current"
                        >
                          <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`w-full px-4 grid-item branding md:w-1/2 lg:w-1/3${
                  activeFilter !== "*" && activeFilter !== ".branding"
                    ? " hidden"
                    : ""
                }`}
              >
                <div
                  className="relative mb-10 overflow-hidden rounded wow fadeInUp group"
                  data-wow-delay=".25s"
                >
                  <img
                    src="/images/portfolio/image-2.jpg"
                    alt="portfolio-image"
                    className="w-full"
                  />

                  <div className="duration-300 absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded bg-[#000] bg-opacity-30 py-5 px-4 opacity-0 backdrop-blur-[30px] transition group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                    <div className="border-r border-[#e9e9e9] border-opacity-30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                      <h3 className="text-base font-medium text-white font-heading sm:text-xl lg:text-base xl:text-xl">
                        Brand Refresh
                      </h3>
                      <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                        New homepage and messaging
                      </p>
                    </div>
                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                      <a
                        href="#"
                        className="dark:hover:us-bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8] bg-opacity-[15%] text-white hover:bg-primary hover:bg-opacity-100 dark:hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="fill-current"
                        >
                          <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`w-full px-4 grid-item digital md:w-1/2 lg:w-1/3${
                  activeFilter !== "*" && activeFilter !== ".digital"
                    ? " hidden"
                    : ""
                }`}
              >
                <div
                  className="relative mb-10 overflow-hidden rounded wow fadeInUp group"
                  data-wow-delay=".3s"
                >
                  <img
                    src="/images/portfolio/image-3.jpg"
                    alt="portfolio-image"
                    className="w-full"
                  />

                  <div className="duration-300 absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded bg-[#000] bg-opacity-30 py-5 px-4 opacity-0 backdrop-blur-[30px] transition group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                    <div className="border-r border-[#e9e9e9] border-opacity-30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                      <h3 className="text-base font-medium text-white font-heading sm:text-xl lg:text-base xl:text-xl">
                        SaaS Landing Page
                      </h3>
                      <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                        Trial signups optimized
                      </p>
                    </div>
                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                      <a
                        href="#"
                        className="dark:hover:us-bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8] bg-opacity-[15%] text-white hover:bg-primary hover:bg-opacity-100 dark:hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="fill-current"
                        >
                          <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`w-full px-4 grid-item ecom md:w-1/2 lg:w-1/3${
                  activeFilter !== "*" && activeFilter !== ".ecom"
                    ? " hidden"
                    : ""
                }`}
              >
                <div
                  className="relative mb-10 overflow-hidden rounded wow fadeInUp group"
                  data-wow-delay=".35s"
                >
                  <img
                    src="/images/portfolio/image-4.jpg"
                    alt="portfolio-image"
                    className="w-full"
                  />

                  <div className="duration-300 absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded bg-[#000] bg-opacity-30 py-5 px-4 opacity-0 backdrop-blur-[30px] transition group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                    <div className="border-r border-[#e9e9e9] border-opacity-30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                      <h3 className="text-base font-medium text-white font-heading sm:text-xl lg:text-base xl:text-xl">
                        Online Storefront
                      </h3>
                      <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">
                        Shopify build and SEO
                      </p>
                    </div>
                    <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                      <a
                        href="#"
                        className="dark:hover:us-bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8] bg-opacity-[15%] text-white hover:bg-primary hover:bg-opacity-100 dark:hover:bg-opacity-100"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="fill-current"
                        >
                          <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="w-full pt-10 text-center wow fadeInUp"
              data-wow-delay=".2s"
            >
              <Link
                to="/blog-grids"
                className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90"
              >
                Browse Case Studies
                <span className="pl-3">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonial" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="relative pt-6 mx-auto mb-12 text-center wow fadeInUp md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> CLIENT FEEDBACK </span>
            <h2 className="mx-auto mb-5 max-w-[450px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              What clients notice after launch
            </h2>
            <p className="mx-auto max-w-[620px] text-base text-dark-text">
              Real feedback from businesses that needed clarity, speed, and
              better conversions.
            </p>
          </div>

          <div className="w-full px-4">
            <div
              className="wow fadeInUp relative z-10 overflow-hidden rounded bg-cover bg-center px-10 pt-[60px] pb-28 drop-shadow-light dark:drop-shadow-none sm:px-14 md:p-[70px] md:pb-28 lg:pb-[70px]"
              data-wow-delay=".3s"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover -z-10 opacity-10 dark:opacity-40 bg-noise-pattern"></div>
              <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
                <svg
                  width="1174"
                  height="560"
                  viewBox="0 0 1174 560"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4" filter="url(#filter0_f_41_257)">
                    <rect
                      x="450.531"
                      y="279"
                      width="272.933"
                      height="328.051"
                      fill="url(#paint0_linear_41_257)"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_41_257"
                      x="0.531494"
                      y="-171"
                      width="1172.93"
                      height="1228.05"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="225"
                        result="effect1_foregroundBlur_41_257"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_41_257"
                      x1="425.16"
                      y1="343.693"
                      x2="568.181"
                      y2="660.639"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ABBCFF" />
                      <stop offset="0.859375" stopColor="#4A6CF7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="testimonial-active">
                <div
                  className={`testimonial-item${
                    testimonialIndex === 0 ? "" : " hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="order-last w-full px-4 lg:order-first lg:w-1/2">
                      <div className="text-center lg:text-left">
                        <p className="text-base font-light mb-9 font-heading text-dark-text lg:text-lg xl:text-2xl">
                          "Our new site finally explains what we do in seconds.
                          The messaging is clear, the layout feels premium, and
                          everything loads fast on mobile."
                        </p>

                        <h3 className="mb-1 text-xl font-heading text-dark dark:text-white">
                          Owner, Local Service Business
                        </h3>
                        <p className="text-base text-dark-text">
                          Home services company
                        </p>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="lg:mr-0 relative mx-auto mb-9 h-[420px] w-full max-w-[420px] lg:mb-0">
                        <div className="absolute z-10 right-5 top-5">
                          <img
                            src="/images/testimonial/image-1.jpg"
                            alt="testimonial-image"
                          />
                          <div className="absolute -right-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
                        </div>
                        <div className="absolute z-40 -right-4 bottom-20">
                          <svg
                            width="72"
                            height="38"
                            viewBox="0 0 72 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                              fill="#4A6CF7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z"
                              fill="#4A6CF7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z"
                              fill="#4A6CF7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                              fill="#4A6CF7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`testimonial-item${
                    testimonialIndex === 1 ? "" : " hidden"
                  }`}
                >
                  <div className="flex flex-wrap items-center -mx-4">
                    <div className="order-last w-full px-4 lg:order-first lg:w-1/2">
                      <div className="text-center lg:text-left">
                        <p className="text-base font-light mb-9 font-heading text-dark-text lg:text-lg xl:text-2xl">
                          "Aldo Website LLC turned our messy site into a clean,
                          conversion-focused experience. The handoff was smooth
                          and we can update content without breaking anything."
                        </p>

                        <h3 className="mb-1 text-xl font-heading text-dark dark:text-white">
                          Founder, Ecommerce Brand
                        </h3>
                        <p className="text-base text-dark-text">
                          Online retail company
                        </p>
                      </div>
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                      <div className="lg:mr-0 relative mx-auto mb-9 h-[420px] w-full max-w-[420px] lg:mb-0">
                        <div className="absolute z-10 right-5 top-5">
                          <img
                            src="/images/testimonial/image-1.jpg"
                            alt="testimonial-image"
                          />
                          <div className="absolute -right-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
                        </div>
                        <div className="absolute z-40 -right-4 bottom-20">
                          <svg
                            width="72"
                            height="38"
                            viewBox="0 0 72 38"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z"
                              fill="#4A6CF7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 11.9727C59.6808 11.6896 57.4524 12.6321 55.1508 14.6049C51.3631 17.8515 44.7908 19.4665 38.8668 14.6196C36.329 12.5433 34.117 12.215 32.2894 12.5196C30.3972 12.8349 28.8057 13.8437 27.5547 14.6777C25.5734 15.9986 23.3915 17.3866 20.8786 17.7124C18.2847 18.0486 15.515 17.2432 12.3598 14.6139C9.71804 12.4124 7.45748 11.989 5.72104 12.2561C3.94436 12.5294 2.56003 13.5501 1.76341 14.4916C1.40666 14.9132 0.775686 14.9658 0.354079 14.6091C-0.0675277 14.2523 -0.120109 13.6213 0.236635 13.1997C1.27334 11.9745 3.0643 10.6413 5.41692 10.2794C7.80979 9.91122 10.6326 10.5711 13.6402 13.0775C16.485 15.4481 18.7154 15.9761 20.6215 15.729C22.6086 15.4714 24.4266 14.3594 26.4453 13.0136L27 13.8457L26.4453 13.0136C27.6943 12.1809 29.6028 10.9397 31.9606 10.5468C34.383 10.1431 37.1711 10.6481 40.1333 13.0717C45.1548 17.1802 50.6369 15.8397 53.8492 13.0864C56.3795 10.9176 59.1512 9.61019 62.2455 9.9874C65.3089 10.3608 68.4333 12.3571 71.7557 16.1907C72.1174 16.608 72.0723 17.2396 71.655 17.6013C71.2376 17.963 70.606 17.9179 70.2443 17.5005C67.0668 13.8341 64.3571 12.2596 62.0035 11.9727Z"
                              fill="#4A6CF7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 21.8953C59.6808 21.6122 57.4524 22.5548 55.1508 24.5275C51.3631 27.7741 44.7908 29.3891 38.8668 24.5422C36.329 22.4659 34.117 22.1376 32.2894 22.4422C30.3972 22.7575 28.8057 23.7663 27.5547 24.6003C25.5734 25.9212 23.3915 27.3093 20.8786 27.635C18.2847 27.9712 15.515 27.1658 12.3598 24.5365C9.71804 22.335 7.45748 21.9116 5.72104 22.1787C3.94436 22.4521 2.56003 23.4728 1.76341 24.4142C1.40666 24.8358 0.775686 24.8884 0.354079 24.5317C-0.0675277 24.1749 -0.120109 23.5439 0.236635 23.1223C1.27334 21.8971 3.0643 20.5639 5.41692 20.202C7.80979 19.8338 10.6326 20.4937 13.6402 23.0001C16.485 25.3707 18.7154 25.8987 20.6215 25.6516C22.6086 25.394 24.4266 24.282 26.4453 22.9362L27 23.7683L26.4453 22.9362C27.6943 22.1035 29.6028 20.8624 31.9606 20.4694C34.383 20.0657 37.1711 20.5707 40.1333 22.9943C45.1548 27.1028 50.6369 25.7624 53.8492 23.009C56.3795 20.8403 59.1512 19.5328 62.2455 19.91C65.3089 20.2834 68.4333 22.2797 71.7557 26.1133C72.1174 26.5306 72.0723 27.1622 71.655 27.5239C71.2376 27.8856 70.606 27.8405 70.2443 27.4231C67.0668 23.7567 64.3571 22.1822 62.0035 21.8953Z"
                              fill="#4A6CF7"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M62.0035 31.8182C59.6808 31.535 57.4524 32.4776 55.1508 34.4504C51.3631 37.6969 44.7908 39.312 38.8668 34.4651C36.329 32.3887 34.117 32.0604 32.2894 32.365C30.3972 32.6804 28.8057 33.6892 27.5547 34.5232C25.5734 35.8441 23.3915 37.2321 20.8786 37.5578C18.2847 37.8941 15.515 37.0887 12.3598 34.4594C9.71804 32.2579 7.45748 31.8344 5.72104 32.1016C3.94436 32.3749 2.56003 33.3956 1.76341 34.3371C1.40666 34.7587 0.775686 34.8113 0.354079 34.4545C-0.0675277 34.0978 -0.120109 33.4668 0.236635 33.0452C1.27334 31.82 3.0643 30.4868 5.41692 30.1248C7.80979 29.7567 10.6326 30.4166 13.6402 32.9229C16.485 35.2936 18.7154 35.8215 20.6215 35.5744C22.6086 35.3169 24.4266 34.2049 26.4453 32.8591L27 33.6911L26.4453 32.8591C27.6943 32.0264 29.6028 30.7852 31.9606 30.3922C34.383 29.9885 37.1711 30.4936 40.1333 32.9172C45.1548 37.0256 50.6369 35.6852 53.8492 32.9319C56.3795 30.7631 59.1512 29.4557 62.2455 29.8329C65.3089 30.2063 68.4333 32.2026 71.7557 36.0361C72.1174 36.4535 72.0723 37.085 71.655 37.4468C71.2376 37.8085 70.606 37.7634 70.2443 37.346C67.0668 33.6796 64.3571 32.1051 62.0035 31.8182Z"
                              fill="#4A6CF7"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-14 sm:pt-20 lg:pt-24">
        <div className="px-4 xl:container">
          <div
            className="wow fadeInUp relative mx-auto mb-16 max-w-[620px] text-center"
            data-wow-delay=".2s"
          >
            <h2 className="mb-5 font-heading text-[38px] font-semibold leading-tight text-dark dark:text-white">
              Built on tools we trust
            </h2>
            <p className="text-base text-dark-text">
              We use proven platforms and frameworks so your site stays fast,
              secure, and easy to maintain.
            </p>
          </div>
          <div className="border-b pb-24 dark:border-[#2E333D]">
            <div
              className="flex flex-wrap -mx-4 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                  <a
                    href="#"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="/images/brands/uideck.svg"
                      alt="image"
                      className="hidden w-full h-10 dark:block"
                    />
                    <img
                      src="/images/brands/uideck-2.svg"
                      alt="image"
                      className="w-full h-10 dark:hidden"
                    />
                  </a>
                  <a
                    href="#"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="/images/brands/tailadmin.svg"
                      alt="image"
                      className="hidden w-full h-10 dark:block"
                    />
                    <img
                      src="/images/brands/tailadmin-2.svg"
                      alt="image"
                      className="w-full h-10 dark:hidden"
                    />
                  </a>
                  <a
                    href="#"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="/images/brands/graygrids.svg"
                      alt="image"
                      className="hidden w-full h-10 dark:block"
                    />
                    <img
                      src="/images/brands/graygrids-2.svg"
                      alt="image"
                      className="w-full h-10 dark:hidden"
                    />
                  </a>
                  <a
                    href="#"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="/images/brands/lineicons.svg"
                      alt="image"
                      className="hidden w-full h-10 dark:block"
                    />
                    <img
                      src="/images/brands/lineicons-2.svg"
                      alt="image"
                      className="w-full h-10 dark:hidden"
                    />
                  </a>
                  <a
                    href="#"
                    className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  >
                    <img
                      src="/images/brands/plainadmin.svg"
                      alt="image"
                      className="hidden w-full h-10 dark:block"
                    />
                    <img
                      src="/images/brands/plainadmin-2.svg"
                      alt="image"
                      className="w-full h-10 dark:hidden"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="relative w-full pt-10 mb-12 text-center wow fadeInUp md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title whitespace-nowrap"> PACKAGES </span>
            <h2 className="mx-auto mb-5 max-w-[600px] font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Simple packages, custom scope
            </h2>
            <p className="mx-auto max-w-[600px] text-base text-dark-text">
              Choose a starting point and we tailor scope, timeline, and
              deliverables to your goals.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center overflow-hidden rounded drop-shadow-light dark:drop-shadow-none">
            <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover -z-10 opacity-10 dark:opacity-40 bg-noise-pattern"></div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
              <svg
                width="1174"
                height="560"
                viewBox="0 0 1174 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4" filter="url(#filter0_f_41_257)">
                  <rect
                    x="450.531"
                    y="279"
                    width="272.933"
                    height="328.051"
                    fill="url(#paint0_linear_41_257)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_41_257"
                    x="0.531494"
                    y="-171"
                    width="1172.93"
                    height="1228.05"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="225"
                      result="effect1_foregroundBlur_41_257"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_41_257"
                    x1="425.16"
                    y1="343.693"
                    x2="568.181"
                    y2="660.639"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ABBCFF" />
                    <stop offset="0.859375" stopColor="#4A6CF7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div
                className="pt-10 pb-20 text-center wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="border-b dark:border-[#2E333D]">
                  <h3 className="mb-2 text-3xl font-medium font-heading text-dark dark:text-white">
                    Starter Site
                  </h3>
                  <p className="pb-10 text-base text-dark-text">
                    Launch-ready marketing site
                  </p>
                </div>
                <div className="border-b py-10 dark:border-[#2E333D]">
                  <h3 className="flex items-end justify-center pt-2 mb-6 text-base font-medium font-heading text-dark dark:text-white">
                    <span className="-mb-1 text-[50px] leading-none">
                      Custom
                    </span>
                    <span className="pl-2">/ project</span>
                  </h3>

                  <p className="mx-auto max-w-[300px] text-base text-dark-text">
                    Scope and investment confirmed after a short discovery call.
                  </p>
                </div>
                <div className="space-y-4 px-6 pt-10 pb-[60px] text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Strategy call + sitemap
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    3-5 page responsive build
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Copy polish + SEO basics
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Lead capture + analytics
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Launch support + handoff
                  </p>
                </div>
                <a
                  href="#support"
                  className="inline-flex items-center rounded bg-dark-text py-[14px] px-8 font-heading text-base text-white hover:bg-primary"
                >
                  Book a Discovery Call
                  <span className="pl-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full dark:border-[#2E333D] sm:w-1/2 sm:border-l lg:w-1/3 lg:border-x">
              <div
                className="pt-10 pb-20 text-center wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="border-b dark:border-[#2E333D]">
                  <h3 className="mb-2 text-3xl font-medium font-heading text-dark dark:text-white">
                    Growth Commerce
                  </h3>
                  <p className="pb-10 text-base text-dark-text">
                    Optimized for product sales
                  </p>
                </div>
                <div className="border-b py-10 dark:border-[#2E333D]">
                  <h3 className="flex items-end justify-center pt-2 mb-6 text-base font-medium font-heading text-dark dark:text-white">
                    <span className="-mb-1 text-[50px] leading-none">
                      Custom
                    </span>
                    <span className="pl-2">/ project</span>
                  </h3>

                  <p className="mx-auto max-w-[300px] text-base text-dark-text">
                    Scope and investment confirmed after a short discovery call.
                  </p>
                </div>
                <div className="space-y-4 px-6 pt-10 pb-[60px] text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Storefront + product templates
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Cart, checkout, and payments
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Email capture + automations
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Speed + conversion optimization
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Post-launch analytics review
                  </p>
                </div>
                <a
                  href="#support"
                  className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90"
                >
                  Book a Discovery Call
                  <span className="pl-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3">
              <div
                className="pt-10 pb-20 text-center wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="border-b dark:border-[#2E333D]">
                  <h3 className="mb-2 text-3xl font-medium font-heading text-dark dark:text-white">
                    Scale & Systems
                  </h3>
                  <p className="pb-10 text-base text-dark-text">
                    Custom platforms and SaaS builds
                  </p>
                </div>
                <div className="border-b py-10 dark:border-[#2E333D]">
                  <h3 className="flex items-end justify-center pt-2 mb-6 text-base font-medium font-heading text-dark dark:text-white">
                    <span className="-mb-1 text-[50px] leading-none">
                      Custom
                    </span>
                    <span className="pl-2">/ project</span>
                  </h3>

                  <p className="mx-auto max-w-[300px] text-base text-dark-text">
                    Scope and investment confirmed after a short discovery call.
                  </p>
                </div>
                <div className="space-y-4 px-6 pt-10 pb-[60px] text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Design system + UI kit
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Custom flows + onboarding
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    CRM + automation integrations
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Performance + accessibility pass
                  </p>
                  <p className="flex items-center text-base text-dark-text">
                    <span className="inline-block pr-2 text-[#00CB99]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9.99999 15.172L19.192 5.979L20.607 7.393L9.99999 18L3.63599 11.636L5.04999 10.222L9.99999 15.172Z" />
                      </svg>
                    </span>
                    Ongoing roadmap support
                  </p>
                </div>
                <a
                  href="#support"
                  className="inline-flex items-center rounded bg-dark-text py-[14px] px-8 font-heading text-base text-white hover:bg-primary"
                >
                  Book a Discovery Call
                  <span className="pl-3">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-12 text-center">
            <h3 className="mb-5 text-xl font-medium font-heading text-dark dark:text-white sm:text-3xl">
              Need a custom build?
            </h3>
            <p className="text-base text-dark-text">
              Share your goals and we&apos;ll outline the fastest path forward.
            </p>
          </div>
        </div>
      </section>

      <section id="blog" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="wow fadeInUp relative mx-auto mb-12 max-w-[620px] pt-6 text-center md:mb-20 lg:pt-16"
            data-wow-delay=".2s"
          >
            <span className="title"> INSIGHTS </span>
            <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
              Guides & resources for growth
            </h2>
            <p className="text-base text-dark-text">
              Practical breakdowns on conversion, performance, and building
              sites that generate qualified leads.
            </p>
          </div>

          <div className="w-full border-b pb-20 dark:border-[#2E333D]">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 wow fadeInUp" data-wow-delay=".2s">
                  <div className="relative mb-8 overflow-hidden rounded">
                    <Link to="/blog-details" className="block">
                      <img
                        src="/images/blog/image-1.jpg"
                        alt="blog-image"
                        className="w-full"
                      />
                    </Link>
                    <span className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white">
                      {" "}
                      Lead Gen{" "}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <p className="flex items-center pr-5 text-base font-heading text-dark-text">
                        <span className="pr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M15 16.5H13.5V15C13.5 14.4033 13.2629 13.831 12.841 13.409C12.419 12.9871 11.8467 12.75 11.25 12.75H6.75C6.15326 12.75 5.58097 12.9871 5.15901 13.409C4.73705 13.831 4.5 14.4033 4.5 15V16.5H3V15C3 14.0054 3.39509 13.0516 4.09835 12.3484C4.80161 11.6451 5.75544 11.25 6.75 11.25H11.25C12.2446 11.25 13.1984 11.6451 13.9016 12.3484C14.6049 13.0516 15 14.0054 15 15V16.5ZM9 9.75C8.40905 9.75 7.82389 9.63361 7.27792 9.40746C6.73196 9.18131 6.23588 8.84984 5.81802 8.43198C5.40015 8.01412 5.06869 7.51804 4.84254 6.97208C4.6164 6.42611 4.5 5.84095 4.5 5.25C4.5 4.65905 4.6164 4.07389 4.84254 3.52793C5.06869 2.98196 5.40015 2.48588 5.81802 2.06802C6.23588 1.65016 6.73196 1.31869 7.27792 1.09254C7.82389 0.866396 8.40905 0.75 9 0.75C10.1935 0.75 11.3381 1.22411 12.182 2.06802C13.0259 2.91193 13.5 4.05653 13.5 5.25C13.5 6.44348 13.0259 7.58807 12.182 8.43198C11.3381 9.2759 10.1935 9.75 9 9.75ZM9 8.25C9.79565 8.25 10.5587 7.93393 11.1213 7.37132C11.6839 6.80871 12 6.04565 12 5.25C12 4.45435 11.6839 3.69129 11.1213 3.12868C10.5587 2.56607 9.79565 2.25 9 2.25C8.20435 2.25 7.44129 2.56607 6.87868 3.12868C6.31607 3.69129 6 4.45435 6 5.25C6 6.04565 6.31607 6.80871 6.87868 7.37132C7.44129 7.93393 8.20435 8.25 9 8.25Z" />
                          </svg>
                        </span>
                        Aldo Website Team
                      </p>
                      <p className="flex items-center text-base font-heading text-dark-text">
                        <span className="pr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M12.75 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H5.25V0.75H6.75V2.25H11.25V0.75H12.75V2.25ZM11.25 3.75H6.75V5.25H5.25V3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75ZM15 8.25H3V14.25H15V8.25Z" />
                          </svg>
                        </span>
                        Oct 12, 2025
                      </p>
                    </div>
                    <h3>
                      <Link
                        to="/blog-details"
                        className="text-xl font-medium font-heading text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                      >
                        How to structure a homepage that converts service leads
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 wow fadeInUp" data-wow-delay=".3s">
                  <div className="relative mb-8 overflow-hidden rounded">
                    <Link to="/blog-details" className="block">
                      <img
                        src="/images/blog/image-2.jpg"
                        alt="blog-image"
                        className="w-full"
                      />
                    </Link>
                    <span className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white">
                      {" "}
                      Ecommerce{" "}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <p className="flex items-center pr-5 text-base font-heading text-dark-text">
                        <span className="pr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M15 16.5H13.5V15C13.5 14.4033 13.2629 13.831 12.841 13.409C12.419 12.9871 11.8467 12.75 11.25 12.75H6.75C6.15326 12.75 5.58097 12.9871 5.15901 13.409C4.73705 13.831 4.5 14.4033 4.5 15V16.5H3V15C3 14.0054 3.39509 13.0516 4.09835 12.3484C4.80161 11.6451 5.75544 11.25 6.75 11.25H11.25C12.2446 11.25 13.1984 11.6451 13.9016 12.3484C14.6049 13.0516 15 14.0054 15 15V16.5ZM9 9.75C8.40905 9.75 7.82389 9.63361 7.27792 9.40746C6.73196 9.18131 6.23588 8.84984 5.81802 8.43198C5.40015 8.01412 5.06869 7.51804 4.84254 6.97208C4.6164 6.42611 4.5 5.84095 4.5 5.25C4.5 4.65905 4.6164 4.07389 4.84254 3.52793C5.06869 2.98196 5.40015 2.48588 5.81802 2.06802C6.23588 1.65016 6.73196 1.31869 7.27792 1.09254C7.82389 0.866396 8.40905 0.75 9 0.75C10.1935 0.75 11.3381 1.22411 12.182 2.06802C13.0259 2.91193 13.5 4.05653 13.5 5.25C13.5 6.44348 13.0259 7.58807 12.182 8.43198C11.3381 9.2759 10.1935 9.75 9 9.75ZM9 8.25C9.79565 8.25 10.5587 7.93393 11.1213 7.37132C11.6839 6.80871 12 6.04565 12 5.25C12 4.45435 11.6839 3.69129 11.1213 3.12868C10.5587 2.56607 9.79565 2.25 9 2.25C8.20435 2.25 7.44129 2.56607 6.87868 3.12868C6.31607 3.69129 6 4.45435 6 5.25C6 6.04565 6.31607 6.80871 6.87868 7.37132C7.44129 7.93393 8.20435 8.25 9 8.25Z" />
                          </svg>
                        </span>
                        Aldo Website Team
                      </p>
                      <p className="flex items-center text-base font-heading text-dark-text">
                        <span className="pr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M12.75 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H5.25V0.75H6.75V2.25H11.25V0.75H12.75V2.25ZM11.25 3.75H6.75V5.25H5.25V3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75ZM15 8.25H3V14.25H15V8.25Z" />
                          </svg>
                        </span>
                        Sep 28, 2025
                      </p>
                    </div>
                    <h3>
                      <Link
                        to="/blog-details"
                        className="text-xl font-medium font-heading text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                      >
                        5 checkout fixes that lift conversion rates
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                <div className="mb-10 wow fadeInUp" data-wow-delay=".4s">
                  <div className="relative mb-8 overflow-hidden rounded">
                    <Link to="/blog-details" className="block">
                      <img
                        src="/images/blog/image-3.jpg"
                        alt="blog-image"
                        className="w-full"
                      />
                    </Link>
                    <span className="absolute top-5 left-5 rounded bg-primary py-[6px] px-4 font-heading text-sm font-medium text-white">
                      {" "}
                      Performance{" "}
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center mb-4">
                      <p className="flex items-center pr-5 text-base font-heading text-dark-text">
                        <span className="pr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M15 16.5H13.5V15C13.5 14.4033 13.2629 13.831 12.841 13.409C12.419 12.9871 11.8467 12.75 11.25 12.75H6.75C6.15326 12.75 5.58097 12.9871 5.15901 13.409C4.73705 13.831 4.5 14.4033 4.5 15V16.5H3V15C3 14.0054 3.39509 13.0516 4.09835 12.3484C4.80161 11.6451 5.75544 11.25 6.75 11.25H11.25C12.2446 11.25 13.1984 11.6451 13.9016 12.3484C14.6049 13.0516 15 14.0054 15 15V16.5ZM9 9.75C8.40905 9.75 7.82389 9.63361 7.27792 9.40746C6.73196 9.18131 6.23588 8.84984 5.81802 8.43198C5.40015 8.01412 5.06869 7.51804 4.84254 6.97208C4.6164 6.42611 4.5 5.84095 4.5 5.25C4.5 4.65905 4.6164 4.07389 4.84254 3.52793C5.06869 2.98196 5.40015 2.48588 5.81802 2.06802C6.23588 1.65016 6.73196 1.31869 7.27792 1.09254C7.82389 0.866396 8.40905 0.75 9 0.75C10.1935 0.75 11.3381 1.22411 12.182 2.06802C13.0259 2.91193 13.5 4.05653 13.5 5.25C13.5 6.44348 13.0259 7.58807 12.182 8.43198C11.3381 9.2759 10.1935 9.75 9 9.75ZM9 8.25C9.79565 8.25 10.5587 7.93393 11.1213 7.37132C11.6839 6.80871 12 6.04565 12 5.25C12 4.45435 11.6839 3.69129 11.1213 3.12868C10.5587 2.56607 9.79565 2.25 9 2.25C8.20435 2.25 7.44129 2.56607 6.87868 3.12868C6.31607 3.69129 6 4.45435 6 5.25C6 6.04565 6.31607 6.80871 6.87868 7.37132C7.44129 7.93393 8.20435 8.25 9 8.25Z" />
                          </svg>
                        </span>
                        Aldo Website Team
                      </p>
                      <p className="flex items-center text-base font-heading text-dark-text">
                        <span className="pr-2">
                          <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            className="fill-current"
                          >
                            <path d="M12.75 2.25H15.75C15.9489 2.25 16.1397 2.32902 16.2803 2.46967C16.421 2.61032 16.5 2.80109 16.5 3V15C16.5 15.1989 16.421 15.3897 16.2803 15.5303C16.1397 15.671 15.9489 15.75 15.75 15.75H2.25C2.05109 15.75 1.86032 15.671 1.71967 15.5303C1.57902 15.3897 1.5 15.1989 1.5 15V3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H5.25V0.75H6.75V2.25H11.25V0.75H12.75V2.25ZM11.25 3.75H6.75V5.25H5.25V3.75H3V6.75H15V3.75H12.75V5.25H11.25V3.75ZM15 8.25H3V14.25H15V8.25Z" />
                          </svg>
                        </span>
                        Sep 10, 2025
                      </p>
                    </div>
                    <h3>
                      <Link
                        to="/blog-details"
                        className="text-xl font-medium font-heading text-dark hover:text-primary dark:text-white dark:hover:text-primary md:text-2xl lg:text-xl xl:text-2xl"
                      >
                        Speed wins: the web optimizations that matter most
                      </Link>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="support" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className="w-full px-4 xl:w-10/12">
              <div className="flex flex-wrap items-center border-b pb-14 dark:border-[#2E333D] lg:pb-0">
                <div className="w-full px-4 lg:w-1/2">
                  <div
                    className="wow fadeInUp relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16"
                    data-wow-delay=".2s"
                  >
                    <span className="title !left-0 !translate-x-0">
                      {" "}
                      CONTACT{" "}
                    </span>
                    <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                      Tell us about your project
                    </h2>
                    <p className="text-base text-dark-text">
                      We respond within one business day. Share goals, timeline,
                      and budget range so we can outline the best path forward.
                    </p>
                  </div>
                </div>

                <div className="w-full px-4 lg:w-1/2">
                  <div
                    className="flex items-center wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    <span className="mr-10 h-1 w-full max-w-[200px] bg-dark dark:bg-white"></span>
                    <a
                      href="mailto:hello@aldowebsite.com"
                      className="text-xl font-heading text-dark dark:text-white md:text-3xl lg:text-xl xl:text-3xl"
                    >
                      {" "}
                      hello@aldowebsite.com{" "}
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="flex flex-wrap pt-12 -mx-4 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-6">
                    <h3 className="mb-2 text-base font-heading text-dark dark:text-white sm:text-xl">
                      Email Address
                    </h3>
                    <p className="text-base font-medium text-dark-text">
                      hello@aldowebsite.com
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-6">
                    <h3 className="mb-2 text-base font-heading text-dark dark:text-white sm:text-xl">
                      Call Availability
                    </h3>
                    <p className="text-base font-medium text-dark-text">
                      By appointment
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="mb-6">
                    <h3 className="mb-2 text-base font-heading text-dark dark:text-white sm:text-xl">
                      Service Area
                    </h3>
                    <p className="text-base font-medium text-dark-text">
                      Remote • USA
                    </p>
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2 lg:w-1/4">
                  <div className="flex items-center mb-6 space-x-5 lg:justify-end">
                    <a
                      href="#"
                      name="social-link"
                      aria-label="social-link"
                      className="text-dark-text hover:text-primary dark:hover:text-white"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      name="social-link"
                      aria-label="social-link"
                      className="text-dark-text hover:text-primary dark:hover:text-white"
                    >
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.9831 19.25L9.82094 13.3176L4.61058 19.25H2.40625L8.843 11.9233L2.40625 2.75H8.06572L11.9884 8.34127L16.9034 2.75H19.1077L12.9697 9.73737L19.6425 19.25H13.9831ZM16.4378 17.5775H14.9538L5.56249 4.42252H7.04674L10.808 9.6899L11.4584 10.6039L16.4378 17.5775Z"
                          fill="currentColor"
                        />
                      </svg>
                    </a>
                    <a
                      href="#"
                      name="social-link"
                      aria-label="social-link"
                      className="text-dark-text hover:text-primary dark:hover:text-white"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M6.93994 5.00002C6.93968 5.53046 6.72871 6.03906 6.35345 6.41394C5.97819 6.78883 5.46938 6.99929 4.93894 6.99902C4.40851 6.99876 3.89991 6.78779 3.52502 6.41253C3.15014 6.03727 2.93968 5.52846 2.93994 4.99802C2.94021 4.46759 3.15117 3.95899 3.52644 3.5841C3.9017 3.20922 4.41051 2.99876 4.94094 2.99902C5.47137 2.99929 5.97998 3.21026 6.35486 3.58552C6.72975 3.96078 6.94021 4.46959 6.93994 5.00002ZM6.99994 8.48002H2.99994V21H6.99994V8.48002ZM13.3199 8.48002H9.33994V21H13.2799V14.43C13.2799 10.77 18.0499 10.43 18.0499 14.43V21H21.9999V13.07C21.9999 6.90002 14.9399 7.13002 13.2799 10.16L13.3199 8.48002Z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      name="social-link"
                      aria-label="social-link"
                      className="text-dark-text hover:text-primary dark:hover:text-white"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M7.443 5.34961C8.082 5.34961 8.673 5.39961 9.213 5.54761C9.70302 5.63765 10.1708 5.82244 10.59 6.09161C10.984 6.33861 11.279 6.68561 11.475 7.13061C11.672 7.57561 11.77 8.12061 11.77 8.71361C11.77 9.40661 11.623 9.99961 11.279 10.4446C10.984 10.8906 10.492 11.2856 9.902 11.5826C10.738 11.8306 11.377 12.2756 11.77 12.8686C12.164 13.4626 12.41 14.2046 12.41 15.0456C12.41 15.7386 12.262 16.3316 12.016 16.8266C11.77 17.3216 11.377 17.7666 10.934 18.0636C10.4528 18.382 9.92084 18.616 9.361 18.7556C8.771 18.9046 8.181 19.0036 7.591 19.0036H1V5.34961H7.443ZM7.049 10.8896C7.59 10.8896 8.033 10.7416 8.377 10.4946C8.721 10.2476 8.869 9.80161 8.869 9.25761C8.869 8.96061 8.819 8.66361 8.721 8.46661C8.623 8.26861 8.475 8.11961 8.279 7.97161C8.082 7.87261 7.885 7.77361 7.639 7.72461C7.393 7.67461 7.148 7.67461 6.852 7.67461H4V10.8906H7.05L7.049 10.8896ZM7.197 16.7276C7.492 16.7276 7.787 16.6776 8.033 16.6286C8.28138 16.5814 8.51628 16.48 8.721 16.3316C8.92139 16.1868 9.08903 16.0015 9.213 15.7876C9.311 15.5406 9.41 15.2436 9.41 14.8976C9.41 14.2046 9.213 13.7096 8.82 13.3636C8.426 13.0666 7.885 12.9186 7.246 12.9186H4V16.7286H7.197V16.7276ZM16.689 16.6776C17.082 17.0736 17.672 17.2716 18.459 17.2716C19 17.2716 19.492 17.1236 19.885 16.8766C20.279 16.5796 20.525 16.2826 20.623 15.9856H23.033C22.639 17.1726 22.049 18.0136 21.263 18.5576C20.475 19.0526 19.541 19.3496 18.41 19.3496C17.6864 19.3518 16.9688 19.2175 16.295 18.9536C15.6887 18.7262 15.148 18.3524 14.721 17.8656C14.2643 17.4102 13.9267 16.8494 13.738 16.2326C13.492 15.5896 13.393 14.8976 13.393 14.1056C13.393 13.3636 13.492 12.6716 13.738 12.0276C13.9745 11.4077 14.3245 10.8373 14.77 10.3456C15.213 9.90061 15.754 9.50561 16.344 9.25761C17.0007 8.99367 17.7022 8.8592 18.41 8.86161C19.246 8.86161 19.984 9.01061 20.623 9.35661C21.263 9.70261 21.754 10.0986 22.148 10.6926C22.5499 11.2631 22.8494 11.8993 23.033 12.5726C23.131 13.2646 23.18 13.9576 23.131 14.7486H16C16 15.5406 16.295 16.2826 16.689 16.6786V16.6776ZM19.787 11.4836C19.443 11.1376 18.902 10.9396 18.262 10.9396C17.82 10.9396 17.475 11.0386 17.18 11.1866C16.885 11.3356 16.689 11.5336 16.492 11.7316C16.311 11.9229 16.1912 12.1638 16.148 12.4236C16.098 12.6716 16.049 12.8686 16.049 13.0666H20.475C20.377 12.3246 20.131 11.8306 19.787 11.4836ZM15.459 6.28961H20.967V7.62561H15.46V6.28961H15.459Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-[780px] pt-[130px]">
            <form
              className="wow fadeInUp"
              data-wow-delay=".2s"
              action="#"
              method="POST"
            >
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="name"
                      className="block mb-3 text-base font-heading text-dark dark:text-white"
                    >
                      {" "}
                      Your Name{" "}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full Name"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="email"
                      className="block mb-3 text-base font-heading text-dark dark:text-white"
                    >
                      {" "}
                      Email Address{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email Address"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="phone"
                      className="block mb-3 text-base font-heading text-dark dark:text-white"
                    >
                      {" "}
                      Phone (Optional){" "}
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Best phone number"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/2">
                  <div className="mb-12">
                    <label
                      htmlFor="subject"
                      className="block mb-3 text-base font-heading text-dark dark:text-white"
                    >
                      {" "}
                      Subject{" "}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Website redesign, ecommerce, or something else"
                      className="w-full border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-10">
                    <label
                      htmlFor="message"
                      className="block mb-3 text-base font-heading text-dark dark:text-white"
                    >
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Tell us about your goals, timeline, and budget range"
                      className="w-full resize-none border-b bg-transparent py-5 text-base font-medium text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-12">
                    <label
                      htmlFor="supportCheckbox"
                      className="flex cursor-pointer select-none text-dark-text hover:text-primary"
                    >
                      <div className="relative">
                        <input
                          type="checkbox"
                          id="supportCheckbox"
                          className="sr-only"
                        />
                        <div className="box mr-4 mt-1 flex h-5 w-5 items-center justify-center rounded border dark:border-[#414652]">
                          <span className="opacity-0">
                            <svg
                              width="11"
                              height="8"
                              viewBox="0 0 11 8"
                              fill="none"
                              className="stroke-current"
                            >
                              <path
                                d="M10.0915 0.951972L10.0867 0.946075L10.0813 0.940568C9.90076 0.753564 9.61034 0.753146 9.42927 0.939309L4.16201 6.22962L1.58507 3.63469C1.40401 3.44841 1.11351 3.44879 0.932892 3.63584C0.755703 3.81933 0.755703 4.10875 0.932892 4.29224L0.932878 4.29225L0.934851 4.29424L3.58046 6.95832C3.73676 7.11955 3.94983 7.2 4.1473 7.2C4.36196 7.2 4.55963 7.11773 4.71406 6.9584L10.0468 1.60234C10.2436 1.4199 10.2421 1.1339 10.0915 0.951972ZM4.2327 6.30081L4.2317 6.2998C4.23206 6.30015 4.23237 6.30049 4.23269 6.30082L4.2327 6.30081Z"
                                strokeWidth="0.4"
                              ></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                      I agree to the privacy policy and terms.
                    </label>
                  </div>
                </div>

                <div className="w-full px-4">
                  <button className="flex w-full items-center justify-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section id="cta" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <div
            className="wow fadeInUp relative overflow-hidden bg-cover bg-center py-[60px] px-10 drop-shadow-light dark:drop-shadow-none sm:px-[70px]"
            data-wow-delay=".2s"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-center bg-cover -z-10 opacity-10 dark:opacity-40 bg-noise-pattern"></div>
            <div className="absolute bottom-0 -translate-x-1/2 left-1/2 -z-10">
              <svg
                width="1215"
                height="259"
                viewBox="0 0 1215 259"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.6" filter="url(#filter0_f_63_363)">
                  <rect
                    x="450"
                    y="189"
                    width="315"
                    height="378"
                    fill="url(#paint0_linear_63_363)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_63_363"
                    x="0"
                    y="-261"
                    width="1215"
                    height="1278"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="225"
                      result="effect1_foregroundBlur_63_363"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_63_363"
                    x1="420.718"
                    y1="263.543"
                    x2="585.338"
                    y2="628.947"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ABBCFF" />
                    <stop offset="0.859375" stopColor="#4A6CF7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full px-4 lg:w-2/3">
                <div className="mx-auto mb-10 max-w-[550px] text-center lg:ml-0 lg:mb-0 lg:text-left">
                  <h2 className="mb-4 font-heading text-xl font-semibold leading-tight text-dark dark:text-white sm:text-[38px]">
                    Ready to launch a site that converts?
                  </h2>
                  <p className="text-base text-dark-text">
                    Tell us what you&apos;re building and we&apos;ll outline the
                    next steps.
                  </p>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/3">
                <div className="text-center lg:text-right">
                  <a
                    href="#support"
                    className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90"
                  >
                    {" "}
                    Start a Project{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
