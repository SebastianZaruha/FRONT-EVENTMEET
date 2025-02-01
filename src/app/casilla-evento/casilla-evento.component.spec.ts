import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasillaEventoComponent } from './casilla-evento.component';

describe('CasillaEventoComponent', () => {
  let component: CasillaEventoComponent;
  let fixture: ComponentFixture<CasillaEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CasillaEventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CasillaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
