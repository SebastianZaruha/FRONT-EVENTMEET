import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEmpresasComponent } from './pagina-empresas.component';

describe('PaginaEmpresasComponent', () => {
  let component: PaginaEmpresasComponent;
  let fixture: ComponentFixture<PaginaEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEmpresasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
