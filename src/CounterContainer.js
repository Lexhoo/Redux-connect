import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    counter: state,
})


const CounterContainer = ({counter, dispatch }) => (
   <div>
            <p> {counter}</p>
            <button id="add" onClick ={() => dispatch({ type: 'ADD' })}>+1</button>
            <button id="remove">-1</button>
            <button id="addTen">+10</button>
            <button id="removeTen">-10</button>
            <button id="reset">Reset</button>
         
            <script src="main.js"></script>
         </div>
        )
    


export default connect(mapStateToProps)(CounterContainer);