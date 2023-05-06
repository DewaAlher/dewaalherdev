import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { PortfolioComponent } from './portfolio.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('PortofolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioComponent],
      imports: [RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });
});
