import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGenericoComponent } from './panel-generico.component';

describe('PanelGenericoComponent', () => {
  let component: PanelGenericoComponent;
  let fixture: ComponentFixture<PanelGenericoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelGenericoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGenericoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
