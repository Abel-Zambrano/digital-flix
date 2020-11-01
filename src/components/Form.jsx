import React from 'react';

const Form = (props) => {
    return (
        <div className="search-form">
            <form action="">
                <input onChange={props.changed} type="text" placeholder="Search"/>
            </form>
        </div>
    );
}

export default Form;