/* eslint-disable react/prop-types */
import './Count.css'

export default function Count(props) {
    return (
        <div className='ek-info-card'>
            <h2>{props.title}</h2>
            <a href="#">{props.content}</a>
        </div>
    )
}
