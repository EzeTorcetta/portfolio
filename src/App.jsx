import './App.css'
import { useState } from 'react';


function App() {

  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
      setMenu( !menu )
  }
  

  return (
    <div>
      <nav className='nav'>

        <h3>Ezequiel Torcetta</h3>

        <button onClick={toggleMenu} className='nav-button'>
          <img src="toggle.png" alt="" />
        </button>

        <ul className={ `ul-nav ${ menu ? 'isActive' : '' }` }>
          <li><a href='#home'>Home</a> </li>
          <li><a href='#about'>About</a></li>
          <li><a href='"proyects'>Proyects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

      </nav>
      <section id='home' className='home'>
        <div className='homeContainer'>
          <img src="perfil2.png" alt="none" />
          <div className='homeContent'>
            <h1>Full-Stack Developer</h1>
            <p>Hi, I'm Ezequiel Torcetta. A passionate Full-Stack Developer and Industrial Engineering student from Buenos Aires, Argentina 📍</p>
            <div className='homeContent-links'>
              <a href="https://github.com/EzeTorcetta">
                <img src="github.png" alt="none" />
              </a>
              <a href="https://www.linkedin.com/in/ezetorcetta/">
                <img src="linkedin.png" alt="none" />
              </a>
            </div>
            <div className='skillsContainer'>
              <p>Stack</p>
              <ul>
                <li>
                  <img src="js.png" alt="" />
                </li>
                <li>
                  <img src="html-5.png" alt="" />
                </li>
                <li>
                  <img src="css-3.png" alt="" />
                </li>
                <li>
                  <img src="node.png" alt="" />
                </li>
                <li>
                  <img src="redux.png" alt="" />
                </li>
                <li>
                  <img src="react.png" alt="" />
                </li>
                <li>
                  <img src="postgres.png" alt="" />
                </li>
                <li>
                  <img src="https://static-00.iconduck.com/assets.00/file-type-sequelize-icon-443x512-ck0z81j3.png" alt="" />
                </li>
              </ul>

            </div>
          </div>
        </div>
      </section>

      <section id='about' className='about'>
        <img src="about.jpg" alt="aboutimg" />
        <div className='about-text'>
          <h2>About me</h2>
          <br />
          <p>My goal is to contribute my technical and creative skills to help build innovative products and effective solutions.</p>
          <p> I'm always willing to accept new challenges and explore the latest trends in the world of development, eager to work in teams and meet new people.
            My desire to learn and make a mark in the company that I work for drive me to constantly grow.</p>
          <p> I'm ready for the next exciting challenge that comes my way!</p>
        </div>
      </section>


      <section id='proyects' className='proyects'>

      </section>


      <section id='contact' className='contact'></section>
      <footer>Ln Github</footer>
    </div>
  )
}

export default App
