import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
dotenv.config(); // Load env vars before anything else

connectDB();
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
