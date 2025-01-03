import { Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllbookDashboardComponent } from './allbook-dashboard/allbook-dashboard.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    {
        path: '', component: LandingpageComponent
    },
    {
        path: 'book', component: AllbookDashboardComponent
    },
    {
        path: 'book/:id', component: BookDetailComponent
    },
    {
        path: 'add', component: AddBookComponent
    }
];
