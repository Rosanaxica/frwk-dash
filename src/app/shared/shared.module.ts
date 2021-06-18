import { BreadcrumbComponent } from "./components/breadcrumb/breadcrumb.component";
import { ImageContainerComponent } from "./components/image-container/image-container.component";
import { PageTitleComponent } from "./components/page-title/page-title.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material/material.module";
import { InputFormFieldComponent } from "./components/input-form-field/input-form-field.component";
import { TodoCardComponent } from "./components/todo-card/todo-card.component";
import { UserAvatarComponent } from "./components/user-avatar/user-avatar.component";
import { ButtonGroupComponent } from "./components/button-group/button-group.component";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { FloatButtonComponent } from "./components/float-button/float-button.component";
import { TotalCardComponent } from "./total-card/total-card.component";
import { DashboardSpotlightCardComponent } from "./components/dashboard-spotlight-card/dashboard-spotlight-card.component";
import { ChartCardComponent } from './components/chart-card/chart-card.component';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    ImageContainerComponent,
    InputFormFieldComponent,
    BreadcrumbComponent,
    TodoCardComponent,
    UserAvatarComponent,
    ButtonGroupComponent,
    FloatButtonComponent,
    TotalCardComponent,
    DashboardSpotlightCardComponent,
    ChartCardComponent,
    PostCardComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    PageTitleComponent,
    ImageContainerComponent,
    InputFormFieldComponent,
    BreadcrumbComponent,
    TodoCardComponent,
    UserAvatarComponent,
    ButtonGroupComponent,
    ReactiveFormsModule,
    FloatButtonComponent,
    TotalCardComponent,
    DashboardSpotlightCardComponent,
    ChartCardComponent,
    PostCardComponent,
  ],
})
export class SharedModule {}
