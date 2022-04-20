import { Component, OnInit } from '@angular/core';
import { faSearch,faUsers, faFileCode, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { UserClass } from 'src/app/class/user-class';
import { UserInfoService } from 'src/app/service/user-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // faUsers = faUsers
  // faHeart = faHeart
  // faFileCode = faFileCode
  // faEye = faEye
  // faSearch = faSearch

  userInfo: UserClass = new UserClass("", 0, 0, 0, "", "", 0)

  userRepos: any = []

  userName!: string




  constructor(private userInfoService: UserInfoService) { }

  ngOnInit(): void {
    this.userInfoService.getUser().subscribe(
      (response: UserClass) => {
        this.userInfo = response
      })

    this.userInfoService.getUserRepos().subscribe(
      (response: any) => {
        this.userRepos = response
      })


  }

}
