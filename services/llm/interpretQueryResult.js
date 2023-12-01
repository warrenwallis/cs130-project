'use server';

import OpenAI from 'openai';

const interpretQueryResult = async (query, result) => {
	const instructions = `
Answer the query succinctly using this result we polled from a formal database. 
Only answer the question. Do not say more than necessary.

Query:
${query}


Result:
${result}
`;
console.log(instructions)
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
					content: 'Return a detailed interpretation of the result from the RDF database..',
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
		throw new Error(`Error with interpretQueryResult: ${e.message}.`);
	}
};

export default interpretQueryResult;
