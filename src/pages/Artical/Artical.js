import './Artical.scss'
import Photo from '../../assets/page-links/A1.svg'
import {Link} from 'react-router-dom'


function Artical() {
  return (
    <>
    <Link to='/'>
       <img className='article' src={Photo} alt="article page with description"></img>
       </Link>
    </>
  )
}

export default Artical