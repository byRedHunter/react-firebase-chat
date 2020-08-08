import React, { Component } from 'react'

// db
import { db } from '../firebase'

class ChatRoom extends Component {
	constructor() {
		super()
		this.state = {
			user: '',
			message: '',
			messages: [
				/* { id: 1, user: 'JCode', text: 'messageOne' },
				{ id: 2, user: 'JersiDev', text: 'messageTwo' }, */
			],
		}
	}

	async componentDidMount() {
		await db.collection('messages').onSnapshot((querySnapshot) => {
			const getMessages = []

			querySnapshot.forEach((doc) => {
				getMessages.push({ ...doc.data() })
			})

			if (getMessages != null) {
				this.setState({
					messages: getMessages,
				})
			}
		})
	}

	updateData = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		})
	}
	submitMessage = async () => {
		const message = {
			id: this.state.messages.length + 1,
			user: this.state.user,
			text: this.state.message,
		}

		await db.collection('messages').doc(`${message.id}`).set(message)

		/* let listMessages = this.state.messages
		listMessages.push(message)

		this.setState({
			messages: listMessages,
		}) */

		this.setState({
			message: '',
		})
	}

	disabledInput = (e) => {
		e.target.disabled = true
	}

	render() {
		const currentMessages = this.state.messages.map((message, i) => {
			return (
				<li
					key={message.id}
					className='list-group-item list-group-item-action border-warning'
				>
					<p className='mb-1'>{message.text}</p>
					<p className='text-right text-white-50 m-0'>{message.user}</p>
				</li>
			)
		})

		return (
			<div className='card'>
				<div className='card-header'>
					<h1 className='h3 text-center text-success'>Comunicate</h1>
				</div>

				<div className='card-body px-5'>
					<ul
						className='list-group px-3'
						style={{ width: '100%', height: '230px', overflowY: 'auto' }}
					>
						{currentMessages}
					</ul>
				</div>

				<div className='card-footer px-5'>
					<input
						name='user'
						id='user'
						type='text'
						placeholder='Write an username'
						className='form-control'
						onChange={this.updateData}
						value={this.state.user}
						onBlur={this.disabledInput}
					/>
					<input
						name='message'
						id='message'
						type='text'
						placeholder='Write a message'
						className='form-control'
						onChange={this.updateData}
						value={this.state.message}
					/>
					<button
						className='btn-block btn btn-success'
						onClick={this.submitMessage}
					>
						Send Mesage
					</button>
				</div>
			</div>
		)
	}
}

export default ChatRoom
