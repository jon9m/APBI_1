import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, AfterViewChecked } from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from "fullcalendar";

import * as moment from 'moment';
import { HTTPService } from "../../shared/http.service";
import { Subscription } from "rxjs/Subscription";
import { NavigationStart, Router } from '@angular/router';
import { AppServeiceLoadStatusService } from "../../shared/app-service-load-status.service";
import { Observable } from 'rxjs/Observable';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-mycalendar',
  templateUrl: './mycalendar.component.html',
  styleUrls: ['./mycalendar.component.scss']
})
export class MycalendarComponent implements OnInit, OnDestroy, AfterViewInit, AfterViewChecked {

  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  isCalendarLoading: boolean = false;
  isCalendarEventsListnerInit = false;

  mm;
  events: any = [];
  private eventSubscription: Subscription;
  private calendarSubscription: Subscription;
  private previewSubscription: Subscription;
  private navStartObservable: Observable<NavigationStart>;
  private navStartSubscription: Subscription;

  constructor(private httpService: HTTPService, private appServeiceLoadStatusService: AppServeiceLoadStatusService, private router: Router) {
    this.navStartObservable = this.router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnDestroy(): void {
    if (this.previewSubscription) { this.previewSubscription.unsubscribe(); }
    if (this.calendarSubscription) { this.calendarSubscription.unsubscribe(); }
    if (this.eventSubscription) { this.eventSubscription.unsubscribe(); }
    if (this.navStartSubscription) { this.navStartSubscription.unsubscribe(); }
    this.events = [];
  }

  ngOnInit() {
    this.navStartSubscription = this.navStartObservable.subscribe(evt => {
      if ((evt.url) && (evt.url.indexOf('mycalendar') != -1)) {
        this.isCalendarEventsListnerInit = false;
      }
    });
  }

  ngAfterViewChecked() {
    if (!this.isCalendarEventsListnerInit) {
        if (this.ucCalendar && this.ucCalendar.fullCalendar) {
          try {
            this.ucCalendar.fullCalendar("rerenderEvents");
            this.isCalendarEventsListnerInit = true;
          } catch (e) {
            this.isCalendarEventsListnerInit = false;
            //console.log(e);
          }
        }
    }
  }

  ngAfterViewInit(): void {
    var now = moment();
    let currMonth = (now.set('date', 1).add(-10, 'day')).format('YYYY-MM-DD');
    now = moment();
    let nextMonth = (now.set('date', 1).add(1, 'month').add(10, 'day')).format('YYYY-MM-DD');

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
      }, () => {
        this.appServeiceLoadStatusService.clearCalendarLoadStatus();
        this.isCalendarLoading = false;
      });
  }

  clickButton() {
    var currView = this.ucCalendar.fullCalendar('getView');
    var currMonth = (currView.start).format('YYYY-MM-DD');
    var nextMonth = (currView.end).format('YYYY-MM-DD');

    this.calendarSubscription = this.httpService.loadCalendar({ 'start': currMonth, 'end': nextMonth }).subscribe(
      (response: Response) => {
        this.appServeiceLoadStatusService.setCalendarLoadStatus();
        this.events = response;
      },
      () => {
        this.appServeiceLoadStatusService.clearCalendarLoadStatus();
      });
  }

  eventClick(evt) {
    let inspdtlpreviewcontent: HTMLElement = document.getElementById('inspectiondtlcontent') as HTMLElement;
    let element: HTMLElement = document.getElementById('modalbutton') as HTMLElement;
    let bookingidelement: HTMLInputElement = document.getElementById('previewbookingid') as HTMLInputElement;
    bookingidelement.value = evt.detail.event.id;
    inspdtlpreviewcontent.innerHTML = '<div class="p-3 alert alert-secondary">Loading...</div>';

    this.previewSubscription = this.httpService.getPreview(evt.detail.event.id).subscribe(
      (response) => {
        inspdtlpreviewcontent.innerHTML = response.toString();
      },
      () => {
        inspdtlpreviewcontent.innerHTML = '<div class="p-3 alert alert-danger m-1">Error during loading details!</div>';
      });

    element.click();
  }

  updateEvent() {

  }
}