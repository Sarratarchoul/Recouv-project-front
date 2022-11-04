import { Client } from "./client";

export class Facture {
    num_facture!: number;
    date_emission?: Date;
    date_echeance?: Date;
    montant_initial!: number;
    montant_restant!: number;
    status?: string;
    retards?: number;
    delai_paimentF?: Date;
    garantie_assureur!: number;
    autres_garanties!: number;
    limite_credit!: number;
    idclient!: number;
    client!: Client;
   // code_client!: number;
}

