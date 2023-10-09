import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoComponentComponent } from './medico-component.component';

describe('MedicoComponentComponent', () => {
  let component: MedicoComponentComponent;
  let fixture: ComponentFixture<MedicoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponentComponent]
    });
    fixture = TestBed.createComponent(MedicoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
