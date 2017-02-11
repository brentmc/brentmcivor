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
        <ul role="nav">
        	<li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
					<li><NavLink to="/repos" activeClassName="active">Repos</NavLink></li>
        </ul>

        {/* add this */}
        {this.props.children}
        <Footer/>
      </div>
    )
  }
})
