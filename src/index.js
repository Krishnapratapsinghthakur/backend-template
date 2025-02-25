const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use('/api', apiRoutes);

// app.listen(ServerConfig.PORT, () => {
//     console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
//     console.log(process.env.PORT);
// });

app.listen(3000, () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    console.log(process.env.PORT);
});
