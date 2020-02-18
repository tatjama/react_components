
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDescription from './CommentDescription';


const App = ()=> {
    return(
    <div className = "ui comments">    
        <CommentDescription name = "Sam" date = "Today 06:00h" text = "Nice blog realy!"/>
        <CommentDescription name = "Jane" date = "Today 08:30h" text = "Very useful information!"/>
        <CommentDescription name = "Jo" date = "Today 10:00h" text ="Have a nice day!"/>
        <CommentDescription name = "Mary" date = "Today 16:00h" text = "Thank you for your comment!"/>
                 
    </div>
    )
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));