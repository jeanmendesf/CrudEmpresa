import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObterFuncionarioComponent } from './obter-funcionario.component';

describe('ObterFuncionarioComponent', () => {
  let component: ObterFuncionarioComponent;
  let fixture: ComponentFixture<ObterFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObterFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObterFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
