
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDescription from './CommentDescription';
import Card from './Card';
import faker from 'faker';


const App = ()=> {
    return(
       // <div className = "comments">
    <div className = "ui cards">
        <Card >
            <CommentDescription name = "Sam" 
            avatar = {faker.image.avatar()} 
            date = "Today 06:00h" 
            text = "Nice blog !" />
         </Card>   
        <CommentDescription name = "Jane" date = "Today 08:30h" text = "Very useful information!"/>
        <CommentDescription name = "Jo" date = "Today 10:00h" text ="Have a nice day!"/>
        <CommentDescription name = "Mary" date = "Today 16:00h" text = "Thank you for your comment!"/>
                 
    </div>
    //</div>
    )
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));