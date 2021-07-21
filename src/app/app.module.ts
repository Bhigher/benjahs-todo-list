import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PageListComponent } from './page-list/page-list.component';
import { TemplateTodoComponent } from './template/template-todo/template-todo.component';
import { TemplateHeaderComponent } from './template/template-header/template-header.component';
import { TemplateTodoFormComponent } from './template/template-todo-form/template-todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PageListComponent,
    TemplateTodoComponent,
    TemplateHeaderComponent,
    TemplateTodoFormComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
