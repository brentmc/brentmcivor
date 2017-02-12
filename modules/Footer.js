import React from 'react'


export default React.createClass({
  render() {
    return (
      <footer className="center">
        <p>© Copyright {new Date().getFullYear()} Brent McIvor</p>
      </footer>
    )
  }
})