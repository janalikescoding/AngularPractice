import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngUnless]'
})
export class UnlessDirective {
  @Input() set ngUnless(condition : boolean){
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    } else{
      this.vcRef.clear();
    }
  }

  constructor(private templateRef : TemplateRef<any>, private vcRef : ViewContainerRef) { 

  }

}
