import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { JokesComponent } from './jokes/jokes/jokes.component';
import { JokesSerivce } from './jokes/jokes.service';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [JokesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
