import { CompteClient } from './compte-client';
import { Adresse } from './adresse';

export interface Client {
    id?: number;
    nom?: string;
    prenom?: string;
    datenaissance?: Date;
    tel?: number;
    date?: Date;
    adresses?: Array<Adresse>;
    compteclient?: Array<CompteClient>;
}
