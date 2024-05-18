import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentQueryComponent } from './current-query.component';

describe('CurrentQueryComponent', () => {
  let component: CurrentQueryComponent;
  let fixture: ComponentFixture<CurrentQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrentQueryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
