import { Client } from "./client";

export class Relance {
    idR!: number;
    date_action?: Date;
    type_action?: string;
    action?: string;
    montant_action?: number;
    client!: Client;
    idclient!: number;
}