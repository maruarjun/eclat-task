import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';;
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Todo } from '../todo';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  title: string = 'Add ToDo'
  mode: string = 'add';
  todoForm: FormGroup;
  todoType: string = 'note';
  validationMsgs: any;
  fileToUpload: any = null;
  display: FormControl = new FormControl("", Validators.required);
  imageUrl: any;
  todo: Todo;
  attacment: any;


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private _dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.mode = this.data.mode;
    this.initForm();
    if (this.mode === 'edit') {
      this.title = 'Edit ToDo';
      this.todo = this.data.todo;
      this.setEditForm();
    }
    this.validationMsgs = {
      'note': [
        { type: 'required', message: 'Note is required' },
        { type: 'minlength', message: 'Note must be at least 5 characters long' },
        { type: 'maxlength', message: 'Note cannot be more than 50 characters long' },
      ],
      'date': [
        { type: 'required', message: 'Date is required' },
      ],
      'attacment': [
        { type: 'required', message: 'attacment is required' },
      ],
    }
  }

  initForm(): void {
    this.todoForm = new FormGroup({
      note: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.minLength(5),]),
    });
  }

  setEditForm(): void {
    this.todoType = this.todo.type;
    if (this.todoType === 'attacment') {
      this.attacment = this.todo.attacment;
      this.imageUrl = `data:image/png;base64,${this.attacment}`;
      this.display.patchValue(this.todo.fileName);
    } else if (this.todoType === 'date') {
      this.todoType = 'date';
    }
    this.changeType();
    this.todoForm.patchValue(this.todo);
  }

  changeType(): void {
    this.fileToUpload = null;
    this.imageUrl = '';
    if (this.todoType === 'note') {
      if (this.todoForm.get('date')) {
        this.todoForm.removeControl('date');
      }
    }
    if (this.todoType === 'date') {
      if (!this.todoForm.get('date')) {
        this.todoForm.addControl('date', new FormControl('', [Validators.required]));
      }
    }
    if (this.todoType === 'attacment') {
      if (!this.todoForm.get('date')) {
        this.todoForm.addControl('date', new FormControl('', [Validators.required]));
      }
    }

  }

  handleFileInput(event: Event) {
    const file = (<HTMLInputElement>event.target).files;
    this.fileToUpload = file?.item(0);
    this.display.patchValue(`${this.fileToUpload.name}`);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  getBase64Image(img: any) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx?.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

  addTodo(): void {
    let todo: Todo = this.todoForm.value;
    todo.type = this.todoType;
    if (this.todoType === 'attacment') {
      const image = document.getElementById('img');
      const imgData = this.getBase64Image(image);
      todo.attacment = imgData;
      todo.fileName = this.fileToUpload.name;
    }
    todo.id = uuidv4();

    this._dialogRef.close(todo);
  }

  editTodo(): void {
    let todo: Todo = this.todoForm.value;
    todo.type = this.todoType;
    if (this.todoType === 'attacment') {
      todo.attacment = this.todo.attacment;
      todo.fileName = this.todo.fileName;
      if (this.fileToUpload) {
        const image = document.getElementById('img');
        const imgData = this.getBase64Image(image);
        todo.attacment = imgData;
        todo.fileName = this.fileToUpload.name;
      }
    }
    todo.id = this.todo.id;
    this._dialogRef.close(todo);
  }

}
