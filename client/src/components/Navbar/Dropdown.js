import React from 'react';
import './style.css';

function Dropdown(props) {
	return (
		<div className='btn-group dropleft'>
			<button type='button' className='btn btn-outline-secondary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
				{props.type} Portal
			</button>
			<div className='dropdown-menu'>
				<form className='px-4 py-3'>
                    <div className='text-center'>
                        <h5>{props.type} Login</h5>
                    </div>
					<div className='form-group'>
						<label for='username'>Username</label>
						<input type='username' className='form-control' id='username' placeholder='Username' />
					</div>
					<div className='form-group'>
						<label for='password'>Password</label>
						<input type='password' className='form-control' id='password' placeholder='password' />
					</div>
					<div className='form-group'>
						<button type='submit' className='btn btn-primary'>Sign in</button>
					</div>
				</form>
				<div className='dropdown-divider' />
				<a className='dropdown-item' href='/'>Sign up for {props.type} account</a>
			</div>
		</div>
	);
}

export default Dropdown;