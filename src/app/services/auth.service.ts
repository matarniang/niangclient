import { Injectable } from "@angular/core";
import { MaladoRequest } from "../../model/maladoRequest.model";
import { DemandeRequest } from "../../model/demandeRequest.model";
import { deleteDemandeRequest} from '../../model/deleteDemandeRequest.model';
import { getToken} from '../../model/getToken.model';

import { environnement } from "../shared/environnement";
import { config } from "../config/config";
import { HttpClient, HttpResponse } from '@angular/common/http';
// export type EntityResponseType = HttpResponse<DemandeRequest>;

@Injectable({
    providedIn: 'root'
 })
export class AuthService {

    constructor(private http: HttpClient){ }

    
    public pointoracle: string= "services/oracle/api/"
    public pointwindows: string= "services/windows/api/"
    public pointnessico: string= "services/nessico/api/"

    public url: string= "api/"

    loginad(data:MaladoRequest): any{
       return this.http.post(environnement.localurl + this.url + 'loginad', data, {headers:config.jsonHeader, responseType: 'text'});
    }

    maladoconnexion(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'password', data, {headers:config.jsonHeader, responseType: 'text'});
     }

     demandeOracle(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointoracle + 'demande-oracles', data, {headers:config.jsonHeader, responseType: 'text'});
     }
     demandeWindows(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointwindows + 'demande-windows', data, {headers:config.jsonHeader, responseType: 'text'});
    
     }
     demandeNessico(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointnessico + 'demande-nessicos', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
     getDemandeOracle(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointoracle + 'demande-oracles-login', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    deleteDemandeOracle(data:deleteDemandeRequest){
        return this.http.post(environnement.localurl + this.pointoracle + 'demande-oracles-delete', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
     getDemandeNessico(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointnessico + 'demande-nessicos-login', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    deleteDemandeNessico(data:deleteDemandeRequest){
        return this.http.post(environnement.localurl + this.pointnessico + 'demande-nessicos-delete', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
     getDemandeWindows(data:DemandeRequest){
        return this.http.post(environnement.localurl + this.pointwindows + 'demande-windows-login', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    deleteDemandeWindows(data:deleteDemandeRequest){
        return this.http.post(environnement.localurl + this.pointwindows + 'demande-windows-delete', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
     }
    isEnabled(data:MaladoRequest) : any{
        return this.http.post(environnement.localurl + this.url + 'enable', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    userInfo(data:getToken){
        return this.http.post(environnement.localurl + this.url +'userinfo', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    passwordVerification(data:MaladoRequest) : any{
        return this.http.post(environnement.localurl + this.url +'passwordVerification', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    confirmpassword(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url +'confirmpassword', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }

    connexion(data:MaladoRequest): any{
        return this.http.post(environnement.localurl + this.url + 'authenticate-mobile', data, { headers:config.jsonHeader, responseType: 'text',observe: 'response'});
    }
    
    tokenValidation(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'token', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});

    } 
    forgotpassword(data:MaladoRequest){
        return this.http.post(environnement.localurl + this.url + 'forgotpassword', data, {headers:config.jsonHeader, responseType: 'text',observe: 'response'});

    } 

}


