import { BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, Http, URLSearchParams, Headers, RequestOptions } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, provideRoutes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestService } from './test.service';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule, } from '@angular/material'; 
import { HighlightDirective } from './highlight.directive';
import { GiveAssistanceComponent } from './give-assistance/give-assistance.component';
import { AlertComponent } from './alert/alert.component';
import { NumberComponent } from './number/number.component';
import { MapComponent } from './map/map.component';
import { SameDayTravellingComponent } from './same-day-travelling/same-day-travelling.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'samDay',
        component: SameDayTravellingComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        HighlightDirective,
        GiveAssistanceComponent,
        AlertComponent,
        NumberComponent,
        MapComponent,
        SameDayTravellingComponent

    ],
    exports: [RouterModule],
    imports: [
        HttpClientModule,
        BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule, 
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatStepperModule,

    ],
    entryComponents: [AlertComponent],
    providers: [Title, TestService],
    bootstrap: [AppComponent]
})
export class AppModule { }
