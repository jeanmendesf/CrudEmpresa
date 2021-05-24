import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterDepartamentoComponent } from './obter-departamento.component';

describe('ObterDepartamentoComponent', () => {
  let component: ObterDepartamentoComponent;
  let fixture: ComponentFixture<ObterDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObterDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObterDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
