import React, { Component } from "react";
import { connect } from 'react-redux'

class Computer extends Component {
  render() {

    let keyframe = `@keyframes mymove${Date.now()} {
      0% {top: 150px;}
      25% {top: -150px;}
      50% {top: 150px;}
      75% {top: -150px;}
      100% {top: 0;}
    }`
    return (
      <div className="computer">
        <style>
          {keyframe}
        </style>
        <div className="computer__selected">
          <img style={{
            position: 'absolute',
            animation:`mymove${Date.now()} 1.2s`
          }} src={this.props.computer.img} alt="..."/>
        </div>
        <div className="speech-bubble"></div>
        <img
          src="./img/BaoBuaKeo/playerComputer.png"
          alt="..."
          className="character_img"
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    computer: state.baoBuaKeoReducer.computer
  }
}


export default connect (mapStateToProps)(Computer)