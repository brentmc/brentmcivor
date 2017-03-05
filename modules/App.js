import React from 'react'
import { IndexLink } from 'react-router'
import Header from './Header'
import Footer from './Footer'

export default React.createClass({
  render() {
    return (
      <div>
        
        

        {/* add this */}
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})
