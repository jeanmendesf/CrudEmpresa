import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDepartamentoComponent } from './add-edit-departamento.component';

describe('AddEditDepartamentoComponent', () => {
  let component: AddEditDepartamentoComponent;
  let fixture: ComponentFixture<AddEditDepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
