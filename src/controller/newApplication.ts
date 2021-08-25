import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

const newApplication = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	try {
		const response = await axios.post(
			'https://goodmorning-axa-dev.azure-api.net/register',
			req.body,
		);

		const data = response.data;
		res.status(200).json(data);
	} catch (error) {
		return next(error);
	}
};

export default newApplication;
