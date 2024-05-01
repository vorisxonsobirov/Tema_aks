import React, { useState } from "react";
import "./style.css";
import imgLogo from "../assets/0002edit- (2) (2) 2.png";
import { FaGamepad } from "react-icons/fa";
import { PiBroadcastFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { ImStatsBars } from "react-icons/im";
import { RiExpandLeftLine } from "react-icons/ri";

const NavigateBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`Bar ${isExpanded ? "" : "collapsed"}`}>
      <div className="bar_head">
        <img src={imgLogo} alt="" />
        <RiExpandLeftLine className="closeBar" onClick={toggleExpand} />
      </div>
      <ul>
        
          <>
            <li>
              <PiBroadcastFill /> <div id="navigateText">Лайф стрим</div> 
            </li>
            <li>Задание за баллы<select name="" id=""></select></li>
            <li>
              <FaGamepad /> <div id="navigateText">Игры</div>
            </li>
            <li>
              <FaUserFriends /> <div id="navigateText">Наши партнёры</div>
            </li>
            <li>
              <FaShoppingBag /> <div id="navigateText">Магазин</div> 
            </li>
            <li>
              <ImStatsBars /> <div id="navigateText">Статистика</div>
            </li>
            <li>Новые видео и новости</li>
            <li>Прошлые стримы</li>
            <li>Правила</li>
          </>
       
      </ul>
    </div>
  );
};

export default NavigateBar;
