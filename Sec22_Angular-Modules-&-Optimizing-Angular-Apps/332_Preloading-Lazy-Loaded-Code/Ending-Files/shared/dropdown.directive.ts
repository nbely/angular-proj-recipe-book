import { Directive, Input, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    // @Input('appDropdown') isOpen: boolean = false;
    @HostBinding('class.open') isOpen: boolean = false;

    constructor(private elRef: ElementRef, private renderer: Renderer2) { 
    }

    ngOnInit() {
        // if (this.isOpen === true) {
        //     this.renderer.addClass(this.elRef.nativeElement, 'open')
        // }
    }
    
    @HostListener('click') toggleOpen(eventData: Event) {
        this.isOpen = !this.isOpen;
        
        // if (this.isOpen === true) {
        //     this.renderer.addClass(this.elRef.nativeElement, 'open')
        // }
        // else {
        //     this.renderer.removeClass(this.elRef.nativeElement, 'open')
        // }
    }
}