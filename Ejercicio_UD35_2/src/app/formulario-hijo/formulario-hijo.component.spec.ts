import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioHijoComponent } from './formulario-hijo.component';

describe('FormularioHijoComponent', () => {
  let component: FormularioHijoComponent;
  let fixture: ComponentFixture<FormularioHijoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioHijoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioHijoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
