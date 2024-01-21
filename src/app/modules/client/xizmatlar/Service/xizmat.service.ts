import { Xizmat } from "../xizmatlar.model/xizmat.model";

export class XizmatService{
    private  xizmatlar:Xizmat[] =[ 
          {
          id:1,
          xizmatNomi:'boat',
          translation:'kema',
          example:'This boat is big',
          photo:'../../../../../-1Gf.png'
          },
          {
            id:2,
            xizmatNomi:'samurai',
            translation:'samuray',
            example:'this is samurai',
            photo:'../../../../../-1Gf.png'
          },
          {
            id:3,
            xizmatNomi:'book',
            translation:'kitob',
            example:'This book is interesting',
            photo:'./assets/33144.jpg'
          },
          {
            id:4,
            xizmatNomi:'book',
            translation:'kitob',
            example:'This book is interesting',
            photo:'../../../../../-1Gf.png'
          },
          {
            id:5,
            xizmatNomi:'book',
            translation:'kitob',
            example:'This book is interesting',
            photo:'../../../../../-1Gf.png'
          },
      ];
   async getAllXizmaltlar(){
          return this.xizmatlar;
      }
   async getXizmatById(id:number){
          return this.xizmatlar.filter((x)=>x.id===id)
      }
  }