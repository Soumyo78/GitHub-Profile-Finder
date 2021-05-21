import { Fragment } from "react";
import "./style.css";

const SearchBarComponent = (props) => {
  return (
    <Fragment>
      <input className="search-input-box" type="text" placeholder="Enter Github Id" onChange={props.onChangeHandler}/>
    </Fragment>
  );
};

export default SearchBarComponent;
