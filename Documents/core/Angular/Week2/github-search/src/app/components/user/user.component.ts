import { Component, OnInit } from '@angular/core';
import { UserClass } from 'src/app/class/user-class';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users! : UserClass

  userName!: string
  
  

  constructor(private usersService: UsersService) { }

  findUser(){
    this.usersService.filterUser(this.userName).subscribe(
      (data: any) => {
        this.users = data
      }
    )
  }
  refreshWindow(){
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
