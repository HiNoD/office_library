interface IBookItem {
  id: number;
  title: string;
  author: string;
  description: string;
  file?: Int8Array;
  cover?: Int8Array; 
  state?: string;
  categories?: ICategory[];
  type?: string; 
}