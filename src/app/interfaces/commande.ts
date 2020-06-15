import { Article } from './article';

export interface Commande {
    id?: number;
    date?: Date;
    montant?: number;
    fraisdeport?: number;
    modepaiement?: number;
    coupon?: string;
    provenance?: string;
    statut?: boolean;
    datelivraison?: Date;
    articlecommande?: Array<Article>;
}
