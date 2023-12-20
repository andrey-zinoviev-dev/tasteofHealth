import Arrow from "./assets/ArrowRight.png";
import Logo from "./assets/title.png";

export default function Entry() {
  return (
    <section className='welcome'>
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
        <div className='welcome__text'>
          <p className='welcome__content-btns-p'>Taste of Health- это платформа, которая нацелена на полноценное изменение образа жизни и здоровья через подбор индивидуального плана питания и наблюдение за показателями здоровья пациента.</p>
          <p className='welcome__content-btns-p'>Вы меняете <span className='welcome__headline-span-black'>привычки питания и стиль жизни</span> к лучшему, чтобы повысить качество жизни и эффективнее достигать поставленных целей.</p>
        </div>
        <div className='welcome__headline-wrapper'>
          <h1 className='welcome__headline'>Дневник питания Taste of <span className='welcome__headline-span'>Health</span></h1>
          <button className='welcome__headline-wrapper-btn'>
            <p>Войти</p>
            <img src={Arrow}></img>
          </button>
        </div>
      </section>
  )
}