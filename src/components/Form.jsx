import React from 'react';

const Form = (props) => {
    return (
        <div className="form-div">
            <form action="">
    <input onChange={props.search} type="text" placeholder="Search" />
            </form>
        </div>
    );
}

export default Form;