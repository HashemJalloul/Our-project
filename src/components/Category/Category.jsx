import './Category.css';
import { Container } from 'react-bootstrap';
import allCategoryItem from '../../Data/AllItemCategory';
import CardCategory from '../CardCategory/CardCategory';
export default function Category() {

  const cards = allCategoryItem.map(item => {
    return <CardCategory key={item.id} icon={item.icon} title={item.title} />
  })
  return (
    <>
      <Container>
        <div className="ek-top-category">
          <div className="ek-title">
            <h2>Top Categories</h2>
            <p>Explore our Popular Categories</p>
          </div>
          <button className="ek-btn-category">
            <a href="">All categories</a>
          </button>
        </div>
        <div className="ek-allCategoryItems">
          {cards}
        </div>
      </Container>
    </>
  )
}
