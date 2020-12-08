import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public fruit: string = "";

  public addFruit() {
    console.log(this.fruit);
  }
}
