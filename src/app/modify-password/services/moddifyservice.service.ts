import { Injectable } from '@angular/core';
import axios from 'axios';
import { LoginService } from '../../login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class ModdifyserviceService {
  private apiUrl = 'http://localhost:3000/api/pass-handler';

  constructor(private authService: LoginService) { }


  async modifyPassword(id: string, userService: string, userName: string, password: string): Promise<void> {
    const token = this.authService.getToken();
    if (!token) {
      throw new Error('No token available');
    }

    const url = `${this.apiUrl}/${id}`; // falta el id de la contraseña que se quiera modificar
    const data = {
      userService,
      userName,
      password
    };

    try {
      await axios.patch(url, data, { headers: { 'Authorization': `Bearer ${token}` } });
      console.log('Password updated successfully');
    } catch (error) {
      console.error('Error updating password:', error);
      throw error;
    }
  }
}