import { Container } from 'react-bootstrap'
import './GrowUs.css'

export default function GrowUs() {
  return (
    <>
    <Container>
        <section className='SK-GrowUs'>
            <div className='SK-GrowUs-content'>
                <div className='SK-GrowUs-Image'>
                    <img src="./../../../public/imges/Vector.png" alt="Vector Image" className='SK-GrowUs-VectorImage' />
                </div>
                <div className='SK-GrowUs-content2'>
                    <h2>Grow Us Your Skill With LearnPress LMS</h2>
                    <div className='SK-GrowUs-content3'>
                      <p>We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
                      <div className='SK-GrowUs-CheckBoxes'>
                        <div className='SK-GrowUs-CheckBox' id='SK-GrowUs-CheckBox-Active'>
                        <img src="./../../../public/imges/Vector.svg" alt="Vector CheckBox" className='SK-GrowUs-CheckBoxImage' />
                        <p>Certification</p>
                        </div>
                        <div className='SK-GrowUs-CheckBox'>
                        <img src="./../../../public/imges/Vector.svg" alt="Vector CheckBox" className='SK-GrowUs-CheckBoxImage' />
                        <p>Certification</p>
                        </div>
                        <div className='SK-GrowUs-CheckBox'>
                        <img src="./../../../public/imges/Vector.svg" alt="Vector CheckBox" className='SK-GrowUs-CheckBoxImage' />
                        <p>Certification</p>
                        </div>
                        <div className='SK-GrowUs-CheckBox'>
                        <img src="./../../../public/imges/Vector.svg" alt="Vector CheckBox" className='SK-GrowUs-CheckBoxImage' />
                        <p>Certification</p>
                        </div>
                      </div>
                   </div>
                   <button className='SK-GrowUs-Button'><a href="#Explorer_Course">Explorer Course</a></button>
                </div>
            </div>

        </section>

    </Container>
    </>
  )
}
