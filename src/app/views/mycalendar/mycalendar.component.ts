import { Component, OnInit, ViewChild, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from "fullcalendar";
import { ModalDirective } from 'ngx-bootstrap/modal';
import { InspectionDtlPopupComponent } from "./inspection-dtl-popup/inspection-dtl-popup.component";

import * as moment from 'moment';
import { HTTPService } from "../../shared/http.service";
import { HttpHeaders } from "@angular/common/http";
import { Subscription } from "rxjs/Subscription";
import { Router, NavigationEnd, ActivatedRouteSnapshot } from '@angular/router';
import { AppServeiceLoadStatusService } from "../../shared/app-service-load-status.service";

@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.scss']
})
export class MycalendarComponent implements OnInit, OnDestroy {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  isCalendarLoading: boolean = false;

  events: any = [];
  private eventSubscription: Subscription;
  private calendarSubscription: Subscription;
  private previewSubscription: Subscription;

  constructor(private router: Router, private httpService: HTTPService, private renderer: Renderer2, private appServeiceLoadStatusService: AppServeiceLoadStatusService) { }

  ngOnDestroy(): void {
    if (this.previewSubscription) { this.previewSubscription.unsubscribe(); }
    if (this.calendarSubscription) { this.calendarSubscription.unsubscribe(); }
    if (this.eventSubscription) { this.eventSubscription.unsubscribe(); }
    this.events = [];    
  }

  ngOnInit() {
    var now = moment();
    let currMonth = (now.set('date', 1).add(-10, 'day')).format('YYYY-MM-DD');
    let nextMonth = (now.set('date', 1).add(1, 'month').add(10, 'day')).format('YYYY-MM-DD');

    console.log("currMonth " + currMonth + " nextMonth " + nextMonth);
    this.isCalendarLoading = true;

    this.eventSubscription = this.httpService.loadCalendar({ 'start': currMonth, 'end': nextMonth }).subscribe(
      (data) => {
        this.calendarOptions = {
          editable: true,
          eventLimit: false,
          header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
          },
          events: data
        };
        this.appServeiceLoadStatusService.setCalendarLoadStatus();
        this.isCalendarLoading = false;
      }, (error) => {
        console.log(error);
        this.appServeiceLoadStatusService.clearCalendarLoadStatus();
        this.isCalendarLoading = false;
      });
  }

  clickButton(evt) {
    let btnType = evt.detail.buttonType;
    var mm = this.ucCalendar.fullCalendar("getDate");
    var currMonth = (moment(mm)).format('YYYY-MM-DD');
    var nextMonth;

    if (btnType === 'next') {
      currMonth = (moment(mm).add(-10, 'day')).format('YYYY-MM-DD');
      nextMonth = (moment(mm).add(1, 'month').add(10, 'day')).format('YYYY-MM-DD');
    } else if (btnType === 'prev') {
      currMonth = (moment(mm).add(-10, 'day')).format('YYYY-MM-DD');
      nextMonth = (moment(mm).add(1, 'month').add(10, 'day')).format('YYYY-MM-DD');
    } else if (btnType === 'today') {
      currMonth = (moment(mm).set('date', 1).add(-10, 'day')).format('YYYY-MM-DD');
      nextMonth = (moment(mm).set('date', 1).add(1, 'month').add(10, 'day')).format('YYYY-MM-DD');
    }

    console.log("currMonth " + currMonth + " nextMonth " + nextMonth);

    this.calendarSubscription = this.httpService.loadCalendar({ 'start': currMonth, 'end': nextMonth }).subscribe(
      (response: Response) => {
        console.log(response);
        this.appServeiceLoadStatusService.setCalendarLoadStatus();
        this.events = response;
      },
      (error) => {
        this.appServeiceLoadStatusService.clearCalendarLoadStatus();
        console.log(error);
      });
  }

  eventClick(evt) {
    console.log(evt.detail.event.id);
    let inspdtlpreviewcontent: HTMLElement = document.getElementById('inspectiondtlcontent') as HTMLElement;
    let element: HTMLElement = document.getElementById('modalbutton') as HTMLElement;
    let bookingidelement: HTMLInputElement = document.getElementById('previewbookingid') as HTMLInputElement;
    bookingidelement.value = evt.detail.event.id;
    inspdtlpreviewcontent.innerHTML = '<div class="p-3 alert alert-secondary">Loading...</div>';

    this.previewSubscription = this.httpService.getPreview(evt.detail.event.id).subscribe(
      (response) => {
        inspdtlpreviewcontent.innerHTML = response.toString();
      },
      (error) => {
        inspdtlpreviewcontent.innerHTML = '<div class="p-3 alert alert-danger m-1">Error during loading details!</div>';
      });

    element.click();
  }

  updateEvent(evt) {
    console.log(evt);
  }
}