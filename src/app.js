import express from 'express';
import cors from 'cors';
import morgan from 'morgan';


// Routes
// import userRoutes from './routes/userRoutes.js';
import aiRoutes from "./routes/aiRoute.js"



const app = express();

// Middleware
app.use(
  cors({
    origin: 'https://suraksha-sathi-frontend-green.vercel.app'
  })
);
app.use(express.json());
app.use(morgan('dev'));

// Default Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// API Routes
// app.use('/api/users', userRoutes);
app.use("/api/v1/ai", aiRoutes);

export default app;