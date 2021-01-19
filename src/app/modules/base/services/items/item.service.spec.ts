import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { of, throwError } from 'rxjs';
import { SessionStorageService } from 'src/app/modules/shared/service/session-storage.service';
import { RequestService } from '../request.service';

import { ItemService } from './item.service';

fdescribe('ItemService', () => {
  let service: ItemService;
  let fixture: ComponentFixture<ItemService>;
  let requestService: any;
  const mockRouter = { navigate: jasmine.createSpy('navigate') };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule.forRoot(), HttpClientModule, HttpClientTestingModule],
      providers: [RequestService, SessionStorageService]
    });
    service = TestBed.inject(ItemService);
  });

  beforeEach(inject([RequestService], (r: any) => {
    requestService = r;
    fixture = TestBed.createComponent(ItemService);
    service = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('When invoke getItems()', () => {
    // it('should return success response', () => {
    //   const spy = spyOn(requestService, 'get').and.returnValue(of({}));
    //   service.getItems('');
    //   expect(spy).toHaveBeenCalled();
    //   spy.calls.reset();
    // });

    // it('should return fail response', () => {
    //   const spy = spyOn(requestService, 'get').and.throwError('Error');
    //   try {
    //     service.getItems('');
    //     expect(spy).toThrowError('Error');
    //   } catch (error) {
    //     spy.calls.reset();
    //   }
    // });

    it('should return success response', () => {
      const response = { data: 'Mock response' };
      const spy = spyOn(requestService, 'get').and.returnValue(of(response));
      service.getItems('');
      expect(spy).toHaveBeenCalled();
      spy.calls.reset();
    });

    it('should return fail response', () => {
      const mockCall = spyOn(requestService, 'get').and.returnValue(throwError('Error'));
      service.getItems('');
      expect(mockCall).toThrowError('Error');
      mockCall.calls.reset();
    });
  });

  // describe('When invoke getItemsDetails()', () => {
  //   it('', () => {

  //   });
  // });
});
