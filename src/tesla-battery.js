
import '@polymer/polymer/lib/elements/dom-repeat.js';
import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

// import './tesla-style.js';
import './tesla-car.js';
import './tesla-stats';
import teslaService from './tesla-battery.service';

class TeslaBattery {

    static get template() {
        return `     
            <!--<style include="tesla-style"></style> --> //TODO: fix me
                
            <form class="tesla-battery">
                <h1>[[title]]</h1>                
                
                <!-- TeslaCarComponent -->
                <tesla-car wheel="21" speed="45"></tesla-car> <!-- Fix me -->
                
                <tesla-stats stats=[[stats]]></tesla-stats>
                
                <div class="tesla-controls cf">
                
                    <!-- TeslaCounterComponent for speed -->
                    <div class="tesla-counter">
                        <p class="tesla-counter__title">Speed</p>
                        <div class="tesla-counter__container cf">
                            <div class="tesla-counter__item" tabIndex="0">
                                <p class="tesla-counter__number">
                                    speed.value
                                    <span>mph</span>
                                </p>
                                <div class="tesla-counter__controls"
                                     tabIndex="-1">
                                    <button tabIndex="-1"
                                            type="button"
                                            ngClick="_incrementSpeed"
                                            disabled$=[[this.speed.value === speed.max]]/>
                                    <button tabIndex="-1"
                                            type="button"
                                            ngClick="_decrementSpeed"
                                            disabled$=[[this.speed.value === this.speed.min]]/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- TeslaClimateComponent -->
                    <div class="tesla-climate cf">                        
                        <div class="tesla-counter">
                            <p class="tesla-counter__title">Outside Temperature</p>
                            <div class="tesla-counter__container cf">
                                <div class="tesla-counter__item"
                                     tabIndex="0">  
                                    <p class="tesla-counter__number">
                                        temperature.value 
                                        <span>°</span>
                                    </p>
                                    <div class="tesla-counter__controls"
                                         tabIndex="-1">
                                        <button tabIndex="-1"
                                                type="button"
                                                ngClick="_incrementTemperature"/>
                                        <button tabIndex="-1"
                                                type="button"
                                                ngClick="_decrementTemperature"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <!-- TeslaClimateComponent -->
                        <div>
                            <label class$='[[getClimateClass]]'>
                                <p class="heat"> {{temperatureTitle}}</p>
                                <p class="tesla-climate__icon"/>
                                <input type="checkbox" readOnly
                                       name="climate"
                                       ngChecked$={climate.value}
                                       ngClick="_changeClimate" />
                            </label>
                        </div>
                    </div>
                    
                    <!-- TeslaWheelsComponent -->
                    <div class="tesla-wheels">
                        <p class="tesla-wheels__title">Wheels</p>
                        <div class="tesla-wheels__container cf" id="blaat">
                           <template is="dom-repeat" items="{{wheels.sizes}}">
                               <label key={{item}} id=wheel{{item}} class$="tesla-wheels__item tesla-wheels__item--[[item]]">
                                     <input type="radio"
                                           name="wheelsize"
                                           value={{item}}
                                           ngClick="_changeWheelSize" />
                                    <p>{{item}}"</p>
                                </label>
                            </template>
                        </div>
                    </div>                     
                </div>
                
                <div class="tesla-battery__notice">
                    <p>
                        The actual amount of range that you experience will vary based on your particular use conditions. See
                        how particular use conditions may affect your range in our simulation model.
                        Vehicle range may vary depending on the vehicle configuration, battery age and condition, driving style
                        and operating, environmental and climate conditions.
                    </p>
                </div>
            </form>       
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        afterNextRender(this, () => {
            this._setWheelsClass();
        });
    }


    constructor() {
        super();
        this.metrics = teslaService.getModelData();
    }

    static get properties() {
        return {
            title: {
                type: String,
                value: 'Ranger Per Charge'
            },
            models: {
                type: Array,
                value: ['60', '60D', '75', '75D', '90D', 'P100D']
            },
            speed: {
                type: Object,
                value: {
                    value: 55,
                    focused: false,
                    min: 45,
                    max: 70,
                    step: 5
                }
            },
            wheels: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
                value: {
                    sizes: [19, 21],
                    value: 19,
                    focused: null
                }
            },
            temperature: {
                type: Object,
                reflectToAttribute: true,
                notify: true,
                value: {
                    value: 20,
                    focused: false,
                    min: -10,
                    max: 40,
                    step: 10,
                }
            },
            climate: {
                type: Object,
                value: {
                    value: true,
                    focused: false
                }
            },
            metrics: {
                type: Array
            },
            stats: {
                type: Object
            },
            temperatureTitle: {
                computed: '_makeTemperatureTitle(temperature.value)'
            },
            getClimateClass: {
                computed: '_getClimateClass(temperature.value, climate.value)'
            }
        };
    }

    static get observers() {
        return [
            '_makeStats(speed.value, wheels.value, temperature.value, climate.value)'
        ]
    }

    _makeTemperatureTitle(value) {
        return ((value > 10) ? 'ac' : 'heat');
    }

    _incrementSpeed() {
        if (this.speed.value < this.speed.max) {
            this.speed.value = this.speed.value + this.speed.step;
            this.notifyPath('speed.value');
        }
    }

    _decrementSpeed() {

    }

    _incrementTemperature() {

    };

    _decrementTemperature() {

    };

    _changeClimate() {
        this.climate.value = !this.climate.value;
        this.notifyPath('climate.value');
    };

    _getClimateClass(temperature, climate) {
        return `tesla-climate__item ${((temperature <= 10) ? 'tesla-heat ' : ' ')} ${ ((climate) ? 'tesla-climate__item--active ' : ' ')} `;
    }

    _changeWheelSize(event) {
        let item = event.model.item;
        this.wheels.value = item;
        this._setWheelsClass();
        this.notifyPath('wheels.value');
    }

    _makeStats(speed, wheels, temperature, climate) {
        this.stats = this.models.map(model => {
            const miles = this.metrics[model][wheels][
                climate ? 'on' : 'off'
                ].speed[speed][temperature];
            return {
                model,
                miles,
            };
        });
    }

    _setWheelsClass() {
        if (this.wheels.value === 19) {
            this.shadowRoot.querySelector('#wheel19').className = 'tesla-wheels__item tesla-wheels__item--19 tesla-wheels__item--active tesla-wheels__item--focused';
            this.shadowRoot.querySelector('#wheel21').className = 'tesla-wheels__item tesla-wheels__item--21 tesla-wheels__item tesla-wheels__item--21';
        }

        if (this.wheels.value === 21) {
            this.shadowRoot.querySelector('#wheel19').className = 'tesla-wheels__item tesla-wheels__item--19 tesla-wheels__item tesla-wheels__item--19';
            this.shadowRoot.querySelector('#wheel21').className = 'tesla-wheels__item tesla-wheels__item--21 tesla-wheels__item--active tesla-wheels__item--focused';
        }
    }
}

window.customElements.define('tesla-battery', TeslaBattery);
