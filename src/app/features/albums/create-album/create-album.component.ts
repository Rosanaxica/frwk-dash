import { AlbumService } from '../../../core/services/album.service';
import { IAlbum } from '../../../core/interfaces/IAlbum';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ITodo } from 'src/app/core/interfaces/ITodo';
import { TodoService } from 'src/app/core/services/todo.service';

@Component({
  templateUrl: './create-album.component.html',
  styleUrls: ['./create-album.component.scss']
})
export class CreateAlbumComponent implements OnInit {

  constructor(public albumService: AlbumService, protected form: FormBuilder) {}
  formAlbum: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formAlbum = new FormGroup({
      title: new FormControl("", Validators.required),
    });
  }

  createTodo() {
    let album: IAlbum;
    this.albumService.addAlbum(album).subscribe((resp) => resp);
  }
  submit(){
    if(this.formAlbum.valid){
      console.log(this.formAlbum.value)
    }
  }
  resetForm(){
    this.formAlbum.reset()
  }
}
