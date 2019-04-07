interface IBook {
    id : string;
    name : string;
    author : string;
    categories : ICategory[];
    cover : ImageData;
    description : string;
    status :  Statuses;
}

enum Statuses {
    Free, 
    OnHands,
}