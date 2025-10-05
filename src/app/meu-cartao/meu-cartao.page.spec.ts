import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeuCartaoPage } from './meu-cartao.page';

describe('MeuCartaoPage', () => {
  let component: MeuCartaoPage;
  let fixture: ComponentFixture<MeuCartaoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuCartaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
