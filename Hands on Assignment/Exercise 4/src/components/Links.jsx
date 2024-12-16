import { Link } from "react-router-dom";

const Links=()=>{
    return <ul>
        <li><Link className="link-opacity-1-hover" to="/">Home</Link></li>
        <li><Link className="link-opacity-1-hover" to="/getList">Get List</Link></li>
        <li><Link className="link-opacity-1-hover" to="/postForm">Post Form</Link></li>
    </ul>
}
export default Links;