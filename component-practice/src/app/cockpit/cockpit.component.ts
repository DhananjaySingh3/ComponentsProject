import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // serverElements = [];
  newServerName = '';
  newServerContent = '';

  /*Same event name as in appcomp.html */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServerHandler() {
    this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverElements.push({
    //   type: 'Server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  onAddBlueprintHandler() {
    this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverElements.push({
    //   type: 'Blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }
}
