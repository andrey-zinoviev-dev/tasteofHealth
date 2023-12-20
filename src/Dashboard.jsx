import React from "react";

export default function Dashboard() {
  return (
    <section>
      <ul>
        <li>
          Выпито <span>0.5L</span>/<span>3L</span>
        </li>
        <li>
          Потреблено <span>1740 kcal</span>/<span>2100 kcal</span>
        </li>
        <li>Нужно еще поесть <span>2</span> раза</li>
        <li>
          <p>Белки в день- <span>30</span>гр</p>
          <p>Жиры в день- <span>19</span>гр</p>
          <p>Углеводы в день- <span>5</span>гр</p>
        </li>
      </ul>
    </section>
  )
}