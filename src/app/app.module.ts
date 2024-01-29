import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { NumberOnly } from "./numberonly";



@NgModule({
    declarations: [
      AppComponent,
      HeaderComponent,
      BodyComponent,
      NumberOnly
    ],
    imports: [
      CommonModule ,
      BrowserModule
    ],
    bootstrap: [
      AppComponent
    ]
  })
  export class AppModule { }
  