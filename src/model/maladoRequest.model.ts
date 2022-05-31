export interface IMaladoRequest{
     firstName?:string;
	 lastName?:string;
     email?:string;
     password?:string;
     username?:string;
}

export class MaladoRequest implements IMaladoRequest {
    constructor(
       public firstName?:string,
       public lastName?:string,
       public email?:string,
       public password?:string,
       public username?:string,
    ){}
}