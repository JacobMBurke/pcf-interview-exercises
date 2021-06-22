#!/usr/bin/env node
import { search } from './search'

const author = process.argv[2]

search(author).then(res => {
    
    console.log(res.books)
    console.log(res.authors)
})
