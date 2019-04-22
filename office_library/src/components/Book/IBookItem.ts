interface IBookItem {
  id: string;
  author: string;
  name: string;
  categories: ICategory[];
  description: string;
  status: string;
}