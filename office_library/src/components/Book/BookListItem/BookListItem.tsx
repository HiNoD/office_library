import * as React from 'react';
import './BookListItem.css';

interface IBookListItem {
  book: IBookItem;
}

export class BookListItem extends React.Component<IBookListItem> {
  public render() {
    const { book } = this.props;
    const categoryList: ICategory[] = book.categories;
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-1" >
          
          <button type="button" className="btn btn-link book-name">{ book.name }</button>
            <div className="author-name">{ book.author }</div>
          </div>
          <div className="col-md-4 offset-md-1">
            <React.Fragment>
            { categoryList.map((category: ICategory) => {
              return (
                <div className="category" key={ category.id }>{ category.name }</div> 
              )
            }) }
            </React.Fragment>
          </div>
          <div className="col-md-2">
            { book.status === 'free' ? (
                <div className="free-status">Свободна</div>
              ) :(
                <div className="busy-status">На руках</div>
              )
            }
          </div>
        </div>
        <hr className="horizontal-line"/>
      </div>
      
    )
  }
}