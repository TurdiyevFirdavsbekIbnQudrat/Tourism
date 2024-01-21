import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoydalanuvchiListComponent } from './foydalanuvchi-list.component';

describe('FoydalanuvchiListComponent', () => {
  let component: FoydalanuvchiListComponent;
  let fixture: ComponentFixture<FoydalanuvchiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoydalanuvchiListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoydalanuvchiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
