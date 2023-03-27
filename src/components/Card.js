import './card.css'
import { FaMapMarkerAlt } from 'react-icons/fa'

export default function Card(props){
    const el = props.item;
    return(
        <div className='card-box'>
        <img src={el.imageUrl} cover/>
        <div className='info'>
            <div className='location'>
                <FaMapMarkerAlt className='fa-pin'/>
                <span>{el.location}</span>
                <a href={el.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h2>{el.title}</h2>
            <div className='date'>{el.startDate} - {el.endDate}</div>
            <div className='description'>{el.description}</div>
        </div>

        </div>
    )

}
