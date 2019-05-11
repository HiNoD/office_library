interface IBookService {
  getBooks(offset: number) : IBookItem[];
  requestBooksByOffset(offset: number) : Promise<void>;
}