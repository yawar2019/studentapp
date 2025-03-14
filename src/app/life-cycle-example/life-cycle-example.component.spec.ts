import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleExampleComponent } from './life-cycle-example.component';

describe('LifeCycleExampleComponent', () => {
  let component: LifeCycleExampleComponent;
  let fixture: ComponentFixture<LifeCycleExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
