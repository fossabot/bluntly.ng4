import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../shared/shared.module";
import { UsersComponent} from "./users.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { BioComponent } from "./bio/bio.component";
import { BioCreateComponent } from "./bio/create/bio-create.component";
import { BioEditComponent } from "./bio/edit/bio-edit.component";
import { BioFormComponent } from "./bio/form/bio-form.component";

@NgModule({
  declarations: [
    UsersComponent,
    RegisterComponent,
    LoginComponent,
    BioComponent,
    BioCreateComponent,
    BioEditComponent,
    BioFormComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UsersModule {
}
