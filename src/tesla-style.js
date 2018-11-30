import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="tesla-style">
  <template>
    <style> 
            *,
        *:before,
        *:after {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font: 300 14px/1.4 'Helvetica Neue', Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
        }
        
        .cf:before,
        .cf:after {
            content: '';
            display: table;
        }
        .cf:after {
            clear: both;
        }
        .cf {
            *zoom: 1;
        }

        :host {
          display: block;
        }
                
        .header {
          padding: 25px 0;
          text-align: center;
          background: #222;
        }
        
        .header img {
          width: 100px;
          height: 13px;
        }
        
        .wrapper {
          margin: 100px 0 150px;
        }        

        
        .header {
          padding: 25px 0;
          text-align: center;
          background: #222;
        }
        
        .header img {
          width: 100px;
          height: 13px;
        }
        
        .wrapper {
          margin: 100px 0 150px;
        }
        
        .tesla-battery {
          width: 1050px;
          margin: 0 auto;
        }
        .tesla-battery h1 {
          font-family: "RobotoNormal";
          font-weight: 100;
          font-size: 38px;
          text-align: center;
          letter-spacing: 3px;
        }
        .tesla-battery__notice {
          margin: 20px 0;
          font-size: 15px;
          color: #666;
          line-height: 20px;
        }
        
        .tesla-climate {
          float: left;
          width: 420px;
          padding: 0 40px;
          margin: 0 40px 0 0;
          border-left: 1px solid #ccc;
          border-right: 1px solid #ccc;
        }
        
        .tesla-controls {
          display: block;
          width: 100%;
        }
        
        .tesla-car {
          width: 100%;
          min-height: 350px;
          background: #fff url(../images/tesla.jpg) no-repeat top center;
          background-size: contain;
        }
        
        .tesla-wheels {
          height: 247px;
          width: 555px;
          position: relative;
          margin: auto;
        }
        
        .tesla-wheel {
          height: 80px;
          width: 80px;
          bottom: 0;
          position: absolute;
          background-repeat: no-repeat;
          background-position: 0 0;
          background-size: cover;
        }
        .tesla-wheel--front {
          left: 652px;
        }
        .tesla-wheel--rear {
          right: -26px;
        }
        .tesla-wheel--19--45 {
          background-image: url(../images/wheel-19.png);
          -webkit-animation: infinite-spinning 230ms steps(6) infinite;
          -moz-animation: infinite-spinning 230ms steps(6) infinite;
          -ms-animation: infinite-spinning 230ms steps(6) infinite;
          -o-animation: infinite-spinning 230ms steps(6) infinite;
          animation: infinite-spinning 230ms steps(6) infinite;
        }
        .tesla-wheel--19--50 {
          background-image: url(../images/wheel-19.png);
          -webkit-animation: infinite-spinning 200ms steps(6) infinite;
          -moz-animation: infinite-spinning 200ms steps(6) infinite;
          -ms-animation: infinite-spinning 200ms steps(6) infinite;
          -o-animation: infinite-spinning 200ms steps(6) infinite;
          animation: infinite-spinning 200ms steps(6) infinite;
        }
        .tesla-wheel--19--55 {
          background-image: url(../images/wheel-19.png);
          -webkit-animation: infinite-spinning 170ms steps(6) infinite;
          -moz-animation: infinite-spinning 170ms steps(6) infinite;
          -ms-animation: infinite-spinning 170ms steps(6) infinite;
          -o-animation: infinite-spinning 170ms steps(6) infinite;
          animation: infinite-spinning 170ms steps(6) infinite;
        }
        .tesla-wheel--19--60 {
          background-image: url(../images/wheel-19.png);
          -webkit-animation: infinite-spinning 140ms steps(6) infinite;
          -moz-animation: infinite-spinning 140ms steps(6) infinite;
          -ms-animation: infinite-spinning 140ms steps(6) infinite;
          -o-animation: infinite-spinning 140ms steps(6) infinite;
          animation: infinite-spinning 140ms steps(6) infinite;
        }
        .tesla-wheel--19--65 {
          background-image: url(../images/wheel-19.png);
          -webkit-animation: infinite-spinning 110ms steps(6) infinite;
          -moz-animation: infinite-spinning 110ms steps(6) infinite;
          -ms-animation: infinite-spinning 110ms steps(6) infinite;
          -o-animation: infinite-spinning 110ms steps(6) infinite;
          animation: infinite-spinning 110ms steps(6) infinite;
        }
        .tesla-wheel--19--70 {
          background-image: url(../images/wheel-19.png);
          -webkit-animation: infinite-spinning 80ms steps(6) infinite;
          -moz-animation: infinite-spinning 80ms steps(6) infinite;
          -ms-animation: infinite-spinning 80ms steps(6) infinite;
          -o-animation: infinite-spinning 80ms steps(6) infinite;
          animation: infinite-spinning 80ms steps(6) infinite;
        }
        .tesla-wheel--21--45 {
          background-image: url(../images/wheel-21.png);
          -webkit-animation: infinite-spinning 480ms steps(12) infinite;
          -moz-animation: infinite-spinning 480ms steps(12) infinite;
          -ms-animation: infinite-spinning 480ms steps(12) infinite;
          -o-animation: infinite-spinning 480ms steps(12) infinite;
          animation: infinite-spinning 480ms steps(12) infinite;
        }
        .tesla-wheel--21--50 {
          background-image: url(../images/wheel-21.png);
          -webkit-animation: infinite-spinning 400ms steps(12) infinite;
          -moz-animation: infinite-spinning 400ms steps(12) infinite;
          -ms-animation: infinite-spinning 400ms steps(12) infinite;
          -o-animation: infinite-spinning 400ms steps(12) infinite;
          animation: infinite-spinning 400ms steps(12) infinite;
        }
        .tesla-wheel--21--55 {
          background-image: url(../images/wheel-21.png);
          -webkit-animation: infinite-spinning 320ms steps(12) infinite;
          -moz-animation: infinite-spinning 320ms steps(12) infinite;
          -ms-animation: infinite-spinning 320ms steps(12) infinite;
          -o-animation: infinite-spinning 320ms steps(12) infinite;
          animation: infinite-spinning 320ms steps(12) infinite;
        }
        .tesla-wheel--21--60 {
          background-image: url(../images/wheel-21.png);
          -webkit-animation: infinite-spinning 240ms steps(12) infinite;
          -moz-animation: infinite-spinning 240ms steps(12) infinite;
          -ms-animation: infinite-spinning 240ms steps(12) infinite;
          -o-animation: infinite-spinning 240ms steps(12) infinite;
          animation: infinite-spinning 240ms steps(12) infinite;
        }
        .tesla-wheel--21--65 {
          background-image: url(../images/wheel-21.png);
          -webkit-animation: infinite-spinning 160ms steps(12) infinite;
          -moz-animation: infinite-spinning 160ms steps(12) infinite;
          -ms-animation: infinite-spinning 160ms steps(12) infinite;
          -o-animation: infinite-spinning 160ms steps(12) infinite;
          animation: infinite-spinning 160ms steps(12) infinite;
        }
        .tesla-wheel--21--70 {
          background-image: url(../images/wheel-21.png);
          -webkit-animation: infinite-spinning 80ms steps(12) infinite;
          -moz-animation: infinite-spinning 80ms steps(12) infinite;
          -ms-animation: infinite-spinning 80ms steps(12) infinite;
          -o-animation: infinite-spinning 80ms steps(12) infinite;
          animation: infinite-spinning 80ms steps(12) infinite;
        }
        
        @keyframes infinite-spinning {
          from {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        @-webkit-keyframes infinite-spinning {
          from {
            -webkit-transform: rotate(0deg);
            -moz-transform: rotate(0deg);
            -ms-transform: rotate(0deg);
            -o-transform: rotate(0deg);
            transform: rotate(0deg);
          }
          to {
            -webkit-transform: rotate(360deg);
            -moz-transform: rotate(360deg);
            -ms-transform: rotate(360deg);
            -o-transform: rotate(360deg);
            transform: rotate(360deg);
          }
        }
        .tesla-climate {
          float: left;
        }
        .tesla-climate__item {
          cursor: pointer;
          display: inline-block;
          width: 100px;
          height: 100px;
          border: 6px solid #f7f7f7;
          border-radius: 50%;
          box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
          color: #666;
          background: #fff;
        }
        .tesla-climate__item--active {
          color: #fff;
          background: #33a0ff;
          background: -moz-linear-gradient(top, #33a0ff 0%, #388bff 100%);
          background: -webkit-linear-gradient(top, #33a0ff 0%, #388bff 100%);
          background: linear-gradient(to bottom, #33a0ff 0%, #388bff 100%);
        }
        .tesla-climate__item--active.tesla-heat {
          background: #d64800;
          background: -moz-linear-gradient(top, #d64800 0%, #d20200 100%);
          background: -webkit-linear-gradient(top, #d64800 0%, #d20200 100%);
          background: linear-gradient(to bottom, #d64800 0%, #d20200 100%);
        }
        .tesla-climate__icon {
          display: block;
          width: 22px;
          height: 22px;
          margin: 8px auto 0;
          background-repeat: no-repeat;
          background-position: center;
          background-image: url(../images/climate/ac-off.svg);
        }
        .tesla-heat .tesla-climate__icon {
          background-image: url(../images/climate/heat-off.svg);
        }
        .tesla-climate__item--active .tesla-climate__icon {
          background-image: url(../images/climate/ac-on.svg);
        }
        .tesla-climate__item--active.tesla-heat .tesla-climate__icon {
          background-image: url(../images/climate/heat-on.svg);
        }
        .tesla-climate .heat {
          margin: 14px 0 0;
          text-align: center;
          font-size: 10px;
          text-transform: uppercase;
        }
        .tesla-climate input[type=checkbox] {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        
        .tesla-counter {
          float: left;
          width: 230px;
        }
        .tesla-counter__title {
          letter-spacing: 2px;
          font-size: 16px;
        }
        .tesla-counter__container {
          margin: 10px 0 0;
          padding-right: 40px;
        }
        .tesla-counter__container input[type=number] {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        .tesla-counter__number {
          font-family: "RobotoNormal";
          font-size: 25px;
          line-height: 25px;
          font-weight: 400;
          position: relative;
        }
        .tesla-counter__number span {
          position: absolute;
          top: 0;
          left: 45px;
          font-size: 15px;
          text-transform: uppercase;
        }
        .tesla-counter__item {
          position: relative;
          width: 100%;
          height: 65px;
          border: 1px solid #ccc;
          display: inline-block;
          padding: 18px 0 0 30px;
          margin: 0 8px 0 0;
          background-color: #f7f7f7;
          background-position: 24.21053% 9px;
          background-repeat: no-repeat;
          background-size: 44px;
        }
        .tesla-counter__item:focus {
          background-color: #f2f2f2;
          outline: none;
        }
        .tesla-counter__controls {
          position: absolute;
          right: 10px;
          top: 7px;
        }
        .tesla-counter__controls button {
          outline: 0;
          width: 30px;
          color: #008dff;
          cursor: pointer;
          display: block;
          padding: 11px 0;
          vertical-align: middle;
          border: 0;
          background-size: 60%;
          background-position: center;
          background-repeat: no-repeat;
          background-color: transparent;
        }
        .tesla-counter__controls button[disabled] {
          opacity: 0.4;
          cursor: not-allowed;
        }
        .tesla-counter__controls button:first-child {
          border-bottom: 1px solid #fff;
          background-image: url(../images/counter/up.svg);
        }
        .tesla-counter__controls button:last-child {
          border-top: 1px solid #ccc;
          background-image: url(../images/counter/down.svg);
        }
        
        .tesla-stats {
          margin: -70px 0 30px;
        }
        .tesla-stats ul {
          text-align: center;
        }
        .tesla-stats ul li {
          display: inline-block;
          width: 130px;
          position: relative;
        }
        .tesla-stats ul li p {
          font-size: 40px;
          font-weight: normal;
          font-family: "RobotoNormal";
          display: block;
          padding: 0 18px 0 0;
          position: relative;
          color: #008dff;
          text-align: right;
        }
        .tesla-stats ul li p span {
          font-size: 14px;
          font-weight: normal;
          font-family: "RobotoNormal";
          position: absolute;
          top: 8px;
          right: 10;
        }
        .tesla-stats-icon {
          height: 20px;
          background-size: auto 13px;
          background-position: top right;
          background-repeat: no-repeat;
        }
        .tesla-stats-icon--60 {
          background-image: url(../images/models/60.svg);
        }
        .tesla-stats-icon--60D {
          background-image: url(../images/models/60d.svg);
        }
        .tesla-stats-icon--75 {
          background-image: url(../images/models/75.svg);
        }
        .tesla-stats-icon--75D {
          background-image: url(../images/models/75d.svg);
        }
        .tesla-stats-icon--90 {
          background-image: url(../images/models/90d.svg);
        }
        .tesla-stats-icon--P100 {
          background-image: url(../images/models/p100d.svg);
        }
        
        .tesla-wheels {
          float: left;
          width: 355px;
        }
        .tesla-wheels__title {
          letter-spacing: 2px;
          font-size: 16px;
        }
        .tesla-wheels__container {
          margin: 10px 0 0;
        }
        .tesla-wheels__item {
          cursor: pointer;
          width: 47%;
          height: 65px;
          border: 1px solid #ccc;
          display: inline-block;
          padding: 20px 0 0 90px;
          margin: 0 8px 0 0;
          background-color: #f7f7f7;
          background-position: 24.21053% 9px;
          background-repeat: no-repeat;
          background-size: 44px;
        }
        .tesla-wheels__item--19 {
          background-image: url(../images/wheels/19.svg);
        }
        .tesla-wheels__item--21 {
          background-image: url(../images/wheels/21.svg);
        }
        .tesla-wheels__item--focused {
          background-color: #f2f2f2;
        }
        .tesla-wheels__item--active {
          border-color: #39f;
          box-shadow: inset 0px 0px 0px 1px #39f;
        }
        .tesla-wheels__item p {
          font-family: "RobotoNormal";
          font-size: 16px;
          font-weight: 400;
          color: #333;
        }
        .tesla-wheels__item input[type=radio] {
          border: 0;
          clip: rect(0 0 0 0);
          height: 1px;
          margin: -1px;
          overflow: hidden;
          padding: 0;
          position: absolute;
          width: 1px;
        }
        
        html, body, div, span, applet, object, iframe,
        h1, h2, h3, h4, h5, h6, p, blockquote, pre,
        a, abbr, acronym, address, big, cite, code,
        del, dfn, em, img, ins, kbd, q, s, samp,
        small, strike, strong, sub, sup, tt, var,
        b, u, i, center,
        dl, dt, dd, ol, ul, li,
        fieldset, form, label, legend,
        table, caption, tbody, tfoot, thead, tr, th, td,
        article, aside, canvas, details, embed, 
        figure, figcaption, footer, header, hgroup, 
        menu, nav, output, ruby, section, summary,
        time, mark, audio, video {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
        }
        /* HTML5 display-role reset for older browsers */
        article, aside, details, figcaption, figure, 
        footer, header, hgroup, menu, nav, section {
            display: block;
        }
        body {
            line-height: 1;
        }
        ol, ul {
            list-style: none;
        }
        blockquote, q {
            quotes: none;
        }
        blockquote:before, blockquote:after,
        q:before, q:after {
            content: '';
            content: none;
        }
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
