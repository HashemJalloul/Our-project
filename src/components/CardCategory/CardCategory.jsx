/* eslint-disable react/prop-types */
import './CardCategory.css'
export default function CardCategory(props) {

    return (
        <div className="ek-allCategoryItem">
            <div className="ek-card-wrapper">
                <img className='ek-icon' src={props.icon} alt={props.icon} />
                <div className="ek-card-info">
                    <h4 className='ek-card-title'>{props.title}</h4>
                    <p className='ek-card-p'>38 Courses</p>
                </div>
            </div>
        </div>
    )
}
