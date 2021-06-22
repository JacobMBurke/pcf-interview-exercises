import { expect } from 'chai';
import 'mocha';
import { search } from '../search';


describe('author: search', async () => {
    it('Can find books', async () => {

        const result = await search('pratchett')
        const expectedAuthors = [
            'Neil Gaiman',
            'Terry Pratchett',
            'Martin Jarvis',
            'Full Cast',
            'Mark Heap',
            'Peter Serafinowicz'
        ]

        expect(result).to.have.property('authors');
        expect(result).to.have.property('books');
        expect(result?.authors).to.have.same.members(expectedAuthors)
        expect(result?.books).to.have.lengthOf(20)
        expect(result.books[0].authors).to.contain.members(['Terry Pratchett'])
    });

    it('can handle partial results', async () => {
        const result = await search('mark heap')
        const expectedAuthors = [
            'Neil Gaiman',
            'Terry Pratchett',
            'Martin Jarvis',
            'Full Cast',
            'Mark Heap',
            'Peter Serafinowicz'
        ]

        expect(result).to.have.property('authors');
        expect(result).to.have.property('books');
        expect(result?.authors).to.have.same.members(expectedAuthors)
        expect(result?.books).to.have.lengthOf(1)
        expect(result.books[0].authors).to.contain.members(['Mark Heap']) 
    })

    it('handles empty results', async () => {

        const result = await search('zzzzzzYYYYY')

        expect(result).to.have.property('authors');
        expect(result).to.have.property('books');
        expect(result?.authors).to.be.empty
        expect(result?.books).to.have.lengthOf(0)
    });
});