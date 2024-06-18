import './Home.css'
import Category from '../../components/Category/Category'


export default function Home() {
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
    </>
  )
}
