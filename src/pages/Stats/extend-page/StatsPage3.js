import Img from "../../../assets/page-links/S3.svg"
import {Link} from 'react-router-dom'


function StatsPage2() {
  return (
    <div>
      <Link to="/stats/page2">
        <img src={Img} alt="stats page 3"></img>
        </Link>
    </div>
  )
}

export default StatsPage2