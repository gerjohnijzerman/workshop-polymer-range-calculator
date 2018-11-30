import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import './tesla-style.js';

class TeslaCar extends PolymerElement {
    static get template() {
        return html`     
            <!doctype html>
            <style include="tesla-style"></style>      
            
                <div class="tesla-car">
                    <div class="tesla-wheels">
                          <div class="{{_getClass('front')}}"></div>
                          <div class="{{_getClass('rear')}}"></div>
                    </div>
                </div>    
   
        `;
    }

    static get properties() {
        return {
            wheel: {
                type: Number
            },
            speed: {
                type: Number
            }
        };
    }

    _getClass(type) {
        return `tesla-wheel tesla-wheel--${type} tesla-wheel--${this.wheel}--${this.speed}`;
    }


}

window.customElements.define('tesla-car', TeslaCar);
