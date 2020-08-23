import React from 'react';

const Section = (props) => {

    return (
        <section>
            <h2>{props.title}</h2>
            {props.children}
            <div className="line"></div>
        </section>
    );
}

export default Section;