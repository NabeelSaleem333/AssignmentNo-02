import { TestBed } from '@angular/core/testing';

import { ListItemServiceService } from './list-item-service.service';

describe('ListItemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListItemServiceService = TestBed.get(ListItemServiceService);
    expect(service).toBeTruthy();
  });
});
