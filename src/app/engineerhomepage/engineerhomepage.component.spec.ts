import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerhomepageComponent } from './engineerhomepage.component';

describe('EngineerhomepageComponent', () => {
  let component: EngineerhomepageComponent;
  let fixture: ComponentFixture<EngineerhomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerhomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineerhomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
