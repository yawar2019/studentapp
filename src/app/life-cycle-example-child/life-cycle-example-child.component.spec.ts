import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCycleExampleChildComponent } from './life-cycle-example-child.component';

describe('LifeCycleExampleChildComponent', () => {
  let component: LifeCycleExampleChildComponent;
  let fixture: ComponentFixture<LifeCycleExampleChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCycleExampleChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCycleExampleChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
