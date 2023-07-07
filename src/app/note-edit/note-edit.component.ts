import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../service/note.service';
import { Observable, of } from "rxjs";
import { NoteRouterService } from '../service/note-router.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute , private noteSarvice : NoteService ,  private routeService: NoteRouterService) { }

  note : Note = {title:"" , content:""};
  submitStatus:boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = params.get("id") ?? 0;
      this.noteSarvice.getNote(+id).subscribe(data => {
        this.note = data;
        this.submitStatus = true;
      })
    });
  }

  editNote() {
    this. noteSarvice.modifyNote(this.note?.id, this.note).subscribe(data => {
      alert("Edit Successfully")
      this.note = data;
      this.routeService.toHome();
    })
  }

  canDeactivate() {
    if (!this.submitStatus)
        this.submitStatus = confirm("You have not submitted a request to this note. Any details entered will be lost. Are you sure you want to leave?");
    return this.submitStatus;
  }

}
