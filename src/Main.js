import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar user={this.props.user}/>
        <Chat user={this.props.user}/>
      </div>
    )
  }
}

const styles= {
    display:'flex';

}
export default Main