import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispacth = useDispatch();

  useEffect(() => {
    if(fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;

    dispacth(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8081/items", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispacth(fetchStatusAction.markFetchDone());
        dispacth(fetchStatusAction.markFetchingFinished());
        dispacth(itemsAction.addInitialItem(items[0]));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <></>
  );
};
export default FetchItems;
