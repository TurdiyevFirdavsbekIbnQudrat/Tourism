import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Createfoydalanuvchi } from '../AuthModel/foydalanuvchi.model';
import { auth, postToken } from '../AuthModel/auth.model';

@Injectable({
    providedIn: 'root'
  })
export class NazoratService {

    baseUrl = 'https://localhost:7257/api/Auth/GetToken';  
constructor(private http:HttpClient) { }
  getTokenForFoydalanuvchi(model:postToken){
    return this.http.post<auth>(this.baseUrl,model)
}
  
} 
  