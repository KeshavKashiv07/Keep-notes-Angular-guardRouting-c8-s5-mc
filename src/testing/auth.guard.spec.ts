import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
//import { AuthGuard } from 'src/app/services/auth.guard';
//import { AuthService } from 'src/app/services/auth.service';
import { AuthServiceStub } from './authServiceStub';
//import { RouterService } from 'src/app/services/router.service';
import { RouterServiceStub } from './routerServiceStub';
import { CanActivateGuard } from 'src/app/service/can-activate.guard';
import { NoteRouterService } from 'src/app/service/note-router.service';
import { LoginService } from 'src/app/service/login.service';

describe('AuthGuard', () => {

    let authGuard:CanActivateGuard;
    let authService: LoginService;
    let routerService: NoteRouterService;
    const activatedRouteSnapshot: ActivatedRouteSnapshot = new ActivatedRouteSnapshot();
    const routerStateSnapshot: RouterStateSnapshot = jasmine.createSpyObj<RouterStateSnapshot>('RouterStateSnapshot', ['toString']);


    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [],
            providers: [
                { provide: LoginService, useClass: AuthServiceStub },
                { provide: NoteRouterService, useClass: RouterServiceStub }]
        });
        authGuard = TestBed.inject(CanActivateGuard);
        authService = TestBed.inject(LoginService);
        routerService = TestBed.inject(NoteRouterService);
    });

    it('should create', () => {
        expect(authGuard).toBeTruthy();
    });

    it('should navigate to login view if user has not logged in', () => {
        const spy = spyOn(routerService, "toLoginView")
        authService.isLoggedIn = false;
        const result = authGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
        expect(result).toBeFalse();
        expect(spy).toHaveBeenCalled();
    });
    it('should return true if user has logged in', () => {
        const spy = spyOn(routerService, "toLoginView")
        authService.isLoggedIn = true;
        const result = authGuard.canActivate(activatedRouteSnapshot, routerStateSnapshot);
        expect(spy).not.toHaveBeenCalled();
        expect(result).toBeTrue();
    });
});
