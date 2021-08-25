import axios, { AxiosRequestConfig } from 'axios';
import { Request, Response, NextFunction } from 'express';

const setSchedule = async (req: Request, res: Response, next: NextFunction) => {
	const token = req.header('x-axa-api-key');
	const config: AxiosRequestConfig = {
		headers: {
			'x-axa-api-key': token,
			contentType: 'application/json',
		},
	};
	try {
		const response = await axios.post(
			'https://goodmorning-axa-dev.azure-api.net/schedule',
			req.body,
			config,
		);

		const data = response.data;
		res.status(200).json(data);
	} catch (error) {
		return next(error);
	}
};

export default setSchedule;
