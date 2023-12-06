import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';

/* Firedatabase Path
https://live-posts-98960-default-rtdb.firebaseio.com/
*/

// Converting m=normal class into servive by using decorator
@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}
  //Function-1 Fetch
  saveData() {
    //Step:1 Get a list of posts from post.service
    // Create a conection with post.service to fetch data
    const listOfPosts: Post[] = this.postService.getPost();
    //Step:2 Send list of posts to backend
    this.http
      .put(
        'https://live-posts-98960-default-rtdb.firebaseio.com/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //Function-2 Save
  fetchData() {
    //Step 1.
    this.http
      .get<Post[]>(
        'https://live-posts-98960-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);

          // Step 2. Send to post.service
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
