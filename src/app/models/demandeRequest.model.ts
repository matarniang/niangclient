export interface IDemandeRequest{
    action?:string;
    application?:string;
    loginad?:string;
    password?:string;
}

export class DemandeRequest implements IDemandeRequest {
   constructor(
      public action?:string,
      public application?:string,
      public loginad?:string,
      public password?:string,
   ){}
}