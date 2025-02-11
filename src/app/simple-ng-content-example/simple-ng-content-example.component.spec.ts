import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleNgContentExampleComponent } from './simple-ng-content-example.component';

describe('SimpleNgContentExampleComponent', () => {
  let component: SimpleNgContentExampleComponent;
  let fixture: ComponentFixture<SimpleNgContentExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleNgContentExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleNgContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
