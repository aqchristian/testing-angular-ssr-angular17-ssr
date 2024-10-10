import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PostInterface } from '../../../core/models/post.inteface';
import { PostService } from '../../../core/services-api/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  posts$: Observable<Array<PostInterface>>;
  loadingSkeletons = Array(3).fill(0);

  constructor(private postService: PostService) {
    this.posts$ = this.postService.getPosts({ _limit: 10 });
  }
}
