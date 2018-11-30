
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { setPassiveTouchGestures, setRootPath } from '@polymer/polymer/lib/utils/settings.js';
import './tesla-style.js';
import './tesla-battery.js';

setPassiveTouchGestures(true);
setRootPath(MyAppGlobals.rootPath);

class TeslaApp extends PolymerElement {
    static get template() {
        return html`
            <style include="tesla-style">
                        
            </style>
            
            
            
            <header class="header">
                <img src="/images/logo.svg">
            </header>
                        
            <div class="wrapper">                
                <tesla-battery></tesla-battery>
            </div>
        `;
    }

    static get properties() {
        return {
            page: {

            }
        };
    }
}

window.customElements.define('tesla-app', TeslaApp);
