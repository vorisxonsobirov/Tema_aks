import React from 'react'
import './style.css'
import { FaGamepad } from "react-icons/fa";
import { PiBroadcastFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { RiExpandLeftLine } from "react-icons/ri";

const NavigateBar = () => {
  return (
    <div className='Bar'>
        <div className="bar_head">
        <RiExpandLeftLine />
        </div>
      <ul>
        <li><PiBroadcastFill/> Лайф стрим</li>
        <li>Задание за баллы<select name="" id=""></select></li>
        <li><FaGamepad/> Игры</li>
        <li><FaUserFriends/> Наши партнёры</li>
        <li><FaShoppingBag/> Магазин</li>
        <li><ImStatsBars/> Сатистика</li>
        <li>Новые выидео и новости</li>
        <li>Просшлы стримы</li>
        <li>Правила</li>
      </ul>
    </div>
  )
}

export default NavigateBar
