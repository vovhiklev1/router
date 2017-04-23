import { TestBed, inject } from '@angular/core/testing';
import { AuthChildService } from './auth-child.service';

describe('AuthChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthChildService]
    });
  });

  it('should ...', inject([AuthChildService], (service: AuthChildService) => {
    expect(service).toBeTruthy();
  }));
});
