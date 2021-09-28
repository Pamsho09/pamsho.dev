importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js')
console.log('in sw page')

firebase.initializeApp({
  apiKey: 'AIzaSyBOoiRMCIXYAWz8RjM5FNYy5VZvttaLk4c',
  authDomain: 'pamsho-dev.firebaseapp.com',
  projectId: 'pamsho-dev',
  storageBucket: 'pamsho-dev.appspot.com',
  messagingSenderId: '570891502921',
  appId: '1:570891502921:web:34b9043b75ac0357058698',
  measurementId: 'G-ZHFME9G29J',
})
//  // Initialize Firebase
const messaging = firebase.messaging()
Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    navigator.serviceWorker.register('firebase-messaging-sw.js')
    console.log('Notification permission granted.')
    messaging
      .getToken()
      .then((currentToken) => {
        if (currentToken) {
          console.log('soy el token -->', currentToken)
        } else {
          // Show permission request.
          console.log(
            'No Instance ID token available. Request permission to generate one.'
          )
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token. ', err)
      })
  } else {
    console.log('Unable to get permission to notify.')
  }
})
