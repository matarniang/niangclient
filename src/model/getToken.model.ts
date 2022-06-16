export interface IToken {
    token?: string | null;
  }
  
  export class getToken implements IToken {
    constructor(
      public token?: string | null,
    
    ) {}
  }