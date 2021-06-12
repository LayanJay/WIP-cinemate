import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
      {/* bg-[#001220] */}
      <div className="bg-[#001220] min-h-screen text-white">
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
