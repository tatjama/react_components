//import faker from 'faker';
import React from 'react';


const CommentDescription = (props)=>{
    return(
        <div className ="comment">
            <a className=" avatar" href="/">
                <img alt="avatar" src={props.avatar}/>
            </a>
            <div className = "content">
                 <a className = "author" href="/">{props.name}</a>
                <div className = "metadata">
                    <span className = "date">{props.date}
                    </span>
                </div>
                <div className = "text">{props.text}</div>
            </div>
        </div>
    );
    
};

export default CommentDescription;