
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "../../features/counter/counterSlice";

function Counter(){
    //access redux state;
    
    const nowstate = (state) => state.counter.count;
    const count = useSelector(nowstate);
    const dispatch = useDispatch();

    return(
        <div className="bg-[#F54927]">
            <h1>Counter Value: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
    )
    
}

export default Counter;