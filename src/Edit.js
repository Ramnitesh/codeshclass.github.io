import { memo } from "react";
function Edit(props) {
  if (!isNaN(props.number)) {
    // if else
    return (
      <p>
        {
          // logical operator
          props.number > 0 && (
            <>
              Edit <code>src/App.js</code> and save to reload {props.number}.
            </>
          )
        }
      </p>
    );
  } else {
    return (
      // ternary operator
      <>{props.number === 0 ? <p>hello 0</p> : <></>}</>
    );
  }
}
export default memo(Edit);
