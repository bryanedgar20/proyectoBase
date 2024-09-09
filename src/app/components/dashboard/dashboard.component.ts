import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { MenuItem, Message, MessageService } from 'primeng/api';
import { ExamenFinalService } from 'src/app/services/examen-final.service';
import { PedidoVO } from 'src/app/vo/PedidoVO';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [MessageService]
})
export class DashboardComponent implements OnInit {
  items: MenuItem[] = [];
  msgs: Message[] = [];


  
  statuses = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' }
  ];

  selectedStatus: any;
  selectedDate: Date = new Date();

  results: [] = [];
  pedido: PedidoVO = new PedidoVO();

  // results = [
  //   { name: 'Juan Pérez', status: 'Activo', date: new Date() },
  //   { name: 'María López', status: 'Inactivo', date: new Date() }
  // ];

  constructor(public auth: AuthService,
    private messageService: MessageService,
    private router: Router,
    public examenFinalService: ExamenFinalService
  ) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Nuevo',
        icon: 'pi pi-file',  // Icono de archivo nuevo
        command: () => {
          this.router.navigate(['/newPage'])
        }
      },
      {
        label: 'Cargar',
        icon: 'pi pi-upload',  // Icono de carga
        command: () => {
          console.log('Cargar clicked');
        }
      },
      {
        label: 'Ayuda',
        icon: 'pi pi-question',  // Icono de ayuda
        command: () => {
          console.log('Ayuda clicked');
        }
      }
    ];

    this.examenFinalService.getDatos().subscribe((response: any) =>{
      console.log('response',response);
      this.results = response;
    })
  }

  logOut() {
    this.auth.logout()
  }

  onSearch() {


    this.examenFinalService.saveDatos(this.pedido).subscribe((response:any)=>{
      console.log('Objeto creado')
    })

    this.msgs.push({severity:'info', summary:'Info Message', detail:'PrimeNG rocks'});

    this.messageService.add({severity:'success', summary:'Service Message', detail:'Via MessageService'});

    // Lógica de búsqueda
    console.log('Buscar con los filtros:', this.selectedStatus, this.selectedDate);
  }
}
