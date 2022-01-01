import './App.css';
import 'font-awesome/css/font-awesome.css';
import svgHeader from './svg-header.svg'
import Book from './Book.svg'
import { Menu } from './components/Navbars';
import { NavLink } from 'react-router-dom';
import { Card } from './components/Cards';

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

      <div className='__container'>
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
              </p> <br /> <br /> 

              <NavLink to='/' className='__btn __btn-course'> View All Courses </NavLink>
            </div>
            <div className='__courses'>
              <div className='__grid'>
                <Card title='Web Development' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='Python' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='React js' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='Javascript' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='PHP' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='Laravel' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='Django' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />

                <Card title='Docker' content='Excepturi commodi omnis 
                in ea fugit consectetur reiciendis hic nam sapiente, 
                numquam consequatur libero qui obcaecati ipsa.' />
              </div>
            </div>
        </main>
      </div>
      <section className='__easy'>
          <div className='__container'>
            <div className='__easy-inner'>
              <div className='__image'>
                <img src={Book} />
              </div>
              <div className='__content'>
                <h2> Easy As 1...2...3... </h2>
                <p>
                  in ea fugit consectetur reiciendis dolor sit, amet 
                  consectetur adipisicing elit. Excepturi commodi omnis 
                  in ea fugit consectetur reiciendis hic nam sapiente, 
                  numquam consequatur libero qui obcaecati ipsa. Eligendi 
                  blanditiis sapiente pariatur? Earum!
                </p> <br />
                <NavLink to='/' className='__btn __btn-easy'> START A FREE TRIAL <i className="fa fa-arrow-right" aria-hidden="true"></i> </NavLink>
              </div>
            </div>
          </div>
        </section>
        <div className='__container'>
          <div className='__services'>
              <Card title='Free Courses' classTitle='__title-service' shadow={true} content='in ea fugit consectetur reiciendis dolor sit, amet 
                  consectetur adipisicing elit. Excepturi commodi omnis 
                  in ea fugit consectetu obcaecati ipsa. Eligendi 
                  blanditiis sapiente pariatur? Earum!r' />

              <Card title='Premium Courses' classTitle='__title-service' shadow={true} content='in ea fugit consectetur reiciendis dolor sit, amet 
                  consectetur adipisicing elit. Excepturi commodi omnis 
                  in ea fugit consectetur obcaecati ipsa. Eligendi 
                  blanditiis sapiente pariatur? Earum!' />
          </div>

          <div className='__option'>
            <div className='__question'>
              <h2></h2>
            </div>
          </div>

        </div>
        
    </div>
  )
}

export default App;
