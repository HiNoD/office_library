import autobind from 'autobind-decorator';
import { action, computed, observable, toJS} from 'mobx';

import booksRepository from '../../repository/impl/BooksRepository';

export class BookService implements IBookService {
  
  @observable public bookList = [] as IBookItem[];
  
  @computed public getBooks(): IBookItem[] {
    return toJS(this.bookList);
  }

  @action.bound public requestBooksByOffset(offset: number): Promise<void> {
    return booksRepository.getBooks(offset).then(
      (books: IBookItem[]) => {
        this.bookList = books;
      },
      this.handleRequestError
    );
  }

  @autobind
  private handleRequestError(error: Error) {
    alert('error: ' + error);
  }

}
const bookService = new BookService();
export default bookService;