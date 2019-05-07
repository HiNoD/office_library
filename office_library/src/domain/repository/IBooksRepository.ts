interface IBooksRepository {
  getBooks(offset: string) : Promise<IBook[]>;
  getBookById(id: string) : Promise<IBook>;
  createBook(value: Partial<IBook>): Promise<IBook>;
}