import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = 'Eventer';
  links = [
    { path: '/event', icon: 'home', title: 'Event Details' },
    { path: '/courses', icon: 'view_list', title: 'Activities ' },
  ];

  examples = [
    { path: '/examples/params', icon: 'system_update_alt', title: 'Route Params' },
    { path: '/examples/child', icon: 'face', title: 'Child Routes' },
    { path: '/examples/protected', icon: 'vpn_key', title: 'Protected Routes' },
    { path: '/examples/lazy', icon: 'swap_vertical_circle', title: 'Lazy Module' },
    { path: '/examples/create', icon: 'add_box', title: 'Dynamic Components' },
    { path: '/examples/input', icon: 'dashboard_customize', title: 'Custom Input' },
  ]
  projectSelector = new FormControl(false);

  constructor() {}
}
