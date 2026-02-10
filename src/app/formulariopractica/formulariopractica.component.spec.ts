import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariopracticaComponent } from './formulariopractica.component';

describe('FormulariopracticaComponent', () => {
  let component: FormulariopracticaComponent;
  let fixture: ComponentFixture<FormulariopracticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariopracticaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariopracticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
