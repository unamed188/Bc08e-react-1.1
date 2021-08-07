import React, { Component } from "react";
import Computer from "./Computer";
import MainDesk from "./MainDesk";
import "./OanTuXi.css";
import Player from "./Player";

export default class BaiTapOanTuTi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="container">
          <Player />

          <MainDesk />
          
          <Computer />
        </div>
      </div>
    );
  }
}