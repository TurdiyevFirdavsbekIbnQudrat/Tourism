import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Createfoydalanuvchi, updatePasswordFoydalanuvchi } from '../AuthModel/foydalanuvchi.model';

@Injectable({
    providedIn: 'root'
  })
export class ForgetPasswordService {

    baseUrl = 'https://localhost:7257/api/Foydalanuvchi/UpdateFoydalanuvchiByEmailIsm';  
constructor(private http:HttpClient) { }
  PaswordniOzgartirish(model:updatePasswordFoydalanuvchi){
    return this.http.put<Createfoydalanuvchi>(this.baseUrl,model)
}
  
} 
  