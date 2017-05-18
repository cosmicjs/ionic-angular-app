import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
    selector: 'page-products-list',
    templateUrl: 'products_list.html'
})
export class ProductsList {
    public products;
    public category_title;

    constructor(
        public navCtrl: NavController,
        public params: NavParams,
        public http: Http,
        private sanitizer: DomSanitizer
    ) {
        this.products = [];
        this.category_title = this.params.get('title');

        this.http.get(`https://api.cosmicjs.com/v1/ionic-angular-app/object-type/products/search?metafield_key=category&metafield_value=${this.params.get('id')}`).subscribe((resp) => {
            let data = resp.json();
            console.log(data);
            if (data.objects) {
                this.products = data.objects;
            }
            else {
                this.products = [];
            }
        });
    }

    getImageUrl(product) {
        let url = product.metafields.find((v) => { return (v.key == 'image') }).value;
        return `https://cosmicjs.imgix.net/${url}`;
    }

    sanContent(product): any {
        return this.sanitizer.bypassSecurityTrustHtml(product.content);
    }

}
