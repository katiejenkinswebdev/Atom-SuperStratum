import { Component, OnInit, Input } from '@angular/core';
import { ElementService } from '../elements/elements.service';

@Component({
  moduleId: module.id,
  selector: 'bohr-modal',
  templateUrl: 'bohr-modal.component.html',
  styleUrls: ['bohr-modal.component.css'] 
})

export class BohrModalComponent {
    
    @Input() showBohrModal: boolean;


}