import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#ecf1f9] rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-black sm:text-center">Made By <a href="/" className="hover:underline">Abdul Salaam Danish</a></span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Home</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">Features</a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="#" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer