
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDescription from './CommentDescription';


const App = ()=> {
    return(
    <div className = "ui comments">    
        <CommentDescription/>
        <div className ="comment">
            <a className=" avatar" href="/">
                <img alt="avatar" src="images/avatar/small/matt.jpg"/>
            </a>
            <div className = "content">
                 <a className = "author" href="/">Jane</a>
                <div className = "metadata">
                    <span className = "date">Today 08:30h
                    </span>
                </div>
                <div className = "text">Very useful information!</div>
            </div>
        </div>
        <div className ="comment">
            <a className=" avatar" href="/">
                <img alt="avatar" src="images/avatar/small/matt.jpg"/>
            </a>
            <div className = "content">
                 <a className = "author" href="/">Jo</a>
                <div className = "metadata">
                    <span className = "date">Today 10:00h
                    </span>
                </div>
                <div className = "text">Thank you for your comment!</div>
            </div>
        </div>
        <div className ="comment">
            <a className=" avatar" href="/">
                <img alt="avatar" src="images/avatar/small/matt.jpg"/>
            </a>
            <div className = "content">
                 <a className = "author" href="/">Mary</a>
                <div className = "metadata">
                    <span className = "date">Today 16:00h
                    </span>
                </div>
                <div className = "text">Have a nice day!</div>
            </div>
        </div>
    </div>
    )
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));