import interpretQueryResult from '@/services/llm/interpretQueryResult';
import OpenAI from 'openai';

jest.mock('openai'); // Mock OpenAI module

describe('interpretQueryResult', () => {
    it('should interpret query results successfully', async () => {
        const mockQuery = 'sample query';
        const mockResult = 'query result';
        const mockInterpretation = 'interpreted result';
        OpenAI.mockResolvedValue({ choices: [{ message: { content: mockInterpretation }}] });

        const result = await interpretQueryResult(mockQuery, mockResult);
        expect(result).toBe(mockInterpretation);
    });

    it('should throw an error on API failure', async () => {
        const mockError = 'API error';
        OpenAI.mockRejectedValue(new Error(mockError));

        await expect(interpretQueryResult('sample query', 'query result')).rejects.toThrow(`Error with interpretQueryResult: ${mockError}.`);
    });

});
