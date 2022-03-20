import { User } from "./user";

export interface Review {
    id: number,
    ratting: number,
    message: string,
    date: string,
    reviewee: number,
    reviewer: number,
    reviewer_u:User
}
