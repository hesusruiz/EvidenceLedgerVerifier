import { AbstractPage } from './abstractpage'
import { html } from 'lit-html';
import { Capacitor } from '@capacitor/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

const isAvailable = Capacitor.isPluginAvailable('Camera');

defineCustomElements(window);

export class Camara extends AbstractPage {

    constructor(domElem) {
        super(domElem)
    }

    async enter() {
        let qr = ""
        BarcodeScanner.hideBackground(); // make background of WebView transparent
        
        const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
        
        // if the result has content
        if (result.hasContent) {
            qr = result.content
            console.log(result.content); // log the raw scanned content
        }

        let theHtml = html`
<h3>Result: ${qr}</h3>

        `

        this.render(theHtml)
    }
}

