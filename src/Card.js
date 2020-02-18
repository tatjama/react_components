import React from 'react';
//import CommentDescription from './CommentDescription';

const Card = (props)=>{
    return(
        <div className = "card">    
        <div className = "comments">
            {props.children}
         </div>   
            <div className = "extra content">
                <div className = "ui two buttons">
                    <button className = "ui basic green button">Accept</button>
                    <button className = "ui basic red button">Decline</button>
                </div>
            </div>
        </div>
    );
};

export default Card;