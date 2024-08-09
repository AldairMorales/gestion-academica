import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorAcademicoComponent } from './coordinador-academico.component';

describe('CoordinadorAcademicoComponent', () => {
  let component: CoordinadorAcademicoComponent;
  let fixture: ComponentFixture<CoordinadorAcademicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoordinadorAcademicoComponent]
    });
    fixture = TestBed.createComponent(CoordinadorAcademicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
