const connection = require('./connection');

const postMessages = async (content) => {
    for (const chat of content) {
        const username = chat.user;
        const text = chat.text;
        
        await connection.execute('INSERT INTO Chatbot.messages (user, content) VALUES (?, ?)', [username, text]);
    };
    return "Chat successfully included !";
};

const exportMessages = async () => {
      const [result] = await connection.query('SELECT * FROM Chatbot.messages ORDER BY created_at ASC');

      return result;
  };
  
module.exports = { postMessages, exportMessages };