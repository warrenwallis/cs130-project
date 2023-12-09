'use server';

import { removeCodeBlocks } from '@/services/lib/helpers';
import { convertToSparQL, interpretQueryResult } from '../llm';
import { queryRDFDatabase } from '../oml';


/**
 * Handle human query. This is the entire pipeline. 
 * This includes convert to sparql, query the RDF database, and interpreting the results with openAI
 * @param {string} query 
 * @returns {status} Status code
 */
const handleQuery = async (query) => {
	try {
		const sparQLQueryMD = await convertToSparQL(query);
		const sparQLQuery = removeCodeBlocks(sparQLQueryMD);
		const queryResult = await queryRDFDatabase(sparQLQuery);
		const queryInterpretation = await interpretQueryResult(query, queryResult);

		return {
			status: 200,
			queryInterpretation,
			queryResult,
			sparQLQuery,
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
