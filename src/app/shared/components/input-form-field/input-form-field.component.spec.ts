import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFormFieldComponent } from './input-form-field.component';

describe('InputFormFieldComponent', () => {
  let component: InputFormFieldComponent;
  let fixture: ComponentFixture<InputFormFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputFormFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFormFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
