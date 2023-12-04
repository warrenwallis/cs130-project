// const admin = require('firebase-admin');

// const db = admin.firestore();

// let chatsCollection = db.collection("chat");

// const addChatToFirestore = async (value) => {
//   try {
//     const chatsCollection = db.collection('chats');

//     // Add a new document with a generated ID
//     const docRef = await chatsCollection.add({
//       value: value,
//       timestamp: admin.firestore.FieldValue.serverTimestamp(),
//     });

//     return {
//       status: 204,
//       message: `Document added with ID: ${docRef.id}`,
//     };
//   } catch (error) {
//     return {
//       status: 400,
//       error: `Error adding document: ${error.message}`,
//     };
//   }
// };

// module.exports = { addChatToFirestore };
