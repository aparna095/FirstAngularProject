import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedCheckOutComponent } from './proceed-check-out.component';

describe('ProceedCheckOutComponent', () => {
  let component: ProceedCheckOutComponent;
  let fixture: ComponentFixture<ProceedCheckOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceedCheckOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedCheckOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
