import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatUIExampleComponent } from './mat-uiexample.component';

describe('MatUIExampleComponent', () => {
  let component: MatUIExampleComponent;
  let fixture: ComponentFixture<MatUIExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatUIExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatUIExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
