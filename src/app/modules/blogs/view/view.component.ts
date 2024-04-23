import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../../../shared/models/blog';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {

  slug: string | null = null;
  blog?: Blog;

  constructor(private router: Router, private route: ActivatedRoute, private blogService: BlogService) {}

  ngOnInit(): void {
    this.slug = this.route.snapshot.paramMap.get('slug');
    if (this.slug === null) return;

    this.blogService.getBlog(this.slug).subscribe({
      next: res => {
        this.blog = res;
        },
      error: err => {
        console.log('Error Happend on feching blog', err)
      }
    });
  }
  
  delete(): void {
    // TODO: delete ths blog from backend
    
    // redirecting to blog list
    void this.router.navigate(['blogs']);
  }
}
