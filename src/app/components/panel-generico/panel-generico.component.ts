import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-panel-generico',
  templateUrl: './panel-generico.component.html',
  styleUrls: ['./panel-generico.component.css']
})
export class PanelGenericoComponent implements OnInit {

  constructor(public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.isAuthenticated$.subscribe(isAuthenticaed => {
      console.log('INGRESA A VERIFICAR SI INICIO SESION', isAuthenticaed)
      if(!isAuthenticaed) {
        this.router.navigate(['/inicio'])
      }
    })
  }

  logOut() {
    this.auth.logout()
  }
}
