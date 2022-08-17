import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(private _dialogRef: MatDialogRef<DeleteConfirmComponent>) { }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this._dialogRef.close(true);
  }

}
