import React, { Component } from 'react'
import XucXac from './XucXac'
import KetQuaTroChoi from './KetQuaTroChoi'
import './BaiTapGameXucXac.css'; //Ảnh hưởng toàn bộ ứng dụng kể cả app.js

// import hinh from '../../assets/gameXucXac/1.png'

export default class BaiTapGameXucXac extends Component {
    render() {
        return (
            <div className="bg-game">
                <h3 className="text-center mt-5 display-4">Bài tập game xúc xắc</h3>
               
                <XucXac />
                <KetQuaTroChoi />
            </div>
        )
    }
}
