import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='mainfooter'>
          <div className='firstfooter'>
                <h2>Laxmi Devi Institute of </h2>
                <h2>Engineering & Technology</h2>
              <p>
                <br />
                "Alwar-Tijara-Delhi Highway"
                <br/>
                "Chikani, Alwar, Rajasthan"
                <br />
                "India - 301028"
              </p>
              <span ><h4>+91-7073477274</h4></span>
              <span ><h4>+91-9829103101</h4></span>
              <a href="">director@lietalwar.org</a>
          </div>
          <div className='secondfooter'>
                <h2>Quick Links</h2>
                <div style={{height:'1px',width:'300px',backgroundColor:'lightgreen'}}></div>
                <br />
                 <a href="">About Us</a>
                 <br />
                 <br />
                 <a href="">Amissions</a>
                 <br />
                 <br />
                 <a href="">Apply @ LIET</a>
                 <br />
                 <br />
                 <a href="">Boar of management</a>
                 <br />
                 <br />
                 <a href="">Grievance Reressal</a>
          </div>
          <div className='thirdfooter'>
              <h2>Courses</h2>
              <div style={{height:'1px',width:'300px',backgroundColor:'lightgreen'}}></div> 
              <br />          
                <a href="">B.Tech</a>
                <br />
                <br />
                <a href="">M.Tech</a>
                <br />
                <br />
                <a href="">MBA</a>
                <br />
                <br />
                <a href="">Polytechnic</a>
          </div>
          <div className='fourthfooter'>
              <h2>External Links</h2>
              <div style={{height:'1px',width:'300px',backgroundColor:'lightgreen'}}></div>
              <br />
              <a href="">AICTE</a>
              <br />
              <br />
              <a href="">BTU</a>
              <br />
              <br />
              <a href="">BTER</a>
              <br />
              <br />
              <a href="">DELNET</a>
          </div>
      </div>
    </>
  )
}

export default App
