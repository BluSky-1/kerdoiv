import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllQueryComponent } from './all-query.component';

describe('AllQueryComponent', () => {
  let component: AllQueryComponent;
  let fixture: ComponentFixture<AllQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
