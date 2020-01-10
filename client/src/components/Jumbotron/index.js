import React from 'react';
import './style.css';

function Jumbotron() {
    return (
        <div className='jumbotron jumbotron-fluid'>
            <div className='container text-center'>
                <h1 className='display-4'>Sell Out!</h1>
                <hr className='my-4' />

                <p className='lead'>
                    Reinventing the world of sales
                </p>
            </div>
        </div>
    );
}

export default Jumbotron;