import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImcExplanationComponent } from './imc-explanation.component';

describe('ImcExplanationComponent', () => {
  let component: ImcExplanationComponent;
  let fixture: ComponentFixture<ImcExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImcExplanationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImcExplanationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
