import {Component, Input} from '@angular/core';
import {isBool, Value} from '@trademe/ensure';

@Component({
  selector: 'app-ensure',
  templateUrl: './ensure.component.html',
  styleUrls: ['./ensure.component.sass']
})
export class EnsureComponent {
  @Input() @Value(isBool) public inline: boolean;

  constructor() { }

}
