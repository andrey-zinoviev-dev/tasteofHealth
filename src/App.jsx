// import { useState } from 'react'
import './App.css';
import Lavender from "./assets/lavender.png";
import Logo from "./assets/Health-logo.png";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <section className='welcome'>
        <div className='welcome__content'>
          <img className='welcome__logo' src={Logo}></img>
          <h1 className='welcome__headline'>Дневник питания Taste of <span className='welcome__headline-span'>Health</span></h1>
          <div className='welcome__content-btns'>
            
            <button className='welcome__content-btns-button'>&rarr;</button>
            <p className='welcome__content-btns-p'>Войти</p>
            {/* <button>Регистрация</button> */}
          </div>
        </div>
        {/* <img className='welcome__img' src='https://img.freepik.com/premium-photo/blue-black-background-with-words-word-it_889056-15254.jpg'></img> */}
        <img className='welcome__img' src={Lavender}></img>
      </section>
    </>
  )
}

export default App
