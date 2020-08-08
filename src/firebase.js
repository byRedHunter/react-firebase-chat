import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyD_3br-cno6y9prgBKxn9pwmHVholZ92Nc',
	authDomain: 'react-chat-57805.firebaseapp.com',
	databaseURL: 'https://react-chat-57805.firebaseio.com',
	projectId: 'react-chat-57805',
	storageBucket: 'react-chat-57805.appspot.com',
	messagingSenderId: '760181152117',
	appId: '1:760181152117:web:44a17e54164daf6a629b3c',
}
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig)
export const db = fb.firestore()
