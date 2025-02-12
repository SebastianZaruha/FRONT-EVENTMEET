import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraContactoComponent } from './cabecera-contacto.component';

describe('CabeceraContactoComponent', () => {
  let component: CabeceraContactoComponent;
  let fixture: ComponentFixture<CabeceraContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
