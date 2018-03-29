import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import { BaseExampleComponent } from '../../baseexample.component';

import { Http } from '@angular/http';
import { MarkdownService } from '../../../app/services/markdown/markdown.service';
import { DocumentationService } from '../../../app/services/documentation.service';

var code_example = `<sam-multiselect-dropdown 
  [disabled]='alertBeingEdited' 
  [(model)]="filterTypes" 
  [label]="types.label" 
  [options]="types.options" 
  [name]="'types'"></sam-multiselect-dropdown>`;

@Component({
	selector: 'doc-multiselect-dropdown',
  template: `
<doc-template [markdown]="markdown" [example]="example" [typedoc]="typedoc_content">
`+code_example+`
</doc-template>
`
})
export class MultiselectDropdownExampleComponent extends BaseExampleComponent implements OnInit {
	filterTypes = ['Error', 'Informational', 'Warning'];
	types = {
    label: 'Types',
    options:   [
      { label: 'Informational', value: 'Informational', name: 'informational' },
      { label: 'Error', value: 'Error', name: 'error' },
      { label: 'Warning', value: 'Warning', name: 'warning' }
    ]
  };
  typedoc_target = "SamMultiSelectDropdownComponent";
  typedoc_content = "";

  example = code_example;

  public base = '_docs/components/multiselect-dropdown/';

  constructor(
    _http: Http,
    public service: DocumentationService,
    public mdService: MarkdownService) {

    super(_http, service, mdService);

    this.sections.forEach(this.fetchSection.bind(this));
  }
}