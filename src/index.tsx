import bodyParser from 'body-parser';
import express from 'express';
import registrationRoutes from './routes/registration-routes';

const app = express();

app.use(bodyParser.json({ limit: '5mb' }));

app.use((_req, res, next) => {
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Methods', 'POST');

	next();
});

app.use('/registration', registrationRoutes);

app.use((error, _req, res, next) => {
	if (res.headerSent) {
		return next(error);
	}
	res.status(error.code || 500);
	res.json({ message: error.message || 'An unknown error occurred!' });
});

console.log('listening on port 8000');

app.listen(8000);
