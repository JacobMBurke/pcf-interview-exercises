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
    });
  });