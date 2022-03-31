import { Produit } from "./produit";

export interface CommandItem {
    id: number,
    nbr: number,
    produit: number,
    command: number,
    produitObject?:Produit
    
}
