interface IBooksRepository {
  getBooks(offset: number) : Promise<IBookItem[]>;
  getBookById(id: number) : Promise<IBookItem>;
  createBook(value: Partial<IBookItem>): Promise<IBookItem>;
}