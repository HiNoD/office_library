import * as React from 'react';

interface IBookListItem {
  book: IBookItem;
}

export class BookListItem extends React.Component<IBookListItem> {
  public render() {
    const { book } = this.props;
    const categoryList: ICategory[] = book.categories;
    return (
      <div>
        <div>{ book.name }</div>
        <div>{ book.author }</div>
        { categoryList.map((category: ICategory) => {
          return (
            <div key={ category.id }>{ category.name }</div> 
          )
        }) }
        <div>{ book.status }</div>
      </div>
    )
  }
}