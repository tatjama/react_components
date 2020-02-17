import React from 'react';

const CommentDescription = ()=>{
    return(
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
    );
};

export default CommentDescription;