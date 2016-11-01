import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ICNDBComponent} from "./icndb/icndb.component";
import {ICNDBService} from "./icndb/icndb.service";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        ICNDBComponent,
        DashboardComponent,
        AppComponent
    ],
    providers: [
        ICNDBService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}