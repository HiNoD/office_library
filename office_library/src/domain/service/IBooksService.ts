interface IBookService {
  getBooks() : IBook[];
  requestBooksByOffset(offset: string) : Promise<void>;
}