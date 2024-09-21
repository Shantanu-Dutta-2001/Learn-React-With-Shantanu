import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();

  const myInput = useRef();
  const showAdvanceOption = useSelector((store) => store.showAdvanceOption);

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };
  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: myInput.current.value } });
    myInput.current.value = "";
  };

  const handleSubtract = () => {
    dispatch({ type: "SUBTRACT", payload: { num: myInput.current.value } });
    myInput.current.value = "";
  };

  const handleAdvanceSetting = () => {
    dispatch({ type: "SHOWADVANCE" });
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-outline-success btn-lg px-4 gap-3"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-danger btn-lg px-4"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-warning btn-lg px-4"
          onClick={handleAdvanceSetting}
        >
          {showAdvanceOption ? "Hide Adv. Ctrls" : "Show Adv. Ctrls"}
        </button>
      </div>

      {showAdvanceOption && (
        <div className="d-grid gap-2 justify-content-sm-center my-divider">
          <p className="my-header">Advance Counter</p>
          <div className="gap-2 d-sm-flex">
            <input
              type="text"
              placeholder="Enter Number"
              className="my-input"
              ref={myInput}
            />
            <button
              type="button"
              className="btn btn-success btn-lg px-4 gap-3"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              type="button"
              className="btn btn-danger btn-lg px-4 gap-3"
              onClick={handleSubtract}
            >
              Subtract
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Controls;
