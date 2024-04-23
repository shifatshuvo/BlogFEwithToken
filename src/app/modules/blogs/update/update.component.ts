import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../blog.service';
import { Blog } from '../../../shared/models/blog';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit {

  slug: string | null = null;
  blog?: Blog;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private blogService: BlogService) {}

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

  update(): void {
    // TODO: validate form
    if (!this.blog) {
      return;
    }

    this.blogService.updateBlog(this.blog).subscribe({
      next: () => this.router.navigate(['blogs', this.slug]),
      error: err => console.log(err)
    });
  }
  
}
