import { Component, Input, OnInit, ViewChild, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { navItems } from './../../_nav';
import { HTTPService } from "../../shared/http.service";
import { TimerObservable } from "rxjs/observable/TimerObservable";
import 'rxjs/add/operator/takeWhile';
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  @ViewChild('serverStatusElem') serverStatusElem: ElementRef;

  private alive: boolean;
  private interval: number;

  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private httpService: HTTPService, private renderer: Renderer2) {
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
    this.subscription = timer.takeWhile(() => this.alive).subscribe(() => {
        this.httpService.getAppStatus().subscribe(
          (response: Response) => {
            this.renderer.removeClass(statusElem, 'alert-danger');
            this.renderer.addClass(statusElem, 'alert-success');
            statusElem.textContent = "Successful connection to the server!";
          },
          (error) => {
            this.renderer.removeClass(statusElem, 'alert-success');
            this.renderer.addClass(statusElem, 'alert-danger');
            statusElem.textContent = "Unable to connect to the server! please check your network connection.";
          });
      });
  }

  ngOnDestroy() {
    this.alive = false; // switches your TimerObservable off
    this.subscription.unsubscribe();
  }
}