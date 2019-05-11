import Server from './OfiiceLibraryServer';

class BooksRepository implements IBooksRepository {
  public getBooks(offset: number): Promise<IBookItem[]> {
    return Server.get(`/Book/BookList/${offset}`);
  }  
  public getBookById(id: number): Promise<IBookItem> {
    throw new Error("Method not implemented.");
  }
  public createBook(value: Partial<IBookItem>): Promise<IBookItem> {
    throw new Error("Method not implemented.");
  }
}

const booksRepository = new BooksRepository();

export default booksRepository;

export { BooksRepository };