import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl  mx-auto mt-24 flex items-center flex-col">
      <header className="mb-16">
        <h1 className="text-4xl font-bold">MJ Grzymek</h1>
      </header>

      <section className="mb-12 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Socials</h2>
        <div className="flex gap-8 flex-wrap">
          <a
            href="https://github.com/mjgrzymek"
            target="_blank"
            rel="noopener"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pb-1 px-3 pt-3 rounded-lg flex flex-col items-center gap-1"
          >
            <svg
              width="98"
              height="96"
              viewBox="0 0 98 96"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 hidden dark:block"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#fff"
              />
            </svg>
            <svg
              width="98"
              height="96"
              viewBox="0 0 98 96"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:hidden h-16 w-16"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#24292f"
              />
            </svg>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/michal-grzymek/"
            target="_blank"
            rel="noopener"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pb-1 px-3 pt-3 rounded-lg flex flex-col items-center gap-1"
          >
            <Image
              src="/LI-In-Bug.png"
              alt="LinkedIn logo"
              width={635}
              height={540}
              className="h-16 w-fit dark:hidden"
            />
            <Image
              src="/InBug-White.png"
              alt="LinkedIn logo"
              width={635}
              height={540}
              className="h-16 w-fit hidden dark:block"
            />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://x.com/MJGrzymek"
            target="_blank"
            rel="noopener"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pb-1 px-3 pt-3 rounded-lg flex flex-col items-center gap-1"
          >
            <svg
              width="1200"
              height="1227"
              viewBox="0 0 1200 1227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 hidden dark:block"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="white"
              />
            </svg>
            <svg
              width="1200"
              height="1227"
              viewBox="0 0 1200 1227"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 dark:hidden"
            >
              <path
                d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
                fill="black"
              />
            </svg>
            <span>X.com</span>
          </a>
        </div>
      </section>
      <section className=" flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-2">Things</h2>
        <div className="flex gap-8 flex-wrap">
          <a
            href="https://blog.mjgrzymek.com"
            target="_blank"
            rel="noopener"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pb-1 px-3 pt-3 rounded-lg flex flex-col items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
              />
            </svg>
            <span>Blog</span>
          </a>

          <a
            href="https://peanoscript.mjgrzymek.com"
            target="_blank"
            rel="noopener"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pb-1 px-3 pt-3 rounded-lg flex flex-col items-center gap-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-16"
            >
              <rect width="32" height="32" fill="#8ACE00" rx="4" ry="4" />
              <text
                fontFamily="Arial, sans-serif"
                fontSize="18"
                fontWeight="bold"
                fill="black"
                textAnchor="start"
                x="7"
                y="30"
              >
                PS
              </text>
            </svg>
            <span>PeanoScript</span>
          </a>
          <a
            href="https://lambdaplayground.mjgrzymek.com"
            target="_blank"
            rel="noopener"
            className="hover:bg-neutral-200 dark:hover:bg-neutral-800 pb-1 px-3 pt-3 rounded-lg flex flex-col items-center gap-1"
          >
            {/* <Image
              src="/lambda-logo.png"
              alt="Lambda logo"
              width={796}
              height={724}
              className="h-16 w-fit"
            /> */}
            <span className="h-16 w-fit text-7xl">λ</span>
            <span>Lambda Playground</span>
          </a>
        </div>
      </section>
    </main>
  );
}
