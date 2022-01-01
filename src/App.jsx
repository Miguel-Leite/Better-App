import './App.css';
import 'font-awesome/css/font-awesome.css';
import svgHeader from './svg-header.svg'
import { Menu } from './components/Navbars';
import { NavLink } from 'react-router-dom';
import { CourseItem } from './components/CourseItem';

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

      <div className='container'>
        <main className='__main'>
            <div className='__main-content'>
              <h3>100's of Courses</h3>
              <h6>Class aptent taciti sociosqui ad litora torquint por comubia nostra</h6>
              <p>
                in ea fugit consectetur reiciendis dolor sit, amet 
                consectetur adipisicing elit. Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa. Eligendi 
                blanditiis sapiente pariatur? Earum!
              </p>
            </div>
            <div className='__courses'>
              <CourseItem />
            </div>
        </main>
      </div>
    </div>
  )
}

export default App;
