import React from 'react'
import Link from "next/link"

 function Catalog() {
  return (
    
    <main className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Templates</h1>
          <p
            className="max-w-[700px] mx-auto mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
            Browse our collection of pre-built templates to kickstart your next project.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="template/classic">
            <img
              alt="Template 1"
              className="w-full h-56 object-fill"
              height={500}
              src="/templates/classic.png"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Classic 
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A clean and modern template.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 2"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Blog
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A responsive blog template with a clean design.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 3"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  E-commerce
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A modern e-commerce template with a sleek design.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 4"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Dashboard
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A feature-rich dashboard template for your app.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 5"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Portfolio
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A clean and modern portfolio template.</p>
            </div>
          </Link>
          <Link
            className="block bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl focus-within:scale-[1.02] focus-within:shadow-xl"
            href="#">
            <img
              alt="Template 6"
              className="w-full h-56 object-cover"
              height={500}
              src="/placeholder.svg"
              style={{
                aspectRatio: "600/500",
                objectFit: "cover",
              }}
              width={600} />
            <div className="p-6 space-y-3">
              <h3 className="text-lg font-semibold">
                <Link className="hover:underline" href="#">
                  Documentation
                </Link>
              </h3>
              <p className="text-gray-500 dark:text-gray-400">A comprehensive documentation template.</p>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}


export default Catalog
