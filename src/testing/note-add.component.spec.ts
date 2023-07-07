import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoteAddComponent } from 'src/app/note-add/note-add.component';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { NoteService } from 'src/app/service/note.service';
import { NoteServiceStub } from './noteServiceStub';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { MatToolbar } from '@angular/material/toolbar';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatRadioButton } from '@angular/material/radio';

describe('NoteAddComponent', () => {
  let component: NoteAddComponent;
  let fixture: ComponentFixture<NoteAddComponent>;
  let noteService: NoteService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({

      declarations: [ NoteAddComponent ],
      imports: [FormsModule, MatFormFieldModule, MatInputModule, NoopAnimationsModule,BrowserDynamicTestingModule,MatIconModule],
      providers: [{ provide: NoteService, useClass: NoteServiceStub }, MatSnackBar,Overlay]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteAddComponent);
    noteService = fixture.debugElement.injector.get(NoteService);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
