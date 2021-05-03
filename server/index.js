const app = require("./app");

const PORT = process.env.PORT || 9000;

async function startServer() {
    try {
        app.listen(PORT, () => {
          console.log(`App listening on port ${PORT}`);
        });
    } catch (err) {
        console.log("Error starting app!", err);
        process.exit(-1)
    }
};

startServer();