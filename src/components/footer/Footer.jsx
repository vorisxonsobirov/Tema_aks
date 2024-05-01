import React from 'react'
import "./footer.css"
import imgMan from "../assets/0002edit- (2) (2) 2.png"
import img_tema from "../assets/temaaks.png"
import iconInfooter1 from "../assets/Link - kick.png"
import iconInfooter2 from "../assets/Link - telegram (1).png"
import iconInfooter3 from "../assets/Link - telegram.png"



const Footer = () => {
    return (
        <>
            <div className="container">
                <div className="footer">
                    <div className="holder_img">
                        <img src={imgMan} alt="" />
                        <img src={img_tema} alt="" />
                    </div>
                    <div className="holder_img">
                        <p>Главная</p>
                        <p>Лайв стрим</p>
                        <p>Задания за баллы</p>
                        <p>Игры</p>
                    </div>
                    <div className="holder_img">
                        <p>Наши партнеры</p>
                        <p>Магазин</p>
                        <p>Статистика</p>
                        <p>Правила</p>
                    </div>
                    <div className="holder_img">
                        <p>Новые  новости</p>
                        <p>Прошлые стримы</p>
                    </div>
                    <div className="holder_icon">
                        <h1>соцсети</h1>
                        <img src={iconInfooter1} alt="" />
                        <img src={iconInfooter2} alt="" />
                        <img src={iconInfooter3} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
