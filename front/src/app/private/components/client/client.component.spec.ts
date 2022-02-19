import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientComponent } from './client.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ClientService} from '../../../shared/services/client.service';
import {of} from 'rxjs';

describe('ClientComponent', () => {
  let component: ClientComponent;
  let fixture: ComponentFixture<ClientComponent>;
  let clientService: ClientService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ ClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should run ngOnit method', () => {
    component.ngOnInit();
    expect(component.ngOnInit).toBeDefined();
  });

  it('should run getClients in init', () => {
    clientService = fixture.debugElement.injector.get(ClientService);
    const clientServiceSpy = spyOn(clientService, 'getClients').and.returnValue(of({}));
    component.ngOnInit();
    expect(clientServiceSpy).toHaveBeenCalled();
  });
});
