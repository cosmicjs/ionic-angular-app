# Ionic Angular App
A simple product catalog mobile app built with Angular JS, Ionic and Cosmic JS.
![Ionic Angular App](https://cosmicjs.com/uploads/761ae050-3be2-11e7-bfc3-91ffe5d3362c-angular-ionic-cosmic.jpg)
## Tutorial
View the blog article: [How to Build a Mobile Product Catalog App Using Angular JS, Ionic and Cosmic JS](https://cosmicjs.com/blog/how-to-build-a-mobile-product-catalog-app-using-angular-js-ionic-and-cosmic-js)
## Prerequisites
You’ll need the node.js, npm and ionic cli pre-installed. Make sure you already have them before start. Please refer to  ionic docs  how to do this. You need Ionic framework >= 2.0 to run this example, so make sure you have the right Ionic version:
```
ionic -v
```
## Getting Started
1. Go to Cosmic JS and [create an account](https://cosmicjs.com).
2. Create a Bucket to store the information for your products and categories.
3. Install the App located at Your Bucket > Apps > Ionic Angular App.
```
git clone https://github.com/cosmicjs/ionic-angular-app
ionic serve
```
The installer will ask you some questions about installing node modules and ionic packages, click "y" through each.  You app will open automatically at http://localhost:8100

![Ionic Angular Cosmic](https://cosmicjs.com/uploads/35c33fa0-3be4-11e7-bfc3-91ffe5d3362c-ionic-angular-cosmic.gif)

## Configure
Edit config.ts to point to your Bucket:
```
export default {
  bucket: {
    slug: 'ionic-angular-app'
  }
}
```
