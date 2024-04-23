import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { Blog } from '../../../shared/models/blog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  
  blogs: Blog[] = [];
  
  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.blogService.getAllBlog().subscribe({
      next: res => {
        this.blogs = res;
      },
      error: err => {
        console.log('Error Happend on feching blogs', err)
      }
    });
  }

}
