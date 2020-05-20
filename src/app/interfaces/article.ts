export interface Article {
    id?: number;
    ema?: number;
    titre?: string;
    descriptif?: string;
    marque?: string;
    prix?: number;
    prixachat?: number;
    quantite?: number;
    dateajout?: Date;
    categorie?: number;
    souscategorie?: number;
    reference?: string;
    statut?: boolean;   
}
