import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaculaterComponent } from './caculater.component';

describe('CaculaterComponent', () => {
  let component: CaculaterComponent;
  let fixture: ComponentFixture<CaculaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaculaterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaculaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
