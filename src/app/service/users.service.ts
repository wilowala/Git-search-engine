import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserClass } from '../class/user-class';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private user!: string
  private repo!: string
  apiUrl = `https://api.github.com/users`

  constructor(private http: HttpClient) {
    this.user = "vantablanta"
    this.repo = ""
   }

  getUsers(): Observable<UserClass>{
    return this.http.get<UserClass>(`${this.apiUrl}/${this.user}`,
      {
        headers: new HttpHeaders({
          Authorization: environment.apiKey
        })
      }
    )
    
  }

  filterUser(username:string){
    this.user = username
    return this.http.get<UserClass>(`${this.apiUrl}/${this.user}`,{
      headers: new HttpHeaders({
        Authorization: environment.apiKey
      })
    }) 
  }

  filterUserRepo(username:string){
    this.user = username
    return this.http.get(`${this.apiUrl}/${this.user}/repos?per_page=100`,
    {
      headers: new HttpHeaders({
        Authorization: environment.apiKey
      })
    }
  )
  }

  singleRepo(repository:string){
    this.repo = repository
    return this.http.get(`https://api.github.com/repos/${this.user}/${this.repo}`,
    {
      headers: new HttpHeaders({
        Authorization: environment.apiKey
      })
    }
  )
  }

}
