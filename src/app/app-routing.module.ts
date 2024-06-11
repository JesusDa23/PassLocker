import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RegisterVerifyComponent } from './register-verify/register-verify.component';
import { ForgotpasswordComponent } from './reset-password/forgotpassword/forgotpassword.component';
import { VerifyForgotpasswordComponent } from './reset-password/verify-forgotpassword/verify-forgotpassword.component';
import { CreateCodeComponent } from './login/create-code/create-code.component';
import { PasswordCreatorComponent } from './password-creator/password-creator.component';
import { PasswordManagerComponent } from './password-manager/password-manager.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'singup',
    component: RegisterComponent
  },
  {
    path: 'registerverify',
    component: RegisterVerifyComponent
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent
  },
  {
    path: 'reset-password',
    component: VerifyForgotpasswordComponent
  },
  {
    path: 'verifyCode',
    component: CreateCodeComponent
  },
  {
    path: 'createPassword',
    component: PasswordCreatorComponent
  },
  {
    path: 'password-manage',
    component: PasswordManagerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
