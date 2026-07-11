import React from 'react'

const Navbar = () => {
  const links = ['Home', 'Products', 'About', 'Contact']

  return (
    <header className='sticky top-0 z-10 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur'>
      <div className='mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6'>
        <div className='flex items-center gap-3'>
          <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 font-bold text-white shadow-md'>
            E
          </div>
          <div>
            <h1 className='text-lg font-semibold text-gray-900'>ElectroHub</h1>
            <p className='text-sm text-gray-500'>Smart gadgets</p>
          </div>
        </div>

        <nav className='hidden items-center gap-6 text-sm font-medium text-gray-600 md:flex'>
          {links.map((link) => (
            <a
              key={link}
              href='#'
              className='transition hover:text-purple-600'
            >
              {link}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <label className='hidden items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-500 md:flex'>
            <span className='mr-2'>🔍</span>
            <input
              type='text'
              placeholder='Search'
              className='w-24 bg-transparent outline-none'
            />
          </label>
          <button className='rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-purple-600'>
            Cart 🛒
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
