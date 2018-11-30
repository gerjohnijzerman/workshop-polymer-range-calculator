import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';
import '@polymer/polymer/lib/elements/dom-repeat.js';


import './tesla-style.js';
import './tesla-car.js';

class TeslaStats extends PolymerElement {
    static get template() {
        return html`  
           <style include="tesla-style">
                            
           </style>      
            
           <div class="tesla-stats">
                <ul>
                    <template is="dom-repeat" items="{{stats}}">
                        <li>
                          <div class$='{{getClass(item)}}'>
                          </div>
                          <p>[[item]]<span>MI</span></p>
                        </li>
                    </template>
                </ul>
           </div>
       
        `;
    }

    static get properties() {
        return {
            stats: {
                type: Array
            }
        };
    }

    getClass(type) {
        return `tesla-stats-icon tesla-stats-icon--${type.model}`;
    }



}

window.customElements.define('tesla-stats', TeslaStats);
