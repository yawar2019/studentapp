import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleOnPipesComponent } from './example-on-pipes.component';

describe('ExampleOnPipesComponent', () => {
  let component: ExampleOnPipesComponent;
  let fixture: ComponentFixture<ExampleOnPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleOnPipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleOnPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
