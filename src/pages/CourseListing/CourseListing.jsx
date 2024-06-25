import BasicBreadcrumbs from "../../components/BasicBreadcrumbs/BasicBreadcrumbs";
import Courses from "../../components/Courses/Courses";
import "./CourseListing.css";

// import image1 from '/imges/Image (6).png'
// import thempress from '/imges/Image (1).png'
// import GirlRead from '/imges/Image (2).png'
// import BoyRead from '/imges/Image (3).png'
// import write from '/imges/Image (4).png'
// import girlstudy from '/imges/Image (5).png'
// import MACardsCourses from "../../components/MACardsCourses/MACardsCourses";

const CourseListing = () => {
  // const courses = [
  //   {id: 0, image: image1, head4 : 'Create an LMS Website with LearnPress', price: '29$', Free: 'Free' },
  //   {id: 1, image: thempress, head4 : 'Design a website with ThimPress', price: '59$', Free: '49.0$' },
  //   {id: 2, image: GirlRead, head4 : 'Create an LMS Website with LearnPress', price: '29$', Free: 'Free' },
  //   {id: 3, image: BoyRead, head4 : 'Create an LMS Website with LearnPress', price: '29$', Free: 'Free' },
  //   {id: 4, image: write, head4 : 'Create an LMS Website with LearnPress', price: '29$', Free: 'Free' },
  //   {id: 5, image: girlstudy, head4 : 'Create an LMS Website with LearnPress', price: '29$', Free: 'Free' },
  //   // Add more course objects here
  // ];

  // //لعرض مصفوفة الكورسات
  // const cardsCourses = courses.map(card => {
  //   return <MACardsCourses key={card.id} image={card.image} head4={card.head4} price={card.price} Free={card.Free} />
  // })
  return (
    <>
      <div className="MA-CourseListing">
        <BasicBreadcrumbs />
        <Courses />
       
  
      </div>
    </>
  );
};
export default CourseListing;
