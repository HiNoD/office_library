interface IOrderItem {
  id: number;
  userId: number;
  bookId: number;
  title: string;
  author: string;
  isCompleted: boolean;
  date: Date;
  comment: string;
}