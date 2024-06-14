import { Component, OnInit } from '@angular/core';
import { PasswordService } from './password.service';
import { Router } from '@angular/router';
import { DeleteModalComponent } from '../delete-modal/delete-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-password-manager',
  templateUrl: './password-manager.component.html',
  styleUrls: ['./password-manager.component.css'],
})
export class PasswordManagerComponent implements OnInit {
  passwords: any[] = [];

  constructor(
    private passwordService: PasswordService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPasswords();
  }

  async loadPasswords(): Promise<void> {
    try {
      this.passwords = await this.passwordService.getPasswords();
    } catch (error) {
     
    }
  }

  addPassword(): void {
    this.router.navigate(['/createPassword']);
  }

  modifyPassword(id: string): void {
    this.router.navigate(['/modificarContraseña', id]);
  }

  openDeleteModal(id: string): void {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '300px',
      data: { id },
    });

    dialogRef.afterClosed().subscribe(async (result) => {
      if (result) {
        await this.deletePassword(id);
      }
    });
  }

  async deletePassword(id: string): Promise<void> {
    try {
      await this.passwordService.deletePassword(id);
      await this.loadPasswords();
      this.loadPasswords();
      console.log(`Contraseña con id ${id} eliminada correctamente.`);
    } catch (error) {
      console.error('Error al eliminar la contraseña:', error);
    }
  }



  logout(): void {
    this.router.navigate(['/']);
  }
}
