import { routes } from 'src/app/app-routing.module';
import { LoginComponent } from 'src/app/login/login.component';
import { NoteEditComponent } from 'src/app/note-edit/note-edit.component';
import { NoteViewComponent } from 'src/app/note-view/note-view.component';
import { CanActivateGuard } from 'src/app/service/can-activate.guard';
//import { AuthGuard } from 'src/app/services/auth.guard';
import { CanDeactivateGuard } from 'src/app/service/can-deactivate.guard';

describe('AppRoutingModule', () => {
    it('should contain route definition for login component', () => {
        expect(routes).toContain({ path: "login", component: LoginComponent });
    });
    it('should protect route to views handling notes data', () => {
        expect(routes).toContain(
            {
                path: "home", component: NoteViewComponent, canActivate: [ CanActivateGuard ]
            });
        expect(routes.find(route => route.path === "home")?.canActivate).toBeTruthy();
    });
    it('should prevent navigation away from note-edit view with unsaved changes', () => {
        expect(routes).toContain({path: "note-edit/:id", component: NoteEditComponent, canDeactivate: [CanDeactivateGuard]});

    });
});