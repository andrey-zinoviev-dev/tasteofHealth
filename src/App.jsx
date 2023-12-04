// import { useState } from 'react'
import './App.css';
import Lavender from "./assets/BgLav.png";
import Logo from "./assets/Health-logo.png";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className='welcome'>
        <div className='welcome__content'>
          <header className='header'>
            <img className='welcome__logo' src={Logo}></img>
            <nav>
              <ul className='header__ul'>
                <li>
                  <button>Заказать консультацию</button>
                </li>
                <li>
                  <button>Связаться со специалистом</button>
                </li>
              </ul>
            </nav>
          </header>
          <h1 className='welcome__headline'>Дневник питания Taste of <span className='welcome__headline-span'>Health</span></h1>
          <div className='welcome__content-btns'>
            <div>
              <button className='welcome__content-btns-button'>&rarr;</button>
              <p >Войти</p>
            </div>
            <p className='welcome__content-btns-p'>Вы меняете <span className='welcome__headline-span-black'>привычки питания и стиль жизни</span> к лучшему, чтобы повысить качество жизни и эффективнее достигать поставленных целей</p>
            {/* <button>Регистрация</button> */}
          </div>
        </div>
        {/* <img className='welcome__img' src='https://img.freepik.com/premium-photo/blue-black-background-with-words-word-it_889056-15254.jpg'></img> */}
        <img className='welcome__img' src={Lavender}></img>
        {/* <footer>
          <div></div>
          <ul></ul>
        </footer> */}
      </section>
    </>
  )
}

export default App
