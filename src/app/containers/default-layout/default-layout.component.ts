import { Component, Input, OnInit, ViewChild, ElementRef, OnDestroy, Renderer2, AfterViewInit, HostListener } from '@angular/core';
import { navItems } from './../../_nav';
import { HTTPService } from "../../shared/http.service";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';
import { Subscription } from "rxjs/Subscription";
import { AppServeiceLoadStatusService } from "../../shared/app-service-load-status.service";
import { FileUploadProgressService } from "../../shared/fileupload-progress.service";
import { AppUtils } from "../../shared/app-utils";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('serverStatusElem') serverStatusElem: ElementRef;

  private alive: boolean;
  private interval: number;
  private isDisplayed: boolean = AppUtils.isDisplayed;

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;

  // @HostListener('window:resize', ['$event'])
  // onResize(event) {
  //   setTimeout(() => {
  //     AppUtils.sidebarMinimizerHandler(this.isDisplayed);
  //   }, 500);
  // }
  // @HostListener('window:orientationchange', ['$event'])
  // onorientationchange(event) {
  //   console.log("orientation for progress summary");
  //   AppUtils.sidebarMinimizerHandler(this.isDisplayed);
  // }

  constructor(private httpService: HTTPService, private renderer: Renderer2, private appServeiceLoadStatusService: AppServeiceLoadStatusService, public fileUploadProgressService: FileUploadProgressService) {
    this.alive = true;
    this.interval = 5000;

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized')
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });
  }

  private subscription: Subscription;

  ngOnInit() {
    let statusElem = this.serverStatusElem.nativeElement;
    let timer = TimerObservable.create(0, this.interval);
    timer.takeWhile(() => this.alive).subscribe(() => {
      this.subscription = this.httpService.getAppStatus().subscribe(
        (response) => {
          this.renderer.removeClass(statusElem, 'alert-danger');
          this.renderer.addClass(statusElem, 'alert-success');
          statusElem.textContent = "Successful connection to the server!";
        },
        (error) => {
          console.log("CPLive error " + error.message);
          this.appServeiceLoadStatusService.clearCalendarLoadStatus();
          this.renderer.removeClass(statusElem, 'alert-success');
          this.renderer.addClass(statusElem, 'alert-danger');
          statusElem.textContent = "Unable to connect to the server! please check your network connection.";
        });
    });
  }

  ngAfterViewInit(): void {
    try {
      let appsidemenutoggler = document.querySelectorAll('[appasidemenutoggler]');
      if ((appsidemenutoggler) && (appsidemenutoggler.length > 0)) {
        (<HTMLElement>appsidemenutoggler[0]).style.display = 'none';
      }
    } catch (e) {
      console.log(e);
    }

    // AppUtils.sidebarMinimizerHandler(this.isDisplayed);
  }

  ngOnDestroy() {
    this.alive = false; // switches your TimerObservable off
    this.subscription.unsubscribe();
  }

  getDisplayed() {
    return AppUtils.isDisplayed;
  }
}
