# messanger App 

basic real-time chat application built with React and Firebase. Users can sign in with their Google account and start chatting with other users in real-time. The application uses Firebase Realtime Database to store and retrieve chat messages.

To run the project, you need to create a Firebase project, enable Firebase Authentication with Google, and get your Firebase configuration object. You also need to install the Firebase SDK and add it to your project.

Once you have set up Firebase, you can start the development server using the npm start command. The application will be served on http://localhost:3000.

The App.js file is the main component that renders the chat interface and handles the chat functionality. It uses React state and Firebase Realtime Database to store and retrieve chat messages. The signInWithPopup method from Firebase Authentication is used to allow users to sign in with their Google account.