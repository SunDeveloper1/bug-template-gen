import React from 'react'
import Link from "next/link"
function BugIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m8 2 1.88 1.88" />
        <path d="M14.12 3.88 16 2" />
        <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
        <path
          d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
        <path d="M12 20v-9" />
        <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
        <path d="M6 13H2" />
        <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
        <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
        <path d="M22 13h-4" />
        <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
      </svg>)
    );
}


function LandingPage() {
  return (
    <div>
        <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <BugIcon className="h-6 w-6" />
          <h1 className=" font-bold tracking-tighter ml-5">
                Bug Template Generator
              </h1>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/pricing">
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#">
            Testimonials
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/contact">
            Contact
          </Link>
        </nav>
        </header>
        <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div
            className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Streamline Your Bug Tracking with Custom Templates
              </h1>
              <p
                className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Easily create and customize bug report templates to improve your team's efficiency and consistency.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="/template">
                  Get Started
                </Link>
              </div>
            </div>
            <img
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-first lg:aspect-square"
              height="550"
              src="/BugHome.jpg"
              width="550"/>
          </div>
         
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div
                  className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Bug Tracking</h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our bug template generator helps you create customizable templates to improve consistency and save
                  time.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Customizable Templates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Easily create and customize bug report templates to fit your team's needs.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Easy Integration</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Seamlessly integrate our bug template generator with your existing bug tracking tools.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Time-Saving</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Reduce the time spent on creating and formatting bug reports with our templates.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Consistent Reporting</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ensure your team provides high-quality, consistent bug reports every time.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Centralized Management</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Manage all your bug report templates in one place, making it easy to update and share.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Improved Productivity</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Streamline your bug tracking process and focus on resolving issues instead of formatting reports.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
              <p
                className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Hear from our satisfied customers about how our bug template generator has improved their workflow.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div
                className="grid w-full grid-cols-1 items-stretch justify-center divide-y md:grid-cols-2 md:divide-y-0 md:divide-x">
                <div
                  className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="64"
                    src="/people/raj.jpg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64" />
                  <div className="space-y-2 text-center">
                    <h4 className="text-lg font-bold">Raj Kumar Singh</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "The bug template generator has been a game-changer for\n our team. It's saved us so much time and
                      helped us\n maintain consistent reporting."
                    </p>
                  </div>
                </div>
                <div
                  className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="64"
                    src="/people/prabhat.jpg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64" />
                  <div className="space-y-2 text-center">
                    <h4 className="text-lg font-bold">Prabhat Kumar</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Project Manager</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "I love how easy it is to customize the bug report\n templates. It's helped us streamline our
                      entire bug\n tracking process."
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="grid w-full grid-cols-1 items-stretch justify-center divide-y md:grid-cols-2 md:divide-y-0 md:divide-x">
                <div
                  className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="64"
                    src="/people/apurva.jpg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64" />
                  <div className="space-y-2 text-center">
                    <h4 className="text-lg font-bold">Apurva Vats</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">QA Engineer</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "The bug template generator has been a lifesaver for our\n QA team. It's helped us provide more
                      detailed and\n consistent bug reports."
                    </p>
                  </div>
                </div>
                <div
                  className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="64"
                    src="/people/virender.jpg"
                    style={{
                      aspectRatio: "64/64",
                      objectFit: "cover",
                    }}
                    width="64" />
                  <div className="space-y-2 text-center">
                    <h4 className="text-lg font-bold">Virender Kumar</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Engineering Manager</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      "Our team has been using the bug template generator for\n months, and it's been a game-changer.
                      Highly\n recommended!"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Bug Template Generator. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
         </div>


    </div>
  )
}

export default LandingPage