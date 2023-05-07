import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { LegalComponent } from './legal.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('LegalComponent', () => {
  let component: LegalComponent;
  let fixture: ComponentFixture<LegalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.be.ok;
  });
});
