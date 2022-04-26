import { Injectable } from "@angular/core";
import { ConfirmationToken } from "../models/confirmationToken.model";
import { MaladoRequest } from "../models/maladoRequest.model";
import { DemandeRequest } from "../models/demandeRequest.model";
import { environnement } from "../shared/environnement";
import { config } from "../config/config";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
 })
export class AuthService {

    constructor(private http: HttpClient){ }

    public url: string= "api/"
 
    loginad(data:MaladoRequest){
       return this.http.post(environnement.localurl + this.url + 'loginad', data, {headers:config.jsonHeader, responseType: 'text'});
    }

    maladoconnexion(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'password', data, {headers:config.jsonHeader, responseType: 'text'});
     }

     demande(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.url + 'demande', data, {headers:config.jsonHeader, responseType: 'text'});
     }

     listeDemande(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.url + 'listeDemande', data, {headers:config.jsonHeader, responseType: 'text'});
     }
    //  deletedemande
    deleteDemande(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.url + 'deletedemande', data, {headers:config.jsonHeader, responseType: 'text'});
     }
    isEnabled(data:MaladoRequest) : any{
        return this.http.post(environnement.localurl + this.url +'enable', data, {headers:config.jsonHeader, responseType: 'text'});
    }
    dataUser(data:MaladoRequest) : any{
        return this.http.post(environnement.localurl + this.url +'maladoUser', data, {headers:config.jsonHeader, responseType: 'text'});
    }
    passwordVerification(data:MaladoRequest) : any{
        return this.http.post(environnement.localurl + this.url +'passwordVerification', data, {headers:config.jsonHeader, responseType: 'text'});
    }
    confirmpassword(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url +'confirmpassword', data, {headers:config.jsonHeader, responseType: 'text'});
    }
    connexion(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url +'password', data, {headers:config.jsonHeader, responseType: 'text'});

    }
    tokenValidation(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'token', data, {headers:config.jsonHeader, responseType: 'text'});

    } 
    forgotpassword(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'forgotpassword', data, {headers:config.jsonHeader, responseType: 'text'});

    } 

}


