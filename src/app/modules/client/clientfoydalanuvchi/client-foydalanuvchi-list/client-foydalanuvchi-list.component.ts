import { Component } from '@angular/core';
import { Shahar } from '../foydalanuvchiModels/shahar.model';
import { auth } from '../../../umumiy/AuthModel/auth.model';
import { ShaharService } from '../foydalanuvchiServices/foydalanuvchi.Service';

@Component({
  selector: 'app-client-foydalanuvchi-list',
  templateUrl:'./client-foydalanuvchi-list.component.html',
  styleUrl: './client-foydalanuvchi-list.component.css'
})
export class ClientFoydalanuvchiListComponent {
  xizmatlar:Shahar[]=[];
  token!:auth;
  constructor(private shaharService:ShaharService) {
    
  }
  // ngOninit
  ngOnInit(): void {
    this.tokenUshla()
    }
  // BarchaXizmatlarni olish
    XizmatlarniBarchasiniOlish(token:string){
    
    
    this.shaharService.getAllXizmatlar(token).subscribe(
      {
        next:(responce)=>{
          alert("malumot keldi")
          this.xizmatlar=responce
        },
        error:()=>{
          alert("malumot kelmadi");
        }
      }
  
    )
  }
  //token Olish
    tokenUshla(){
      
      this.shaharService.getToken({parol:'12345678',email:'admin@gmail.com'}).subscribe(
        {
          next:(responce)=>{
            this.token = responce
            this.XizmatlarniBarchasiniOlish(this.token.token)
            // alert(this.token.token)
          },
          error:()=>{
            alert("token kelmadi")
          }
        }
      )
    }
}
