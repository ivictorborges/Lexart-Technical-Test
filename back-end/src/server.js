const app = require('./app');
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT_SERVER || 3001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));