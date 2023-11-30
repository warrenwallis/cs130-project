'use server';

import { converToSparQL, interpretQueryResult } from '../llm';
import { queryRDFDatabase } from '../oml';

const handleQuery = async (query) => {
	try {
		const sparQLQuery = await converToSparQL(query);
		const queryResult = await queryRDFDatabase(sparQLQuery);
		const queryInterpretation = await interpretQueryResult(queryResult);

		return {
			status: 200,
			queryInterpretation,
			message: 'Query successfully interpreted.',
		};
	} catch (e) {
		console.log(`Error with handleQuery: ${e.message}`);
		return {
			status: 400,
			error: e.message,
		};
	}
};

export default handleQuery;
