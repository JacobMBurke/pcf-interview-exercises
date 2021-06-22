import fetch from 'node-fetch'
import { OLBook, OLResponse } from './interfaces/openLibrary'

const olSearchUrl = 'http://openlibrary.org/search.json'

export const search = async (author: string) => {
    try {
        const res = await fetch(`${olSearchUrl}?author=${author}`)

        const body = (await res.json()) as OLResponse

        let books: OLBook[] = body.docs
        books = books.slice(0, 20)

        const bookDetails = books.map(book => {
            return { authors: book.author_name, title: book.title, thumbnail: `http://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg` }
        })

        let authors = books.reduce((arr: string[], book) => {
            for (const author of book.author_name) {
                if (arr.indexOf(author) < 0) {
                    arr.push(author)
                }
            }
            return arr
        }, [])

        console.log(bookDetails)
        console.log(authors)
    } catch (e) {
        console.error(`An error occured during processing: ${e.message}`)
    }
}
