import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationexComponent } from './paginationex.component';

describe('PaginationexComponent', () => {
  let component: PaginationexComponent;
  let fixture: ComponentFixture<PaginationexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationexComponent]
    });
    fixture = TestBed.createComponent(PaginationexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
