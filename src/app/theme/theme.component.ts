import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '../Model/Theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})
export class ThemeComponent implements OnInit {
  themes: Theme[];
  userUsername: string;
  constructor(private themeService: ThemeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userUsername = this.route.snapshot.params.userUsername;
    this.themeService.getThemes().subscribe(themes => {
      this.themes = themes;
    })
  }

}
