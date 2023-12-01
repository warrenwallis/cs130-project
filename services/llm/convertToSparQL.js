'use server';

import OpenAI from 'openai';

const convertToSparQL = async (query) => {
	const instructions = `
Convert the following question into a SPARQL query that uses the OML vocabulary terms properly.
This will be interacting with the Jena-Fuseki server. I will query from this endpoint https://query.wikidata.org/sparql.  
Only return this query. Do not say anything else. Your response will be plugged in directly to the knowledge base.',

${query}

`;

	try {
		// connect to OpenAI
		const openai = new OpenAI({
			apiKey: process.env.OPENAI_API_KEY,
		});

		const res = await openai.chat.completions.create({
			model: 'gpt-4-1106-preview',
			messages: [
				{
					role: 'system',
					content: 'Remember to only return the query itself.',
				},
				{
					role: 'user',
					content: instructions,
				},
			],
		});
		const responseText = res.choices[0].message.content;
		return responseText;
	} catch (e) {
		throw new Error(`Error with convertToSparQL: ${e.message}.`);
	}
};

export default convertToSparQL;
