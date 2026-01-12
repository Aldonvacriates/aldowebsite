import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="wow fadeInUp pt-[120px] lg:pt-[240px]" data-wow-delay=".2s">
      <div className="px-4 xl:container">
        <div className="border-b pb-20 dark:border-[#2E333D] lg:pb-[130px]">
          <div className="relative mx-auto max-w-[550px] pt-6 text-center md:pt-8">
            <span className="title"> ERROR </span>
            <h1 className="mb-8 font-heading text-[100px] font-semibold leading-none text-dark dark:text-white md:text-[170px] md:leading-none">404</h1>
            <h2 className="mb-5 text-3xl font-medium font-heading text-dark dark:text-white md:text-4xl">Sorry, the page cannot be found</h2>
            <p className="mx-auto mb-10 max-w-[515px] text-base text-dark-text">
              The page you are looking for might have moved or no longer exists.
            </p>
            <Link to="/" className="inline-flex items-center justify-center rounded bg-primary py-[14px] px-8 text-sm font-semibold text-white">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
