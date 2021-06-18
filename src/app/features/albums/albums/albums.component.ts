import { AlbumService } from "../../../core/services/album.service";
import { IAlbum } from "../../../core/interfaces/IAlbum";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-albums",
  templateUrl: "./albums.component.html",
  styleUrls: ["./albums.component.scss"],
})
export class AlbumsComponent implements OnInit {
  constructor(
    public albumService: AlbumService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  protected listAlbums: Array<IAlbum> = [];
  ngOnInit() {
    this.getAlbumsList();
  }

  getAlbumsList() {
    this.albumService.getAlbums().subscribe((resp) => (this.listAlbums = resp));
  }
  addAlbum() {
    this.router.navigate(["create"], { relativeTo: this.route });
  }
}
