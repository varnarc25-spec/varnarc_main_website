require("dotenv").config();

const app = require("./app");

const PORT = parseInt(process.env.PORT, 10) || 3000;

app.listen(PORT, () => {
  console.log(`Node web app running at http://localhost:${PORT}`);
});
