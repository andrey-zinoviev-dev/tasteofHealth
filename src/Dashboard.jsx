import React from "react";
import Diagram from "./assets/diagram.jpg"
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard__head-wrapper">
        <div className="dashboard__head-wrapper-text">
          <h2>Панель контроля питания</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, iste pariatur et dolores iusto hic alias magnam nobis ratione illum, dignissimos quia quibusdam deleniti suscipit, dolore architecto laudantium officiis perferendis!</p>
        </div>
        <div>
          <p>Тут график веса будет</p>
        </div>
        {/* <img className="dashboard__head-wrapper-img" src={Diagram} /> */}
      </div>
      <ul className="dashboard__ul">
        <li>
          <div>
            <span>Вода сегодня</span>
            <p><span>0.5L</span>/3L</p>
          </div>
          <div>
            <span>Каллории в день</span>
            <p><span>1740</span>/2100 kcal</p>
          </div>

        </li>
        <li id="stats__bento">
          <div>
            <span>Разы приема пищи</span>
            <p><span>2</span>раза</p>
          </div>
          <div>
              <p>Б в день- <span>30</span>гр</p>
              <p>Ж в день- <span>19</span>гр</p>
              <p>У в день- <span>5</span>гр</p>
          </div>
          <div>
            <p>Еще текст</p>
          </div>
        </li>
        {/* <li>
          <p>Нужно еще поесть <span>2</span> раза</p>
          <div>
            <p>Белки в день- <span>30</span>гр</p>
            <p>Жиры в день- <span>19</span>гр</p>
            <p>Углеводы в день- <span>5</span>гр</p>
          </div>
        </li> */}
        {/* <li>
          <p>Белки в день- <span>30</span>гр</p>
          <p>Жиры в день- <span>19</span>гр</p>
          <p>Углеводы в день- <span>5</span>гр</p>
        </li> */}
      </ul>
    </section>
  )
}