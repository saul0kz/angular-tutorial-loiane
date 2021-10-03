import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarErroComponent } from './mostrar-erro.component';

describe('MostrarErroComponent', () => {
  let component: MostrarErroComponent;
  let fixture: ComponentFixture<MostrarErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
