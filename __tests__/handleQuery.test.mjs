import handleQuery from '@/services/main/handleQuery';
import { converToSparQL, interpretQueryResult } from '../llm';
import { queryRDFDatabase } from '../oml';

jest.mock('../llm/converToSparQL');
jest.mock('../llm/interpretQueryResult');
jest.mock('../oml/queryRDFDatabase');

describe('handleQuery', () => {
    it('should handle a query successfully', async () => {
        converToSparQL.mockResolvedValue('SPARQL query');
        queryRDFDatabase.mockResolvedValue({ result: 'query result' });
        interpretQueryResult.mockResolvedValue('interpreted result');

        const result = await handleQuery('sample query');
        expect(result).toEqual({
            status: 200,
            queryInterpretation: 'interpreted result',
            message: 'Query successfully interpreted.'
        });
    });

    it('should handle errors', async () => {
        const mockError = 'Error';
        converToSparQL.mockRejectedValue(new Error(mockError));

        const result = await handleQuery('sample query');
        expect(result).toEqual({
            status: 400,
            error: mockError
        });
    });

    // Add more tests as needed
});
