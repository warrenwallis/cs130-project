'use server';

import OpenAI from 'openai';

const interpretQueryResult = async (query, result) => {
	const instructions = `
Interpret the following result from the RDF that was queried with SPARKQL:

Query:
${query}


Result:
${result}
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
