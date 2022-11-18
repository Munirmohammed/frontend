import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({ childen }) => {
  return (
    <>
      <Header />
      <div style={{ minHeight: '80vh' }} className="--pad">
        {childen}
      </div>
      <Footer />
    </>
  )
}

export default Layout
