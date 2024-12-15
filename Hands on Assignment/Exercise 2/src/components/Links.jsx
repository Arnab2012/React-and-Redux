import { Link } from "react-router-dom";

const Links=()=>{
    return <ul>
        <li><Link class="link-opacity-1-hover" to="/">Home</Link></li>
        <li><Link class="link-opacity-1-hover" to="/aboutus">About Us</Link></li>
        <li><Link class="link-opacity-1-hover" to="/contact">Contact</Link></li>
    </ul>
}
export default Links;