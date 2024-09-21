import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/advanceOption";
import { showAdvanceActions } from "../store/counter";

const Controls = () => {
  const dispatch = useDispatch();

  const myInput = useRef();
  const showAdvanceOption = useSelector((store) => store.showAdvanceOption);

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(counterActions.add({ num: myInput.current.value }));
    myInput.current.value = "";
  };

  const handleSubtract = () => {
    dispatch(counterActions.subtract({ num: myInput.current.value }));
    myInput.current.value = "";
  };

  const handleAdvanceSetting = () => {
    dispatch(showAdvanceActions.showAdvance());
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
