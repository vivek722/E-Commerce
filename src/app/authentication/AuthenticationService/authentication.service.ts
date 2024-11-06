import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { endpoints } from 'src/endpoint/endpoin';
import { LoginData } from '../AuthenticationModel/LoginModel';
import { RegisterModel } from '../AuthenticationModel/RegisterModel';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  Auth_Url = endpoints.AUTH;
  User_Url = endpoints.User;
  private userSubject: BehaviorSubject<LoginData | null> = new BehaviorSubject<LoginData | null>(null);
  User : Observable<LoginData>= new  Observable<LoginData>; 
  constructor( private router: Router,
    private http: HttpClient,
) { }
    
    public get LoginUserValue():LoginData | null {
      return this.userSubject.value;  
    }
    login(IUser:LoginData):Observable<LoginData>{
      return this.http.post<LoginData>(`${this.Auth_Url}/Login`,IUser).pipe(
        map((user:any) => {
          localStorage.setItem('user',JSON.stringify(user))
          this.userSubject.next(user);
          return user;
        })
      );
    }
    logout():void{
      localStorage.removeItem('user');
      this.userSubject.next(null);
      this.router.navigate(['/Login']);
    }
    Userislogin():boolean{
      return localStorage.getItem('user')?true:false;
    }
    Register(IUser:RegisterModel ):Observable<RegisterModel>{
      return this.http.post<RegisterModel>(`${this.User_Url}/AddUser`,IUser)
    }
}
