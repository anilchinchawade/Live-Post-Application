import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import {OnInit} from '@angular/core'
import { PostService } from '../post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  /* So that Post component will have input capabilities
  and get Post object details from Post-List Component*/
  @Input() post?:Post;
  @Input() index:number=0;
  constructor(private postService:PostService, private router:Router){}
  ngOnInit(): void {
      console.log(this.post);
      console.log(this.index)
  }

  //Facility 1.
  onDelete(){
    //console.log("On Delete method is called");
    this.postService.deletePost(this.index);
  }

 //Facility 2.
  onEdit(){
    console.log("Edit Buttton CLicked");
    //Take help of router service to navigate to post-edit route
    // Create a connection in constructor
    this.router.navigate(["/post-edit",this.index])
  }

  //Facility 3.
  likePost(){
    //console.log("Like Button Clicked");
    this.postService.likePost(this.index);
  }

  //Facility 4.

}
