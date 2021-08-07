import React, { Component } from "react";
import { connect } from "react-redux";

class Player extends Component {
  render() {
    return (
      <div className="player">
        <div className="player__img">
          <div className="player__selected">
            <img
              src={
                this.props.arrSelector.find((item) => item.select === true).img
              }
              alt="..."
            />
          </div>
          <div className="speech-bubble"></div>
          <img
            src="./img/BaoBuaKeo/player.png"
            alt="..."
            className="character__img"
          />
        </div>
        <div className="player__selector">
          {this.props.arrSelector.map((item, index) => {
            //Xét giá trị cược thêm viền cho item được chọn

            let border = {};
            if (item.select) {
              border = { border: "3px solid orange" };
            }

            return (
              <button
                className="selector__item"
                style={border}
                onClick={() => {
                    this.props.selected(item.id);
                }}
              >
                <img src={item.img} alt="..." />
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    arrSelector: state.baoBuaKeoReducer.arrSelector,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        selected: (selectID) => {
           dispatch({
               type: 'ROCK_PAPER_SCISSOR',
               selectID
           })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);