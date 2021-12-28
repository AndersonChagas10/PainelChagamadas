import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelChamadasPageComponent } from './painel-chamadas-page.component';

describe('PainelChamadasPageComponent', () => {
  let component: PainelChamadasPageComponent;
  let fixture: ComponentFixture<PainelChamadasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelChamadasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelChamadasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
