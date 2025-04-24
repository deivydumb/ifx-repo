import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCreationVmsComponent } from './form-creation-vms.component';

describe('FormCreationVmsComponent', () => {
  let component: FormCreationVmsComponent;
  let fixture: ComponentFixture<FormCreationVmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCreationVmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormCreationVmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
