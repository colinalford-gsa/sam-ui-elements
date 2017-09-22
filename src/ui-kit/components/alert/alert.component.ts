import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * The <sam-alert> component keeps users informed of important and (optionally) time-sensitive changes
 */
@Component({
  selector: 'sam-alert',
  templateUrl: './alert.template.html'
})
export class SamAlertComponent {
  /**
   * Sets the alert type, defaults to 'success'
   */
  @Input() type: string;
  /**
   * Sets the alert title
   */
  @Input() title: string;
  /**
   * Sets the alert description
   */
  @Input() description: string;
  /**
   * Controls whether to display/hide the Close button
   */
  @Input() showClose: boolean = false;
  /**
   * Assign a timeout to dismiss the alert
   */
  @Input() dismissTimer = 0;
  /**
   * Emitted event when an alert is dismissed
   */
  @Output() dismiss: EventEmitter<any> = new EventEmitter<any>();

  types:any = {
    "success": { class: "usa-alert-success", sr: "success alert"},
    "warning": { class: "usa-alert-warning", sr: "warning alert"},
    "error": { class: "usa-alert-error", sr: "error alert"},
    "info": { class: "usa-alert-info", sr: "info alert"}
  };
  selectedType: string = this.types['success'].class;

  constructor() {
  }

  ngOnInit(){
    if(!this.typeNotDefined()){
      this.selectedType = this.types[this.type].class;
    }
    if(this.dismissTimer>0){
      setTimeout(()=>{
        this.dismiss.emit();
      },this.dismissTimer);
    }
  }

  typeNotDefined(){
    if(!this.type || this.type.length==0){
      return true;
    }
    if(!this.types[this.type]){
      return true;
    }
    return false;
  }

  private onDismissClick(){
    this.dismiss.emit();
  }

  closeAlert(){
   this.onDismissClick(); 
  }
}