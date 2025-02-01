import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraEventosComponent } from './cabecera-eventos.component';

describe('CabeceraEventosComponent', () => {
  let component: CabeceraEventosComponent;
  let fixture: ComponentFixture<CabeceraEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CabeceraEventosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabeceraEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
