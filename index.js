const app = require("./routes");
const db = require("./db/db");

const PORT = process.env.PORT || 9000;

async function startServer() {
    try {
        console.log("Running migrations...");
        await db.migrate.latest();

        console.log("Starting express server...")
        app.listen(PORT, () => {
          console.log(`App listening on port ${PORT}`);
        });
    } catch (err) {
        console.log("Error starting app!", err);
        process.exit(-1)
    }
};

startServer();