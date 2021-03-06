import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // serverElements = [];
  // newServerName = '';
  // newServerContent = '';

  /*Same event name as in appcomp.html */
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

      /* We will access server name  just via Template Ref Variable and server content via view child so that we understand both the ways. 
    We can eith use only template ref Or view child for both aslo */

    @ViewChild('newServerContentInput') newServerContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // onAddServerHandler() {
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverElements.push({
    //   type: 'Server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  // }

  onAddServerHandler(newServerNameInput: HTMLInputElement) {
    /* We will access server name  just via Template Ref Variable and server content via view child so that we understand both the ways. 
    We can eith use only template ref Or view child for both aslo */
    this.serverCreated.emit({serverName: newServerNameInput.value, serverContent: this.newServerContentInput.nativeElement.value});
    // this.serverElements.push({
    //   type: 'Server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

  // onAddBlueprintHandler() {
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
    // this.serverElements.push({
    //   type: 'Blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  // }

  onAddBlueprintHandler(newServerNameInput: HTMLInputElement) {
    this.blueprintCreated.emit({serverName: newServerNameInput.value, serverContent: this.newServerContentInput.nativeElement.value});
    // this.serverElements.push({
    //   type: 'Blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
  }

}
