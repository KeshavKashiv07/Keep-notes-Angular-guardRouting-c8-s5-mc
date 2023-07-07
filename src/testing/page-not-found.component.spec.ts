import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotFoundComponent } from 'src/app/not-found/not-found.component';

//import { PageNotFoundComponent } from 'src/app/page-not-found/page-not-found.component';

describe('PageNoteFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
