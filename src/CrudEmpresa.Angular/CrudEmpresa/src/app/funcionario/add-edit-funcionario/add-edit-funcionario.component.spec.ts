import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFuncionarioComponent } from './add-edit-funcionario.component';

describe('AddEditFuncionarioComponent', () => {
  let component: AddEditFuncionarioComponent;
  let fixture: ComponentFixture<AddEditFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
