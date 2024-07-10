import { Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import article1 from './../../../public/imges/Article1.png'
import article2 from './../../../public/imges/article2.png'
import article3 from './../../../public/imges/Article3.png'
import './LatestArticles.css'

export default function LatestArticles() {
  return (
    <>
    <Container>
       <Row>
       <section className='SK-LatestArticles'>
            <div className='SK-LatestArticles-content'>
                <div className='SK-LatestArticles-title'>
                    <h2>Latest articles</h2>
                    <p>Explore our Popular Courses</p>
                </div>
                <button id='SK-LatestArticles-Button'><a href="#All_Articles">All Articles</a></button>
            </div>
            <div className='SK-LatestArticles-cards'>
                <Card className='SK-LatestArticles-card' >
                    <Card.Img variant="top" src={article1} className='SK-Card-Image'/>
                    <Card.Body className='SK-CardArticle-Body'>
                        <Card.Title className='SK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='SK-CardArticle-Date'>

                            <img src="./../../../public/imges/date.png" alt="Date Icon" />
                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card>
                <Card className='SK-LatestArticles-card'>
                    <Card.Img variant="top" src={article2} className='SK-Card-Image'/>
                    <Card.Body className='SK-CardArticle-Body'>
                        <Card.Title className='SK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='SK-CardArticle-Date'>

                            <img src="./../../../public/imges/date.png" alt="Date Icon" />

                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card>
                <Card className='SK-LatestArticles-card'>
                    <Card.Img variant="top" src={article3} className='SK-Card-Image'/>
                    <Card.Body className='SK-CardArticle-Body'>
                        <Card.Title className='SK-CardArticle-Title'>
                            <h4>Best LearnPress WordPress Theme Collection For 2023</h4>
                        </Card.Title>
                        <div className='SK-CardArticle-Date'>

                            <img src="./../../../public/imges/date.png" alt="Date Icon" />

                            <p>Jan 24, 22023</p>
                        </div>
                        <p>Looking for an amazing & well-functional LearnPress WordPress Theme?...</p>
                    </Card.Body>
                </Card>
            </div>


        </section>
       </Row>
    </Container>
    </>
  )
}
