// import dayjs from 'dayjs/esm';

export interface IDemande {
//   id?: number;
  nomApp?: string | null;
  password?: string | null;
  action?: string | null;
  status?: string | null;
  message?: string | null;
//   dateDemande?: dayjs.Dayjs | null;
//   dateRetour?: dayjs.Dayjs | null;
  user?: string | null;
}

export class DemandeRequest implements IDemande {
  constructor(
   //  public id?: number,
    public nomApp?: string | null,
    public password?: string | null,
    public action?: string | null,
    public status?: string | null,
    public message?: string | null,
   //  public dateDemande?: dayjs.Dayjs | null,
   //  public dateRetour?: dayjs.Dayjs | null,
    public user?: string | null
  ) {}
}

// export function getDemandeIdentifier(demande: IDemande): number | undefined {
// //   return demande.id;
// }


// export interface IDemandeRequest{
//     action?:string;
//     application?:string;
//     loginad?:string;
//     id?:number;
//     password?:string;
// }

// export class DemandeRequest implements IDemandeRequest {
//    constructor(
//       public action?:string,
//       public application?:string,
//       public loginad?:string,
//       public id?:number,
//       public password?:string
//    ){}
// }