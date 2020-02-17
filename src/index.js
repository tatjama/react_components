
import React from 'react';
import ReactDOM from 'react-dom';


const App = ()=> {
    return(
    <div className = "ui comments">    
        <div className ="comment">
            <a className=" avatar" href="/">
                <img alt="avatar" src="images/avatar/small/matt.jpg"/>
            </a>
            <div className = "content">
                 <a className = "author" href="/">Sam</a>
                <div className = "metadata">
                    <span className = "date">Today 06:00h
                    </span>
                </div>
                <div className = "text">Nice blog!</div>
            </div>
        </div>
    </div>
    )
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));