export interface IDemande {
  nomApp?: string | null;
  password?: string | null;
  action?: string | null;
  status?: string | null;
  message?: string | null;
  user?: string | null;
}

export class DemandeRequest implements IDemande {
  constructor(
    public nomApp?: string | null,
    public password?: string | null,
    public action?: string | null,
    public status?: string | null,
    public message?: string | null,
    public user?: string | null
  ) {}
}
