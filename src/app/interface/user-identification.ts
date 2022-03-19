export interface UserIdentification {
    id: number,
        isVerfied: boolean,
        identificationSent: boolean,
        nni:string| null,
        imageUrl:string| null,
        identificationCard:string| null,
        points: number,
        user: number
}
