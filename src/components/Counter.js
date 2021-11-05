import { useSelector, useDispatch } from "react-redux";
import classes from "./counter.module.css";
import { CounterActions } from "../store/counter";
// import { Component } from "react";
// import { connect } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const toggleButtonHandler = () => {
      // dispatch({type: "toggle"})
      dispatch(CounterActions.toggleCounter());
    };
    
    const incrementButtonHandler = () => {
      // dispatch({ type: "Increment" });
      dispatch(CounterActions.increment());
    };
    
    const decrementButtonHandler = () => {
      // dispatch({ type: "Decrement" });
      dispatch(CounterActions.decrement());
    };
    
    const increaseHandler = () => {
    dispatch(CounterActions.increase(10));
      // dispatch({ type: "Increase", amount: 5})
  }

  return (
    <div className={classes["counter-div"]}>
      <h4>Redux Counter</h4>
      {showCounter && <h1>{counter}</h1>}
      <div className={classes["counter-button__div"]}>
        <button onClick={incrementButtonHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementButtonHandler}>Decrement</button>
      </div>
      <button type="button" onClick={toggleButtonHandler}>
        Toggle Counter
      </button>
    </div>
  );
};

export default Counter;

/* Example for class based component using redux*/
// class Counter extends Component {
//     incrementButtonHandler() {
//         this.props.increment();
//     }
//     decrementButtonHandler() {
//         this.props.decrement();
//     }
//     toggleButtonHandler() {

//     }

//     render() {
//         return (
//                 <div className={classes["counter-div"]}>
//                   <h4>Redux Counter</h4>
//                   <h1>{this.props.counter}</h1>
//                   <div className={classes["counter-button__div"]}>
//                     <button onClick={this.incrementButtonHandler.bind(this)}>Increment</button>
//                     <button onClick={this.decrementButtonHandler.bind(this)}>Decrement</button>
//                   </div>
//                   <button type="button" onClick={this.toggleButtonHandler}>
//                     Toggle Counter
//                   </button>
//                 </div>
//               );
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         increment: () => dispatch({type:"Increment"}),
//         decrement: () => dispatch({type: "Decrement"})
//     }
// }

// const mapStateToProps = state => {
//     return {
//         counter: state.counter
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
