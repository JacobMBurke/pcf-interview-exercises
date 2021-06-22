export interface OLResponse {
    start: number;
    num_found: number;
    docs: OLBook[]
}

export interface OLBook {
    title: string
    isbn: string[]
    author_name: string[]
    cover_edition_key: string

}