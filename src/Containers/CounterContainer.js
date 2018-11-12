import React from "react"
import { connect } from "react-redux"

const mapStateToProps = state => ({
    counter: state
})

const mapDispatchToProps = (dispatch) => ({
    action1: () => dispatch({ type: "ADD" }),
    action2: () => dispatch({ type: "REMOVE" }),
    action3: () => dispatch({ type: "ADD10" }),
    action4: () => dispatch({ type: "REMOVE10" }),
    action5: () => dispatch({ type: "RESET" })
})

const CounterComponent = ({ counter, action1, action2, action3, action4, action5 }) => (
    <div style={{width: "80%",margin: "auto", textAlign: "center"}}>
        <h1>{counter}</h1>
        <button onClick={action1}>ADD 1</button>
        <button onClick={action2}>REMOVE 1</button>
        <button onClick={action3}>ADD 10</button>
        <button onClick={action4}>REMOVE 10</button><br />
        <button onClick={action5}>RESET</button>
    </div>
)

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent)


