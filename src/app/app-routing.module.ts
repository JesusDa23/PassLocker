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
import { ModifyPasswordComponent } from './modify-password/modify-password.component';
import { AuthGuard } from './guard/auth/auth.guard';



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
    component: RegisterVerifyComponent, canActivate: [AuthGuard]
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent
  },
  {
    path: 'reset-password',
    component: VerifyForgotpasswordComponent, canActivate: [AuthGuard]
  },
  {
    path: 'verifyCode',
    component: CreateCodeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'createPassword',
    component: PasswordCreatorComponent, canActivate: [AuthGuard ]
  },
  {
    path: 'home',
    component: PasswordManagerComponent, canActivate: [AuthGuard]
  },
  {
    path: 'modificarContraseña/:id',
    component: ModifyPasswordComponent, canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
