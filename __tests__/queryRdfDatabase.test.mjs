import queryRDFDatabase from '@/services/oml/queryRDFDatabase';
import fetch from 'node-fetch';

jest.mock('node-fetch'); 

describe('queryRDFDatabase', () => {
    it('should return data from the RDF database', async () => {
        const mockSPARQLQuery = 'SELECT * WHERE { ?s ?p ?o }';
        const mockResponse = { ok: true, json: () => Promise.resolve({ data: 'some data' }) };
        fetch.mockResolvedValue(mockResponse);

        const result = await queryRDFDatabase(mockSPARQLQuery);
        expect(result).toEqual({ data: 'some data' });
    });

    it('should handle HTTP errors', async () => {
        const mockErrorResponse = { ok: false, status: 404 };
        fetch.mockResolvedValue(mockErrorResponse);

        await expect(queryRDFDatabase('invalid query')).rejects.toThrow('HTTP error! status: 404');
    });

});
