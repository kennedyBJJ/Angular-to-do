import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

import { AddItemDialogComponent } from '../dialog/add-item-dialog/add-item-dialog.component';
import { ListServiceService } from '../../services/list-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent
  ],
  templateUrl: './to.do.list.component.html',
  styleUrl: './to.do.list.component.css'
})

export class ToDoListComponent {

  DialogAnimation:any;

  completedList:string[] = [];
  uncompletedList:string[] = [];

  constructor(public dialog: MatDialog, public _ListService:ListServiceService){ 

    this.listItens();
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(AddItemDialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  checkItem(index:number):void{
    this._ListService.checkItem(index);
    this.listItens();
  }
  
  uncheckItem(index:number):void{
    this._ListService.uncheckItem(index);
    this.listItens();
  }

  addItem(item:string){
    this.uncompletedList.push(item);
  }

  listItens():void{
    this.completedList = this._ListService.getCompletedList();
    this.uncompletedList = this._ListService.getUncompletedList();
  }

  deleteCompletedItem(index:number):void{
    this._ListService.removeItemCompletedList(index)
  }
  deleteUncompletedItem(index:number):void{
    this._ListService.removeItemUncompletedList(index)
  }
}
