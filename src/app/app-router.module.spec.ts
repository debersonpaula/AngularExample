import { TestBed, inject } from '@angular/core/testing';

import { AppRouterModule } from './app-router.module';

describe('Test1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppRouterModule]
    });
  });

  it('should be created', inject([AppRouterModule], (service: AppRouterModule) => {
    expect(service).toBeTruthy();
  }));
});
