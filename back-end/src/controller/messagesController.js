const messagesService = require('../service/messagesService');

const postMessages = async (req, res) => {
    const conversation = req.body;

    const message = await messagesService.postMessages(conversation);
    
    return res.status(201).json(message);
};

const exportMessages = async (_req, res) => {
    const csvFile = await messagesService.exportMessages();

    return res.download('messages.csv', csvFile );
};

module.exports = { postMessages, exportMessages };