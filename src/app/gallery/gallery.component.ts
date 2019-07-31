import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"]
})
export class GalleryComponent implements OnInit {
  player: YT.Player;
  private id1: string = "I0Ujn8gDxSs";
  private id2: string = "Ya6dBmylBEI";
  private id3: string = "YEifLTS52fQ";
  private id4: string = "fCSb4lvWArc";
  private id5: string = "8r7u9Ucp7iU";
  private id6: string = "2aUvm2Ow2cM";
  private id7: string = "-1IKuj1W6-U";
  private id8: string = "6KtwUJiQHyE";

  savePlayer(player) {
    this.player = player;
  }
  onStateChange(event) {}

  constructor() {}

  ngOnInit() {}
}
