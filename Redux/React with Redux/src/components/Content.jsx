import {useSelector} from "react-redux"
const Content = () => {
  // getting value from store
  const counter=useSelector((store)=>store.counter);
  return (
    <p className="lead mb-4">
      Current Value of Counter is : {counter}
    </p>
  );
};
export default Content;
