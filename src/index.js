
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDescription from './CommentDescription';
import Card from './Card';
import faker from 'faker';


const App = ()=> {
    return(       
    <div className = "ui cards">
        <Card>
            <h4>Approval!</h4>
            Do you want to do this?
        </Card>
        <Card >
             {/*Avatar is from Faker.js library.
             We call it with function faker.image.avatar(). Use {} becouse this is JS Function*/}
            <CommentDescription name = "Sam"            
            avatar = {faker.image.avatar()} 
            date = "Today 06:00h" 
            text = "Nice blog !" />
         </Card> 
         <Card>  
            <CommentDescription 
            name = "Jane" 
            avatar = {faker.image.avatar()}
             date = "Today 08:30h" 
             text = "Very useful information!"/>
         </Card>
         <Card>
            <CommentDescription  
            name = "Jo"
            avatar = {faker.image.avatar()}
             date = "Today 10:00h"
              text ="Have a nice day!"/>
         </Card>
         <Card>
            <CommentDescription 
            name = "Mary"
            avatar = {faker.image.avatar()}
             date = "Today 16:00h"
              text = "Thank you for your comment!"/>
         </Card>        
    </div>   
    )
    
}

ReactDOM.render(<App/>, document.querySelector('#root'));