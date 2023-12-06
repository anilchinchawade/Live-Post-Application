import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css'],
})
export class PostEditComponent implements OnInit {
  //Create an object of FormGroup
  form!: FormGroup;
  index: number = 0;
  //editmode is added to know whether u r in edit/add mode
  editMode=false;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    //The following code is used to deal with route params
    // Hey route help me to read params changes as I subscibe u for the same
    // This is an anonymous function
    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);

        // Save index from param to local index variable
        this.index = params['index'];

        // Call to post service to fetch the data
        //console.log(this.postService.getPostToEdit(this.index));
        const post = this.postService.getPostToEdit(this.index);
        //Fetch Data now
        title=post.title;
        description=post.description;
        imagePath=post.imagePath;
        this.editMode=true;
      }
    });

    this.form = new FormGroup({
      title: new FormControl(title, [Validators.required]),
      description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }

  onSubmit() {
    const title = this.form.value.title;
    const description = this.form.value.description;
    const imagePath = this.form.value.imagePath;
    const post = new Post(
      title,
      description,
      imagePath,
      'abc@test.com',
      new Date(),
      0
    );
    /* After we create a post object need to build
    connection with PostService Component so that we can add
    new Post object. Do it by adding private postService:PostService 
    in constructor of this class and then use this.postService*/
    // Calling Service based on edit Mode
    if(this.editMode)
    {
      this.postService.updatePost(this.index,post);
    }
    else
    {
      this.postService.addPost(post);
    }

    //Navigate to post-list component, use Router Service
    this.router.navigate(['/post-list']);
  }
}
