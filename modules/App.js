import React from 'react'
import { IndexLink } from 'react-router'
import NavLink from './NavLink'
import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div>
        <Header/>
        

        {/* add this */}
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})
