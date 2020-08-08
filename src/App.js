import React from 'react'
import './App.css'

// components
import ChatRoom from './components/ChatRoom'

function App() {
	return (
		<div>
			<nav className='navbar navbar-dark bg-primary'>
				<div className='container'>
					<a href='/' className='navbar-brand'>
						Chat React
					</a>
				</div>
			</nav>

			<div className='container p-5'>
				<div className='row'>
					<div className='col-md-6 mx-auto'>
						<ChatRoom />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
