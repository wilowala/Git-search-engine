import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSearch, faUsers, faTimes } from '@fortawesome/free-solid-svg-icons';
import { UsersService } from 'src/app/service/users.service';
import { RepoClass } from 'src/app/class/repo-class';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {

  @Input() name!: string
  @Output() refreshEvent = new EventEmitter


  faSearch = faSearch
  faUsers = faUsers
  faTimes = faTimes

  userRepos: RepoClass[] = []

  repoName:any

  clicked: boolean = false
  complete: boolean = false

  constructor(private usersService: UsersService) { }


  findUserRepos() {
    this.usersService.filterUserRepo(this.name).subscribe(
      (data: any) => {
        this.userRepos = data
      }
    )
    this.clicked = !this.clicked
  }

  findRepo() {
    this.usersService.singleRepo(this.repoName).subscribe(
      (data:any) => {
        this.repoName = data
      }
    )
    this.complete = true

  }



  refresh() {
    this.refreshEvent.emit()
  }

  ngOnInit(): void {
  }
}
