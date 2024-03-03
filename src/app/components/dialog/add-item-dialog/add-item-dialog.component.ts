import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import { ListServiceService } from '../../../services/list-service.service';

@Component({
  selector: 'app-add-item-dialog',
  standalone: true,
  imports: [
    MatButtonModule, 
    MatDialogActions, 
    MatDialogClose, 
    MatDialogTitle, 
    MatDialogContent,
    FormsModule
  ],
  templateUrl: './add-item-dialog.component.html',
  styleUrl: './add-item-dialog.component.css'
})
export class AddItemDialogComponent {
  description:string = "";

  constructor(public _listService:ListServiceService){}

  createItem():void{

    if(this.description === ""){

    }

    this._listService.postItem(this.description);
    this.description = "";
  }

}
