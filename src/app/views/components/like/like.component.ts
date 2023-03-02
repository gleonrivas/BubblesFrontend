import {Component, Input} from '@angular/core';

import {LikesService} from "../../../shared/services/likes.service";

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})

export class LikeComponent {
  constructor(private readonly likesService: LikesService) {
  }


}
