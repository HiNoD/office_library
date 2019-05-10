interface IUser {
    id : string,
    surname : string,
    name : string,
    patronymic : string,
    position : string,
    onHands : IBook[],
    read : IBook[];
}