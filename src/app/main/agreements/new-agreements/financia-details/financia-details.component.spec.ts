import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciaDetailsComponent } from './financia-details.component';

describe('FinanciaDetailsComponent', () => {
  let component: FinanciaDetailsComponent;
  let fixture: ComponentFixture<FinanciaDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanciaDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
