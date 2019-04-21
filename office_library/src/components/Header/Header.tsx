import * as React from 'react';
import './Header.css'

interface IHeader {
  title: string;
}

export class Header extends React.Component<IHeader> {
  public render() {
    const {title} = this.props;
    return (
      <div className="container-fluid header-container">
        <div className="header-title-container">
          <h2>{title}</h2>
        </div>
      </div>
    )
  }
}