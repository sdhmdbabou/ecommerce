import { CommandItem } from "./command-item";

export interface Command {
    id: number,
    date: string,
    isComplite: boolean,
    iscanceled: boolean,
    user: number,
    items: CommandItem[]
    
}
