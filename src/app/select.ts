import { Directive, Input, TemplateRef, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[select]',
  standalone: true
})
export class SelectDirective<T> {
  private templateRef = inject(TemplateRef<any>);
  private viewContainerRef = inject(ViewContainerRef);

  @Input('selectFrom') items: T[] = [];
  @Input('selectWhen') predicate!: (item: T) => boolean;

  ngOnChanges() {
    this.viewContainerRef.clear();

    if (!this.items || !this.predicate) return;

    for (const item of this.items) {
      if (this.predicate(item)) {
        this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: item });
      }
    }
  }
}
