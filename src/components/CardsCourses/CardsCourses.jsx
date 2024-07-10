/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import './CardsCourses.css'
function CardsCourses(props) {
  return (
    <Card className='ek-cards-c ek-cards-listing'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body className='ek-card-body'>
        <Card.Title className='ek-text'>by <span>Determined-Poitras</span></Card.Title>
        <h4 className='ek-lms'>{props.head4}</h4>
        <div className='ek-icon-cards'>
          <div>
            <img src="./../../../public/imges/clock icon.png" alt="" />
            <span>2Weeks</span>
          </div>
          <div>
            <img src="./../../../public/imges/students icon.png" alt="" />
            <span>156 Students</span>
          </div>
        </div>
        <hr />
        <div className='ek-viewMore-wrapper'>
          <div className="ek-price">
            <span>{props.price}</span>
            <a className='ek-free'>{props.Free}</a>
          </div>
          <a className='ek-view-more' href='#'>View More</a>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardsCourses;