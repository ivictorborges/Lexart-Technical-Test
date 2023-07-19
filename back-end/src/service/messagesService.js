const messagesModel = require('../model/messagesModel');
const fs = require('fs');
const { Parser } = require('json2csv');

const postMessages = async (conversation) => {
    const message = await messagesModel.postMessages(conversation);

    return { message };
};

const exportMessages = async () => {
    const result = await messagesModel.exportMessages();

    const json2csvParser = new Parser({ fields: ['id', 'user', 'content', 'created_at'] });
    const csvData = json2csvParser.parse(result);

    return fs.writeFile('messages.csv', csvData, (err) => {
        if (err) return console.log("Something went wrong");
    })
};

module.exports = { postMessages, exportMessages };