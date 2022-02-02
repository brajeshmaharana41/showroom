import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAgreementsComponent } from './new-agreements.component';

describe('NewAgreementsComponent', () => {
  let component: NewAgreementsComponent;
  let fixture: ComponentFixture<NewAgreementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAgreementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAgreementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
