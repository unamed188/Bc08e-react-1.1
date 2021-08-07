import React, { Component } from "react";
import { connect } from "react-redux";

class MainDesk extends Component {
  render() {
    return (
      <div className="main__desk">
        <div className="dialog">{this.props.result}</div>
        <div className="info">
          <h3>
            Số bàn thắng: <span className="text-warning">{this.props.roundYouWon}</span>
          </h3>
          <h3>
            Số bàn chơi: <span className="text-warning">{this.props.roundYouPlayed}</span>
          </h3>
          <button className="btn btn-success" onClick={()=>{
              this.props.playGame()
          }}>Play Game</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.baoBuaKeoReducer.result,
    roundYouWon: state.baoBuaKeoReducer.roundYouWon,
    roundYouPlayed: state.baoBuaKeoReducer.roundYouPlayed,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {

            let count = 0;
            //Khai báo hàm lặp đi lặp lại
            let loopRandom = setInterval(()=>{
                dispatch({
                    type: 'RANDOM'
                })
                count ++;
                if (count > 20) {
                    clearInterval(loopRandom)

                    dispatch({
                        type: 'END_GAME',
                    })
                }
            },100)
           
        }
    }
}




 export default connect (mapStateToProps, mapDispatchToProps) (MainDesk)