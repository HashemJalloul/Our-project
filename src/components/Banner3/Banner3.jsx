import { Container } from 'react-bootstrap'
import './Banner3.css'

export default function Banner3() {
  return (
    <>
       <Container>
       <section className="SK-Banner3">
          <div className="SK-Banner3-content">
            <div>
            <img src="./../../../public/imges/ed1 1.png" alt="Student" className='SK-Banner3Image1' />
            <img src="./../../../public/imges/ed2 1.png" alt="Student" className='SK-Banner3Image2' />
            </div>
            <div className="SK-Banner3-content2">
              <img src="./../../../public/imges/001-student 1.svg" alt="Student" className='SK-StudentImage' />
              <h4>Let’s Start With Academy LMS</h4>
            </div>
            <div className="SK-Banner3-Buttons" >
              <button className='SK-Banner3-Button1'><a href="#Student">I’m A Student</a></button>
              <button className='SK-Banner3-Button2'><a href="#Instructor">Become An Instructor</a></button>
            </div>
          </div>
        </section>
       </Container>
    </>
  )
}
