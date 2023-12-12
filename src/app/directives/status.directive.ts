import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[onlineStatus]'
})
export class StatusDirective implements AfterViewInit {
	@Input('onlineStatus') isOnline: boolean = false;
	constructor(private renderer: Renderer2, private el: ElementRef) { }

	ngAfterViewInit() {
		if (this.isOnline) {
			const span = this.renderer.createElement('span');
			this.renderer.addClass(span, 'online');
			this.renderer.addClass(span, 'status');
			this.renderer.appendChild(this.el.nativeElement, span);
		}
	}
}
