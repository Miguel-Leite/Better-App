import './App.css';
import svgHeader from './svg-header.svg'
import { Menu } from './components/Navbars';
import { NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <header className='__header-app'>
        <Menu />
        <div className='__container'>
          <div className='__content'>
            <h3>A better way to learn to
              code websites, apps, and games
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Excepturi commodi omnis in ea fugit consectetur reiciendis
              Eligendi blanditiis sapiente pariatur? Earum!
            </p> <br />
            <NavLink to='/' className='__btn __btn-header'> View All Courses </NavLink>
          </div>
          <div className='__image'>
            <img src={svgHeader}></img>
          </div>
        </div>
      </header>
    </div>
  )
}

export default App;
