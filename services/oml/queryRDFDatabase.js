'use server';

const queryRDFDatabase = async (SPARQLQuery) => {
	try {
		const url = `https://query.wikidata.org/sparql?query=${SPARQLQuery}&format=json`;

		console.log(url);
		const response = await fetch(url, {
			headers: {
				// 'Content-Type': 'application/json',
				'User-Agent':
					'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36',
			},
		});
		// console.log(response);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const data = await response.json();
		return data;
	} catch (e) {
		throw new Error(`Error with queryRDFDatabase: ${e.message}`);
	}
};

export default queryRDFDatabase;
