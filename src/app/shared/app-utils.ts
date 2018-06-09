export class AppUtils {
    static isDisplayed: boolean = true;
    static isClickEventInitialized: boolean = false;

    public static sidebarMinimizerHandler() {
        var clickElem = <HTMLElement>document.querySelector("button[class='sidebar-minimizer']");
        var minimizerElem = <HTMLElement>document.querySelector('app-sidebar-nav');
        if (minimizerElem) {
            let sidebarWidth = minimizerElem.offsetWidth;
            this.isDisplayed = ((sidebarWidth > 50) ? true : false);

            console.log("Load nav " + this.isDisplayed); //TODO
        
            if (!this.isClickEventInitialized && clickElem) {
                this.isClickEventInitialized = true;
                clickElem.addEventListener("click", (event: Event) => {
                    this.isDisplayed = !this.isDisplayed;
                    console.log("this.isClickEventInitialized " + this.isClickEventInitialized);
                    console.log("Click nav " + this.isDisplayed); //TODO
                });
            }
        }
    }

    getDisplay() {
        return AppUtils.isDisplayed;
    }
}