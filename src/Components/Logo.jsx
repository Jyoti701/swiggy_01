import {Svglogo} from './Utils/Utility'
import Others from './Others';
import { Link } from 'react-router-dom';
const Logo=()=>{
  return(
    <div className="logo_container">
  <Link to="/"><Svglogo/></Link>
  <Others/>
    </div>
  )
}
export default Logo;