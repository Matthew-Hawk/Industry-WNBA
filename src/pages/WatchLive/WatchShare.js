import './WatchShare.scss'
import Share from "../../assets/page-links/WS.svg"
import {Link} from 'react-router-dom'

function WatchShare() {
  return (
    <div className='share'>
        <Link to='/watch'>
        <img className='share-img' src={Share} alt="share page"></img>
        </Link>
    </div>
  )
}

export default WatchShare