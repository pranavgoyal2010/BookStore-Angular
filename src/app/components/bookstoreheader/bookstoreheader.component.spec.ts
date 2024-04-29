import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookstoreheaderComponent } from './bookstoreheader.component';

describe('BookstoreheaderComponent', () => {
  let component: BookstoreheaderComponent;
  let fixture: ComponentFixture<BookstoreheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookstoreheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookstoreheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
