import Server from './OfiiceLibraryServer';

class BooksRepository implements IBooksRepository {
  public getBooks(offset: string): Promise<IBook[]> {
    return Server.get('/Book/AllBooks/{offset}');
  }  
  public getBookById(id: string): Promise<IBook> {
    throw new Error("Method not implemented.");
  }
  public createBook(value: Partial<IBook>): Promise<IBook> {
    throw new Error("Method not implemented.");
  }
}

const booksRepository = new BooksRepository();

export default booksRepository;

export { BooksRepository };