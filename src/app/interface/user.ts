import { FreeLancerImage } from "./free-lancer-image";

export interface User {

user:number,
isMale:boolean,
imageUrl:string|null,
phone:string,
name:string,
description:string,
type:string,
ratting:number,
id:number,
info_id:number,
images:FreeLancerImage[]|null

}

