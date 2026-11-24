import express from 'express';
import { apiRouter } from './routes/api';
import { errorHandler } from './middleware/errorHandler';
import { requestLogger } from './middleware/logger';

const app = express();
app.use(express.json());
app.use(requestLogger);

app.use('/api/v2', apiRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Nexus Fintech API running on port ${PORT}`);
});
