import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {MenubarModule} from 'primeng/menubar';
import {SidebarModule} from 'primeng/sidebar';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Agregar esta línea
// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { PageOneComponent } from './components/page-one/page-one.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    DashboardComponent,
    PageOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MenuModule,
    AppRoutingModule,
    MenubarModule,
    MessagesModule,
    MessageModule,
    CalendarModule,
    PanelModule,
    TableModule,
    DropdownModule,
    SidebarModule,
    FieldsetModule,
    FormsModule,
     // Import the module into the application, with configuration
     AuthModule.forRoot({
      domain: 'dev-ula1qbqblxx00rxb.us.auth0.com',
      clientId: 'CGdOJh1seVPboEskDkvlJjI9e9PpffcN'
    }),
    HttpClientModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
