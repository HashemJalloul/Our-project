import './Home.css'
import Category from '../../components/Category/Category'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import CardsCourses from '../../components/CardsCourses/CardsCourses'
import allCardsCourses from './../../Data/AllCardsCourses'


export default function Home() {
  const cardsCourses = allCardsCourses.map(card => {
    return <CardsCourses key={card.id} image={card.image} head4={card.head4} price={card.price} Free={card.Free} />
  })
  return (
    <>
      <section className='ek-hero'>
        <div className="ek-hero-content">
          <h1 className='ek-hero-title'>Build Skills with
            Online Course</h1>
          <p className='ek-p-hero'>We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
          <button className='ek-btn-hero'><a href="">Posts comment</a></button>
        </div>
      </section>
      <Category />
      <Container>
        <div className="ek-top-features-courses">
          <div className="ek-title">
            <h2>Featured courses</h2>
            <p>Explore our Popular Courses</p>
          </div>
          <button className="ek-btn-features-courses">
            <Link to='/CourseListing'>All Courses</Link>
          </button>
        </div>
        <div className="ek-wrapper-featuresCourses">
          {cardsCourses}
        </div>

        <div className="ek-getMore">
          <div className="ek-getMore-content">
            <div className="ek-getMore-title">
              <h5>GET MORE POWER FROM</h5>
              <h2>LearnPress Add-Ons</h2>
            </div>
            <div>
              <p>The next level of LearnPress - LMS WordPress Plugin. More Powerful, Flexible and Magical Inside.</p>
              <button className='ek-btn-getmore'><a href="">Explorer course</a></button>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
