import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Createfoydalanuvchi } from '../AuthModel/foydalanuvchi.model';

@Injectable({
    providedIn: 'root'
  })
  export class CreatefoydalanuvchiService {
    baseUrl = 'https://localhost:7257/api/Foydalanuvchi/CreateFoydalanuvchi';
  
    constructor(private http:HttpClient) { }
  createFoydalanuvchi(model:Createfoydalanuvchi){
    return this.http.post<Createfoydalanuvchi>(this.baseUrl,model)
  }
  
  } 
  