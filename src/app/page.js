import Image from "next/image";

import marketing from "../assets/images/marketing.png";

export default function Homepage() {
  return (
    <main>
      <div class="container relative">
        <div class="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
          <div class="md:col-span-7">
            <div class="md:me-6">
              <span class="text-indigo-600 font-medium">
                Techwind Marketing
              </span>
              <h4 class="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5">
                Increase Your Business <br /> With Techwind
              </h4>
              <p class="text-slate-400 text-lg max-w-xl">
                Launch your campaign and benefit from our expertise on designing
                and managing conversion centered Tailwind CSS v3.x html page.
              </p>

              <div class="subcribe-form mt-6 mb-3">
                <form class="relative max-w-xl">
                  <input
                    type="email"
                    id="subcribe"
                    name="email"
                    class="py-4 pe-40 ps-6 w-full h-[50px] outline-none text-black dark:text-white rounded-full bg-white dark:bg-slate-900 shadow dark:shadow-gray-800"
                    placeholder="Your Email Address :"
                  />
                  <button
                    type="submit"
                    class="py-2 px-5 inline-block font-semibold tracking-wide align-middle duration-500 text-base text-center absolute top-[2px] end-[3px] h-[46px] bg-indigo-600 hover:bg-indigo-700 border border-indigo-600 hover:border-indigo-700 text-white rounded-full"
                  >
                    Try it for free <i class="uil uil-arrow-right"></i>
                  </button>
                </form>
              </div>

              <span class="text-slate-400 font-medium">
                Looking for help?{" "}
                <a href="" class="text-indigo-600">
                  Get in touch with us
                </a>
              </span>
            </div>
          </div>

          <div class="md:col-span-5">
            <div class="relative">
              <Image
                src={marketing}
                alt="Picture of the author"
                width={500}
                height={500}
              />
              {/* <img src="assets/images/marketing.png" alt=""> */}
              <div class="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                <a
                  href="#!"
                  data-type="youtube"
                  data-id="S_CGed6E610"
                  class="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-indigo-600 dark:text-white"
                >
                  <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
