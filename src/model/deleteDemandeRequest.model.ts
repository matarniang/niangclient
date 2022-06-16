export interface IDemande {
    id?: number;

    }
    
export class deleteDemandeRequest implements IDemande {
      constructor(public id?: number) 
      {}
    }
    