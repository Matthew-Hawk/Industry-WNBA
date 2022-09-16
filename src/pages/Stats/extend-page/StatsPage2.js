import Img from "../../../assets/page-links/S2.svg"
import {Link} from 'react-router-dom'


function StatsPage3() {
  return (
    <div>
      <Link to="/stats/page3">
        <img src={Img} alt="stats page 2"></img>
        </Link>
    </div>
  )
}

export default StatsPage3