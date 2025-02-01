import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMapaComponent } from './buscar-mapa.component';

describe('BuscarMapaComponent', () => {
  let component: BuscarMapaComponent;
  let fixture: ComponentFixture<BuscarMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscarMapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
