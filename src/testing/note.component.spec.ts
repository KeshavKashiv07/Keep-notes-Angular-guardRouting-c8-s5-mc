import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteComponent } from 'src/app/note/note.component';

import { MatCardModule } from '@angular/material/card';
import { By } from '@angular/platform-browser';
import { NoteService } from 'src/app/service/note.service';
import { NoteServiceStub } from './noteServiceStub';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activatedRouteStub';
import { MatRadioButton } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

describe('NoteComponent', () => {
  let component: NoteComponent;
  let fixture: ComponentFixture<NoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteComponent ],
      imports: [ MatCardModule, MatIconModule, RouterModule ],
      providers: [
        { provide: NoteService, useClass: NoteServiceStub }, 
        { provide: ActivatedRoute, useClass: ActivatedRouteStub}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
