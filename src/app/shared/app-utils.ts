export class AppUtils {
    static isDisplayed: boolean = true;
    static isClickEventInitialized: boolean = false;

    public static sidebarMinimizerHandler() {
        var clickElem = <HTMLElement>document.querySelector("button[class='sidebar-minimizer']");
        var minimizerElem = <HTMLElement>document.querySelector('app-sidebar-nav');

        if (minimizerElem) {
            let sidebarWidth = minimizerElem.offsetWidth;
            this.isDisplayed = ((sidebarWidth > 50) ? true : false);
            if (!this.isClickEventInitialized && clickElem) {
                this.isClickEventInitialized = true;
                clickElem.addEventListener("click", (event: Event) => {
                    this.isDisplayed = !this.isDisplayed;

                    this.breadcrumbWidthHandler(false, false);
                });
            }
        }
    }

    public static navbarTogglerhandler() {
        var appHeaderElem = <HTMLElement>document.querySelector('.app-header');
        if (appHeaderElem) {
            appHeaderElem.addEventListener("click", (event: Event) => {
                setTimeout(() => {
                    this.breadcrumbWidthHandler(true, false);
                }, 500);
            });
        }
    }

    public static resetClickEventInitializedState() {
        AppUtils.isClickEventInitialized = false;
    }

    getDisplay() {
        return AppUtils.isDisplayed;
    }

    //Breadcrumb bar width handler

    public static breadcrumbWidthHandler(init, resize) {
        var contentviewElem = <HTMLElement>document.querySelector('#pagecontentview');
        var breadcrumbElem = <HTMLElement>document.querySelector('.breadcrumb');

        if (contentviewElem && breadcrumbElem) {
            if (init) {
                breadcrumbElem.style.width = contentviewElem.offsetWidth + 'px';
            } else {
                if (this.isDisplayed) {
                    if (resize) {
                        breadcrumbElem.style.width = contentviewElem.offsetWidth + 'px';
                    } else {
                        breadcrumbElem.style.width = contentviewElem.offsetWidth - 150 + 'px';
                    }
                } else {
                    if (resize) {
                        breadcrumbElem.style.width = contentviewElem.offsetWidth + 'px';
                    } else {
                        breadcrumbElem.style.width = contentviewElem.offsetWidth + 150 + 'px';
                    }
                }
            }
        }
    }
}