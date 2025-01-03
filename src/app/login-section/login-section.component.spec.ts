import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginSectionComponent } from './login-section.component';
import { UserService } from '../user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

describe('LoginSectionComponent', () => {
  let component: LoginSectionComponent;
  let fixture: ComponentFixture<LoginSectionComponent>;
  let mockUserService: any;

  beforeEach(async () => {
    mockUserService = {
      getUser: jasmine.createSpy('getUser').and.returnValue(of({ name: 'John', surname: 'Doe' }))
    };

    await TestBed.configureTestingModule({
      imports: [LoginSectionComponent, HttpClientTestingModule],
      providers: [{ provide: UserService, useValue: mockUserService }]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
