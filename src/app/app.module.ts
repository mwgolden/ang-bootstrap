import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtsPaginatorComponent } from './bts-paginator/bts-paginator.component';
import { AnimalShelterComponent } from './animal-shelter/animal-shelter.component';
import { BtsTableComponent } from './bts-table/bts-table.component';

@NgModule({
  declarations: [
    AppComponent,
		BtsPaginatorComponent,
		AnimalShelterComponent,
		BtsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
