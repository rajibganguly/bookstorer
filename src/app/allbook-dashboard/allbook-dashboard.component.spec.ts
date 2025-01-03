import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllbookDashboardComponent } from './allbook-dashboard.component';

import { UuidService } from '../uuidService';
import { BookstoreService } from '../bookstore.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('AllbookDashboardComponent', () => {
  let component: AllbookDashboardComponent;
  let fixture: ComponentFixture<AllbookDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllbookDashboardComponent, BrowserModule, HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [BookstoreService, UuidService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllbookDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
