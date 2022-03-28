import { Injectable } from "@angular/core";
import { ConfirmationToken } from "../models/confirmationToken.model";
import { MaladoRequest } from "../models/maladoRequest.model";
import { environnement } from "../shared/environnement";
import { config } from "../config/config";
import { HttpClient } from "@angular/common/http";



//@Injectable({providedIn:"root" })
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

    isEnabled(data:MaladoRequest) : any{
        return this.http.post(environnement.localurl + this.url +'enable', data, {headers:config.jsonHeader, responseType: 'text'});
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

}


