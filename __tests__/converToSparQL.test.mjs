import converToSparQL from '@/services/llm/convertToSparQL';
import OpenAI from 'openai';

jest.mock('openai'); // Mock OpenAI module

describe('converToSparQL', () => {
    it('should convert a query to SPARQL successfully', async () => {
        const mockQuery = 'sample query';
        const mockSPARQL = 'converted SPARQL query';
        OpenAI.mockResolvedValue({ choices: [{ message: { content: mockSPARQL }}] });

        const result = await converToSparQL(mockQuery);
        expect(result).toBe(mockSPARQL);
    });

    it('should throw an error on API failure', async () => {
        const mockError = 'API error';
        OpenAI.mockRejectedValue(new Error(mockError));

        await expect(converToSparQL('sample query')).rejects.toThrow(`Error with convertToSparQL: ${mockError}.`);
    });

});