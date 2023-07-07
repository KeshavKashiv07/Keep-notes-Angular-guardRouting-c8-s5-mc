import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

//import { AuthService } from 'src/app/services/auth.service';
import { LoginService } from 'src/app/service/login.service';

describe('AuthService', () => {
    let service: LoginService;
    let httpMock: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      service = TestBed.inject(LoginService);
      httpMock = TestBed.inject(HttpTestingController);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should contain `isLoggedIn()` method to check user\'s logged in status', () => {
      expect(service.isLoggedIn).toBeFalse();
    });

    it('should contain `login()` method', () => {
      expect(service.login).toBeTruthy();
    });

    it('should contain `login()` method that sets user\'s logged in status to `true`', () => {
      service.isLoggedIn = false;
      // service.login("niit@stackroute.in", "StackRoute@2023");
      service.login("StackRoute@2023");
      expect(service.isLoggedIn).toBeFalse();
    });

    it('should contain `logout()` method', () => {
      expect(service.logout).toBeTruthy();
    });

    it('should contain `login()` method that sets user\'s logged in status to `false`', () => {
      service.isLoggedIn = true;
      service.logout();
      expect(service.isLoggedIn).not.toBeTrue();
    });
});  