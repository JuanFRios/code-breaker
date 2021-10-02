import { TestBed } from '@angular/core/testing';

import { CodeBreakerService } from './code-breaker.service';

describe('CodeBreakerService', () => {
  let service: CodeBreakerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeBreakerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
