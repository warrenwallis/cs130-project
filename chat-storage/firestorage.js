const db = require('./initializeFirebase');

async function createChatsContainer() {
  try {
    await db.collection('chats').add({
      
    });
    console.log('Chats container created. Add names of all chats as documents');
  } catch (error) {
    console.error('Error creating chats container:', error);
  }
}
