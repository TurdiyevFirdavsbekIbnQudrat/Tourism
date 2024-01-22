import { Component, OnInit } from '@angular/core';
import { Xizmat } from '../xizmatlar.model/xizmat.model';
import { XizmatService } from '../Service/xizmat.service';
import { auth } from '../../../umumiy/AuthModel/auth.model';

@Component({
  selector: 'app-xizmatlar-list',
  templateUrl: './xizmatlar-list.component.html',
  styleUrl: './xizmatlar-list.component.css'
})
export class XizmatlarListComponent implements OnInit {
/**
 *
 */
xizmatlar:Xizmat[]=[];
token!:auth;
constructor(private xizmatService:XizmatService) {
  
}
// ngOninit
ngOnInit(): void {
  this.tokenUshla()
  }
// BarchaXizmatlarni olish
  XizmatlarniBarchasiniOlish(token:string){
  
  
  this.xizmatService.getAllXizmatlar(token).subscribe(
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
    
    this.xizmatService.getToken({parol:'12345678',email:'admin@gmail.com'}).subscribe(
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
