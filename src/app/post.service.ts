import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
    /*Need to create an array of posts. Its already created in post-list component
    so copy an array of posts from it*/
    listOfPosts:Post[]=[];
    listChangedEvent:EventEmitter<Post[]> = new EventEmitter();
    /*=[
        new Post("CIVIL ENGINEERING","The Department of Civil Engineering at Walchand institute of Technology Solapur was established in the year 1983. The following courses are being offered in the department -B. Tech in Civil Engineering (UG Course) with Honors Degree in Infrastructure Engineering or Honors Degree in Sustainability Engineering -Masters in Civil-Structural Engineering (P.G. Course)-Doctoral Program (Ph D). The Department is known for its reputed faculty having expertise in diverse fields.","https://witsolapur.org/wp-content/uploads/2022/12/Civil.png","DR. M. G. KALYANSHETTI",new Date(),0),
        new Post("COMPUTER SCIENCE AND ENGINEERING","This department was established in 1985. Since then, the department has been running the UG course of CSE. The department started a PG course in Computer Science & Engineering in 2009-10. Research laboratory under the department is recognized for Doctoral Research. The department is equipped with the latest computer machines installed with the latest softwares. We have five computer laboratories which are equipped with the latest terminals, scanners, printers, CD/DVD…","https://witsolapur.org/wp-content/uploads/2022/12/Computer-Science-and-Engineering.png","DR. A. M. PUJAR",new Date(),0),
        new Post("INFORMATION TECHNOLOGY","This Programme was established in 1999. The Programme is equipped with latest computer machines, installed with latest softwares. We have ten computer laboratories which are well equipped with latest terminals & peripherals and legal copies of latest software’s. These laboratories support an environment for Networking, Multimedia, Databases and advanced technologies like Mobile Application Development , AI & Machine Learning, Data Science and one laboratory…","https://witsolapur.org/wp-content/uploads/2022/12/Information-Technology.png","DR. L.M.R.J. LOBO",new Date(),0),
      ]; */

    /*Enhancing Post Service by adding facilities like add, delete, update, and get all posts*/
    // Facility-1
    getPost(){
      return this.listOfPosts;
    }

    // Facility-2
    deletePost(index:number){
      this.listOfPosts.splice(index,1);
    }

    // Facility-3
    addPost(post:Post){
      this.listOfPosts.push(post);
    }

    // Facility-4
    updatePost(index:number,post:Post){
      this.listOfPosts[index]=post
    }

    // Facility-5
    getPostToEdit(index:number){
        return this.listOfPosts[index];
    }

    // Facility-6
    likePost(index:number){
      this.listOfPosts[index].noOfLikes++;
    }

    //Facility-7
    setPosts(listOfPosts:Post[]){
      this.listOfPosts=listOfPosts;
      this.listChangedEvent.emit(listOfPosts);
    }
}