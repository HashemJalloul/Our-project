/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";
import "./MACardsCourses.css";

function MACardsCourses(props) {
  return (
      <Card className="MA-cards-c">
        <Card.Img variant="top" src={props.image} />
        <Card.Body className="MA-card-body">
          <Card.Title className="MA-text">
            by <span>Determined-Poitras</span>
          </Card.Title>
          <h4 className="MA-lms">{props.head4}</h4>
          <div className="MA-icon-cards">
            <div>
              <img src="/imges/clock icon.png" alt="" />
              <span>2Weeks</span>
            </div>
            <div>
              <img src="/imges/students icon.png" alt="" />
              <span>156 Students</span>
            </div>
          </div>
          <hr />
          <div className="MA-viewMore-wrapper">
            <div className="MA-price">
              <span>{props.price}</span>
              <a className="MA-free">{props.Free}</a>
            </div>
            <a className="MA-view-more" href="#">
              View More
            </a>
          </div>
        </Card.Body>
      </Card>
  );
}

export default MACardsCourses;
