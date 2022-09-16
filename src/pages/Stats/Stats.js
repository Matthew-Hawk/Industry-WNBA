import './Stats.scss'
import Bg from '../../assets/page-links/S1.svg'
import {Link} from 'react-router-dom'
function Stats() {
  return (
    <div className='img-div'>
      <Link to='/stats/page2'>
        <img className='img-div__img' src={Bg}></img>
      </Link>
    </div>
  )
}

export default Stats