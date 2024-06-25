const express = require("express");
const app = express();
const PORT = 8080;

app.use((_, res, next) => {
  res.append("Cross-Origin-Opener-Policy", "same-origin");
  res.append("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
