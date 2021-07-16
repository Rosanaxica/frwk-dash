import { TestBed } from '@angular/core/testing';

import { UserAuthDataService } from './user-auth-data.service';

describe('UserAuthDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAuthDataService = TestBed.get(UserAuthDataService);
    expect(service).toBeTruthy();
  });
});
