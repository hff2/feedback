import { MdInfo } from "react-icons/md";
import { Link } from 'react-router-dom'

function AboutIconLink() {
    return (
    <div className='about-link'>
        <Link to='/about'>
        <MdInfo size={30}/>
        </Link>
    </div>
    )
}

export default AboutIconLink