import {Component} from '@angular/core';
import {FormArray, FormBuilder, Validators} from "@angular/forms";
import {Playlist} from "../shared/model/playlist.interface";

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html'
})
export class PlaylistComponent {

  constructor(private fb: FormBuilder) {
  }

  // The typed form
  playlist = this.fb.group({
    title: ['', Validators.required],
    date: [new Date(), Validators.required],
    description: [''],
    songs: this.fb.array([])
  })


  // A getter, so we get easily access
  // to the FormArray for adding and removing entries in a typesafe way.
  get songs(): FormArray {
    return this.playlist.controls['songs'] as FormArray
  }

  // Adding a new song by pushing a new song item to the formArray
  addSong() {
    const newSong = this.fb.group({
      artist: ['', Validators.required],
      title: ['', Validators.required],
      duration: ['00:00', Validators.required]
    })
    this.songs.push(newSong);
  }

  // delete a song
  deleteSong(index: number) {
    this.songs.removeAt(index);
  }

  // For displaying in the UI
  playlistRaw?: Playlist;
  save() {
    this.playlistRaw = this.playlist.getRawValue() as Playlist;
    console.log('TODO: Post to database: ', this.playlist.getRawValue());
  }
}
