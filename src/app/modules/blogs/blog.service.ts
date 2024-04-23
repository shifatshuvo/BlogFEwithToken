import { Injectable } from '@angular/core';
import { Blog } from '../../shared/models/blog'
import { Observable, of } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blogs: Blog[] = [
    {id: 1, slug: 'slug-1', title: 'Blog 1', content: 'A big content of Blog 1'},
    {id: 2, slug: 'slug-2', title: 'Blog 2', content: 'A big content of Blog 2'},
    {id: 3, slug: 'slug-3', title: 'Blog 3', content: 'A big content of Blog 3'},
    {id: 4, slug: 'slug-4', title: 'Blog 4', content: 'A big content of Blog 4'},
    {id: 5, slug: 'slug-5', title: 'Blog 5', content: 'A big content of Blog 5'},
  ];
  
  constructor(private http: HttpClient) { }
  
  public getAllBlog(): Observable<Blog[]> {
    this.http.get("http://localhost:8080/health").subscribe();
    return of(this.blogs);
  }

  public getBlog(slug: string): Observable<Blog | undefined> {
//    let blog = this.blogs.find(b => b.slug === slug);

    let blog: Blog | undefined = undefined;
    for (let b of this.blogs) {
      if (b.slug === slug) {
        blog = b;
        break;
      }
    }

    return of(blog);
  }
  
  public updateBlog(blog: Blog): Observable<void> {
//    return this.http.put('/' + blog.id, blog);
    return of();
  }

}
