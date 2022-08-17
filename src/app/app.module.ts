import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TodoComponent } from './todo/todo.component';
import { AddComponent } from './todo/add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { DeleteConfirmComponent } from './todo/delete-confirm/delete-confirm.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddComponent,
    TodoItemComponent,
    DeleteConfirmComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
