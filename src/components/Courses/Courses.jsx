import "./Courses.css"
import { Link } from "react-router-dom";
import MACardsCourses from "../MACardsCourses/MACardsCourses";
import allCardsCourses from "../../Data/AllCardsCourses";


//لعرض مصفوفة الكورسات
const cardsCourses = allCardsCourses.map((card) => {
  return (
    <MACardsCourses
      key={card.id}
      image={card.image}
      head4={card.head4}
      price={card.price}
      Free={card.Free}
    />
  );
});

// ------------

const Courses = () => {
  return (
    <>
          <Link to="/CourseSingle">
            <div className="MA-wrapper-featuresCourses">{cardsCourses}</div>
          </Link>

    </>
  );
};
export default Courses;
