import {useSelector} from "react-redux"
const Content = () => {
  // getting counter value from store
  const {counterVal}=useSelector((store)=>store.counter);
  return (
    <p className="lead mb-4">
      Current Value of Counter is : {counterVal}
    </p>
  );
};
export default Content;
