export class AppUtils {
    static isDisplayed: boolean = true;

    public static sidebarMinimizerHandler() {
        var minimizerElem = <HTMLElement>document.querySelector("button[class='sidebar-minimizer']");
        if (minimizerElem) {
            let sidebarWidth = minimizerElem.offsetWidth;
            this.isDisplayed = ((sidebarWidth > 50) ? true : false);

            console.log("Load nav " + this.isDisplayed); //TODO

            minimizerElem.addEventListener("click", (event: Event) => {
                this.isDisplayed = !this.isDisplayed;
                console.log("Click nav " + this.isDisplayed); //TODO
            });
        }
    }

    getDisplay() {
        return AppUtils.isDisplayed;
    }
}