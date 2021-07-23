import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [AppComponent, SearchListComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [SearchService],
  bootstrap: [AppComponent],
})
export class AppModule {}
