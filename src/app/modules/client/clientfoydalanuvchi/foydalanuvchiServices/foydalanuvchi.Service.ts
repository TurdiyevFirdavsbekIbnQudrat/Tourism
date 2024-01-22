import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/internal/operators/catchError";
import { Shahar } from "../foydalanuvchiModels/shahar.model";
import { auth, postToken } from "../../../umumiy/AuthModel/auth.model";

@Injectable({
  providedIn: 'root'
})

export class ShaharService{
  constructor(private http:HttpClient){}
  baseUrl = 'https://localhost:7257/api/Shahar/';

    // private  xizmatlar:Xizmat[] =[ 
    //       {
    //       id:1,
    //       xizmatNomi:'boat',
    //       translation:'kema',
    //       example:'This boat is big',
    //       photo:'../../../../../-1Gf.png'
    //       },
    //       {
    //         id:2,
    //         xizmatNomi:'samurai',
    //         translation:'samuray',
    //         example:'this is samurai',
    //         photo:'../../../../../-1Gf.png'
    //       },
    //       {
    //         id:3,
    //         xizmatNomi:'book',
    //         translation:'kitob',
    //         example:'This book is interesting',
    //         photo:'./assets/33144.jpg'
    //       },
    //       {
    //         id:4,
    //         xizmatNomi:'book',
    //         translation:'kitob',
    //         example:'This book is interesting',
    //         photo:'../../../../../-1Gf.png'
    //       },
    //       {
    //         id:5,
    //         xizmatNomi:'book',
    //         translation:'kitob',
    //         example:'This book is interesting',
    //         photo:'../../../../../-1Gf.png'
    //       },
    //   ];
getToken(pe:postToken){

return this.http.post<auth>("https://localhost:7257/api/Auth/GetToken",pe)
}
getAllXizmatlar(token:string){ 
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });
    // return this.xizmatlar;
    
    return this.http.get<Shahar[]>(this.baseUrl+'GetAllShaharlar', { headers })
    .pipe(
      catchError((error) => {
        // Error handling
        console.error('Error fetching data:', error);
        // Optionally, you can throw a custom error or handle it differently
        throw new Error('Failed to fetch data. Check your token or try again later.');
      })
    );
}
/*
 async getXizmatById(id:number){
          return this.xizmatlar.filter((x)=>x.id===id)
      }
    */
}