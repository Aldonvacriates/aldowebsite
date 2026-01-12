import { Link } from "react-router-dom";

export default function BlogDetails() {
  return (
    <section className="pt-[130px]">
      <div
        className="wow fadeInUp relative z-10 bg-cover bg-center bg-no-repeat py-20 lg:py-[120px]"
        data-wow-delay=".2s"
        style={{ backgroundImage: "url(/images/blog/image-2.jpg)" }}
      >
        <div
          className="absolute top-0 left-0 z-10 w-full h-full bg-center bg-cover opacity-20 mix-blend-overlay"
          style={{ backgroundImage: "url(/images/NoisePattern.svg)" }}
        ></div>
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[#EEF1FDEB] dark:bg-[#1D232DD9]"></div>
        <div className="px-4 xl:container">
          <div className="mx-auto max-w-[620px] text-center">
            <span className="title">INSIGHT</span>
            <h1 className="mb-8 font-heading text-3xl font-semibold text-dark dark:text-white md:text-[44px] md:leading-tight">
              Homepage framework that turns visitors into leads
            </h1>
            <div className="flex flex-wrap items-center justify-center -mx-5">
              <div className="flex items-center px-5">
                <div className="w-10 h-10 mr-4 rounded-full">
                  <img src="/images/blog/author.png" alt="author" className="w-full" />
                </div>
                <p className="text-base font-heading text-dark-text dark:text-white">Aldo Website Team</p>
              </div>
              <div className="flex items-center px-5">
                <span className="pr-3 text-dark-text dark:text-white">
                  <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current">
                    <path d="M15.5835 2.75H19.2502C19.4933 2.75 19.7264 2.84657 19.8983 3.01848C20.0703 3.19039 20.1668 3.42355 20.1668 3.66666V18.3333C20.1668 18.5764 20.0703 18.8096 19.8983 18.9815C19.7264 19.1534 19.4933 19.25 19.2502 19.25H2.75016C2.50705 19.25 2.27389 19.1534 2.10198 18.9815C1.93007 18.8096 1.8335 18.5764 1.8335 18.3333V3.66666C1.8335 3.42355 1.93007 3.19039 2.10198 3.01848C2.27389 2.84657 2.50705 2.75 2.75016 2.75H6.41683V0.916664H8.25016V2.75H13.7502V0.916664H15.5835V2.75ZM13.7502 4.58333H8.25016V6.41666H6.41683V4.58333H3.66683V8.25H18.3335V4.58333H15.5835V6.41666H13.7502V4.58333ZM18.3335 10.0833H3.66683V17.4167H18.3335V10.0833Z" />
                  </svg>
                </span>
                <p className="text-base font-heading text-dark-text dark:text-white">Oct 12, 2025</p>
              </div>
              <div className="flex items-center px-5">
                <span className="pr-3 text-dark-text dark:text-white">
                  <svg width="22" height="22" viewBox="0 0 22 22" className="fill-current">
                    <path d="M9.9912 1.925L19.0653 3.22209L20.3615 12.2971L11.9355 20.7231C11.7636 20.8949 11.5304 20.9915 11.2874 20.9915C11.0443 20.9915 10.8112 20.8949 10.6393 20.7231L1.56429 11.6481C1.39244 11.4762 1.2959 11.2431 1.2959 11C1.2959 10.7569 1.39244 10.5238 1.56429 10.3519L9.9912 1.925ZM10.6393 3.87017L3.50854 11L11.2874 18.7779L18.4172 11.6481L17.4455 4.84184L10.6393 3.87017ZM12.5826 9.70384C12.2387 9.35983 12.0456 8.8933 12.0457 8.40689C12.0457 8.16604 12.0932 7.92756 12.1854 7.70506C12.2776 7.48256 12.4127 7.2804 12.5831 7.11013C12.7534 6.93985 12.9556 6.8048 13.1782 6.71267C13.4007 6.62054 13.6392 6.57314 13.88 6.57318C14.3664 6.57327 14.8329 6.76658 15.1768 7.11059C15.5207 7.45459 15.7138 7.92112 15.7137 8.40754C15.7136 8.89395 15.5203 9.36041 15.1763 9.70429C14.8323 10.0482 14.3658 10.2413 13.8794 10.2412C13.393 10.2412 12.9265 10.0478 12.5826 9.70384Z" />
                  </svg>
                </span>
                <p className="text-base font-heading text-dark-text dark:text-white">Lead Gen</p>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/blog-grids"
              className="text-base font-heading text-dark-text hover:text-primary dark:text-white dark:hover:text-primary"
            >
              Back to case studies
            </Link>
          </div>
        </div>
      </div>

      <div className="px-4 pt-24 xl:container">
        <div className="border-b pb-20 dark:border-[#2E333D] lg:pb-[130px]">
          <div className="wow fadeInUp mx-auto max-w-[920px]" data-wow-delay=".2s">
            <p className="text-base mb-9 text-dark-text">
              Most service businesses lose leads because the first screen does not answer who the offer is for or what happens next. We build a hero section that states the promise, proves credibility,
              and gives one clear action.
            </p>
            <p className="mb-12 text-base text-dark-text">
              Below the fold, we layer in outcomes, process, and proof. Each section is designed to remove friction and keep visitors moving toward a call, a form submission, or a purchase.
            </p>
          </div>
          <div className="wow fadeInUp mx-auto mb-12 max-w-[1150px]" data-wow-delay=".2s">
            <img src="/images/blog/blog-details-2.jpg" alt="website layout example" className="w-full rounded" />
          </div>
          <div className="wow fadeInUp mx-auto max-w-[920px]" data-wow-delay=".2s">
            <div className="relative mx-auto max-w-[850px] pt-12 pb-20">
              <span className="absolute top-0 -translate-x-1/2 left-1/2">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M22.915 86.6049C17.765 81.1349 15 74.9999 15 65.0549C15 47.555 27.285 31.87 45.15 24.115L49.615 31.005C32.94 40.025 29.68 51.73 28.38 59.1099C31.065 57.7199 34.58 57.2349 38.025 57.5549C47.045 58.3899 54.155 65.7949 54.155 74.9999C54.155 79.6412 52.3113 84.0924 49.0294 87.3743C45.7475 90.6562 41.2963 92.4999 36.655 92.4999C31.29 92.4999 26.16 90.0499 22.915 86.6049ZM72.915 86.6049C67.765 81.1349 65 74.9999 65 65.0549C65 47.555 77.285 31.87 95.15 24.115L99.615 31.005C82.94 40.025 79.68 51.73 78.38 59.1099C81.065 57.7199 84.58 57.2349 88.025 57.5549C97.045 58.3899 104.155 65.7949 104.155 74.9999C104.155 79.6412 102.311 84.0924 99.0294 87.3743C95.7475 90.6562 91.2963 92.4999 86.655 92.4999C81.29 92.4999 76.16 90.0499 72.915 86.6049Z"
                    fill="white"
                    fillOpacity="0.08"
                  />
                </svg>
              </span>
              <p className="mb-5 text-lg text-center font-heading text-dark-text">
                Clarity beats cleverness. If your visitor has to guess, they leave.
              </p>
              <p className="text-base text-center font-heading text-dark-text">Aldo Website LLC</p>
            </div>
            <p className="text-base mb-9 text-dark-text">
              After launch, we connect analytics and watch how visitors move through the page. That data informs quick tweaks that increase conversion without a full redesign.
            </p>
            <p className="mb-20 text-base text-dark-text">
              If you want a homepage that drives results, tell us about your goals and we will map the next steps.
            </p>
          </div>

          <div className="wow fadeInUp mx-auto max-w-[920px]" data-wow-delay=".2s">
            <h3 className="mb-14 font-heading text-3xl font-medium text-dark dark:text-white md:text-[40px]">Start a project</h3>
            <form>
              <div className="flex flex-wrap -mx-4">
                <div className="w-full px-4 sm:w-1/3">
                  <div className="mb-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Full name"
                      className="w-full border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/3">
                  <div className="mb-12">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email address"
                      className="w-full border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>
                <div className="w-full px-4 sm:w-1/3">
                  <div className="mb-12">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      placeholder="Company or brand"
                      className="w-full border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    />
                  </div>
                </div>

                <div className="w-full px-4">
                  <div className="mb-10">
                    <textarea
                      rows="4"
                      name="message"
                      id="message"
                      placeholder="Tell us about your goals, timeline, and budget range"
                      className="w-full resize-none border-b bg-transparent py-5 text-base text-dark placeholder-dark-text outline-none focus:border-primary dark:border-[#2C3443] dark:text-white dark:focus:border-white"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full px-4">
                  <button className="inline-flex items-center rounded bg-primary py-[14px] px-8 font-heading text-base text-white hover:bg-opacity-90">
                    Request a consultation
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
