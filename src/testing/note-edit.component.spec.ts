import { ComponentFixture,TestBed,} from '@angular/core/testing';
import { Router } from '@angular/router';

import { NoteServiceStub } from './noteServiceStub';

import { NoteEditComponent } from 'src/app/note-edit/note-edit.component';

import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Location } from '@angular/common';

import { RouterServiceStub } from './routerServiceStub';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from 'src/app/app-routing.module';
import { NoteService } from 'src/app/service/note.service';
import { NoteRouterService } from 'src/app/service/note-router.service';

describe('NoteEditComponent', () => {
  let component: NoteEditComponent;
  let fixture: ComponentFixture<NoteEditComponent>;
  let noteService: NoteService;
  let routerService: NoteRouterService;
  let location: Location;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteEditComponent],
      imports: [
        RouterTestingModule.withRoutes(routes),
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule,
        MatFormFieldModule
      ],
      providers: [
        { provide: NoteService, useClass: NoteServiceStub },
        { provide: NoteRouterService, useClass: RouterServiceStub }
      ]
    })
      .compileComponents();
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(NoteEditComponent);
    component = fixture.componentInstance;
    noteService = TestBed.inject(NoteService);
    routerService = TestBed.inject(NoteRouterService);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain method `canDeactivate()`', () => {
    const fixture = TestBed.createComponent(NoteEditComponent);
    const component = fixture.componentInstance;
    expect(component.canDeactivate).toBeTruthy();
  });

  
});
