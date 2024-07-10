import { Container, Card } from 'react-bootstrap'
import feedbackicon from './../../../public/imges/“.svg'
import './StudentFeedbacks.css'

export default function StudentFeedbacks() {

  return (
    <>
    <Container>
        <section className='SK-StudentFeedbacks'>
            <div className='SK-StudentFeedbacks-content'>
                <div className='SK-StudentFeedbacks-title'>
                    <h2>Student Feedbacks</h2>
                    <p>What Students Say About Academy LMS</p>
                </div>
            </div>
                <div className='SK-StudentFeedbacks-cards'>
                          <Card className='SK-StudentFeedbacks-card'>
                          <div className='SK-StudentFeedbacks-Body'>
                          <Card.Img variant="top" src={feedbackicon} className='SK-FeedbackCard-Image'/>
                          <p>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                          </div>
                          <div className='SK-StudentFeedbacks-Name'>
                          <h4>Roe Smith</h4>
                          <p>Designer</p>
                          </div>
                          </Card>

                          <Card className='SK-StudentFeedbacks-card'>
                          <div className='SK-StudentFeedbacks-Body'>
                          <Card.Img variant="top" src={feedbackicon} className='SK-FeedbackCard-Image'/>
                          <p>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                          </div>
                          <div className='SK-StudentFeedbacks-Name'>
                          <h4>Roe Smith</h4>
                          <p>Designer</p>
                          </div>
                          </Card>

                          <Card className='SK-StudentFeedbacks-card'>
                          <div className='SK-StudentFeedbacks-Body'>
                          <Card.Img variant="top" src={feedbackicon} className='SK-FeedbackCard-Image'/>
                          <p>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                          </div>
                          <div className='SK-StudentFeedbacks-Name'>
                          <h4>Roe Smith</h4>
                          <p>Designer</p>
                          </div>
                          </Card>

                          <Card className='SK-StudentFeedbacks-card'>
                          <div className='SK-StudentFeedbacks-Body'>
                          <Card.Img variant="top" src={feedbackicon} className='SK-FeedbackCard-Image'/>
                          <p>I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound</p>
                          </div>
                          <div className='SK-StudentFeedbacks-Name'>
                          <h4>Roe Smith</h4>
                          <p>Designer</p>
                          </div>
                          </Card>

                </div>
        </section>
    </Container>
    </>
  )
}
