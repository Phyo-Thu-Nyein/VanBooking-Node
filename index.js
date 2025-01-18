import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(cors({ origin: "*" }));

//ROUTERS HERE
app.use("/api/v1/auth");
app.use("/api/v1/auth");

//HEALTH CHECK
app.get("/", (req, res) => {
    return res.status(200).json({
        messaeg: "Hello from Van Booking!"
    });
});

app.listen(process.env.SERVER_PORT || 4000, () => {
    console.log(`Server is running on port ${process.env.SERVER_PORT}`);
    // connectDB();
});