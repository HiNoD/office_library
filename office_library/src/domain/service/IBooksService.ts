interface IBookService {
  getBooks() : IBookItem[];
  requestBooksByOffset(offset: number) : Promise<void>;
}