import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GatinhosPage } from './gatinhos.page';

describe('GatinhosPage', () => {
  let component: GatinhosPage;
  let fixture: ComponentFixture<GatinhosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GatinhosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
