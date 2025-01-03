import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTemplateForm2Component } from './simple-template-form2.component';

describe('SimpleTemplateForm2Component', () => {
  let component: SimpleTemplateForm2Component;
  let fixture: ComponentFixture<SimpleTemplateForm2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleTemplateForm2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleTemplateForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
