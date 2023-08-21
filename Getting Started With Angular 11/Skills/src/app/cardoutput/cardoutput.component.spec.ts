import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardoutputComponent } from './cardoutput.component';

describe('CardoutputComponent', () => {
  let component: CardoutputComponent;
  let fixture: ComponentFixture<CardoutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardoutputComponent]
    });
    fixture = TestBed.createComponent(CardoutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
