
import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient,HttpHeaders } from "@angular/common/http";
const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';


@Injectable({
  providedIn: "root"
})
export class UserService {
  ev: EventEmitter<any> = new EventEmitter<any>();
  updateListEmitter: EventEmitter<any> = new EventEmitter<any>();
  deleteListEmitter: EventEmitter<any> = new EventEmitter<any>();

  constructor(private http: HttpClient) {}

 // newPassword(body) {
 //   return this.http.post(`http://localhost:4000/api/users/new-password`, body);
 // }
  //ValidPasswordToken(body) {
  //  return this.http.post(`http://localhost:4000/api/users/valid-password-token`, body);
  //}

  addUser(client: any) {

    return this.http.post(`http://localhost:4000/api/users/register-client`, client);
  }
  getLastUser() {
    return this.http.get<any>(`http://localhost:4000/api/users/lastuser`);
  }
  getProfile() {
    return this.http.get<any>(`http://localhost:4000/api/users/profile`);
  }

  



  LoginUser(user: any) {
    return this.http.post(`http://localhost:4000/api/users/login`,user);
  }
 // requestReset(body) {
   // return this.http.put(`http://localhost:4000/api/users/reset-password`, body);
  //}

  //////////////////

  requestReset(body: any) {
    return this.http.post(`http://localhost:4000/api/users/req-reset-password`, body);
  }

  newPassword(body: any){
    return this.http.post(`http://localhost:4000/api/users/new-password`, body);
  }

  ValidPasswordToken(body: any) {
    return this.http.post(`http://localhost:4000/api/users/valid-password-token`, body);
  }
  
  ValidVerification(body: any) {
    return this.http.post(`http://localhost:4000/api/users/verify-now`, body);
  }
  signOut(): void {
    window.localStorage.clear();
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken():any {
    return localStorage.getItem(TOKEN_KEY);
  }
  public getUser() {
    return localStorage.getItem(USER_KEY);
  }
  public saveUser(user:any){
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

}
