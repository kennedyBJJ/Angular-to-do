import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  uncompletedList:string[] = ["Fazer o trabalho"]
  completedList:string[] = ["Limpar a casa"]
  constructor() { }

  getUncompletedList():string[]{
    return this.uncompletedList;
  }

  getCompletedList():string[]{
    return this.completedList;
  }

  checkItem(id:number):void{

    if(this.uncompletedList[id] === undefined) {return};
      
    let itemCompleted:string = this.uncompletedList[id];
    this.completedList.push(itemCompleted);

    delete this.uncompletedList[id]
  }
  
  uncheckItem(id:number):void{

    if(this.completedList[id] === undefined) {return};

    let itemCompleted:string = this.completedList[id];
    this.uncompletedList.push(itemCompleted);

    delete this.completedList[id]
  }

  postItem(description:string):void{
    this.uncompletedList.push(description)
  }

  removeItemCompletedList(id:number):void{
    delete this.completedList[id]
  }
  removeItemUncompletedList(id:number):void{
    delete this.uncompletedList[id]
  }
}
