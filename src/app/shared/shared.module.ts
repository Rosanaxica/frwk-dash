import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ImageContainerComponent } from './components/image-container/image-container.component';
import { PageTitleComponent } from './components/page-title/page-title.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { InputFormFieldComponent } from './components/input-form-field/input-form-field.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { UserAvatarComponent } from './components/user-avatar/user-avatar.component';
import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FloatButtonComponent } from './components/float-button/float-button.component';




@NgModule({
  declarations: [
    PageTitleComponent,
    ImageContainerComponent,
    InputFormFieldComponent,
    BreadcrumbComponent,
    TodoCardComponent,
    UserAvatarComponent,
    ButtonGroupComponent,
    FloatButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    MaterialModule,
    PageTitleComponent,
    ImageContainerComponent,
    InputFormFieldComponent,
    BreadcrumbComponent,
    TodoCardComponent,
    UserAvatarComponent,
    ButtonGroupComponent,
    ReactiveFormsModule,
    FloatButtonComponent

  ]
})
export class SharedModule { }
