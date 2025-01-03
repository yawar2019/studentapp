import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuilderComponent } from './formbuilder.component';

describe('FormbuilderComponent', () => {
  let component: FormbuilderComponent;
  let fixture: ComponentFixture<FormbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormbuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
