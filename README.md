# Email Confirmed HTML Page
**Should be shown when email is confirmed by your server**

[Preview HTML Page](https://htmlpreview.github.io/?https://github.com/sulmanweb/Email-Confirmation-Success-HTML/blob/master/index.html)

made by [@sulmanweb](https://twitter.com/sulmanweb)

## Technologies used:
- Semantic UI 2.2.10 (css) [https://semantic-ui.com](https://semantic-ui.com)
- AngularJS 1.6.5
- Angular Translate 2.15.2

## Details
This is a single page that shows to client that your email has been successfully confirmed by the server.

The key ingredient is the translation. This page will show the messages in language by checking browser or user preferred language.

Also to change the text in page is much easy and also easy to enter translations according to desired new language. 

## Usage
- First clone the repo
- the open the `app.js` and make changes in this portion to change text of english:
```angularjs
$translateProvider.translations('en', {
            'APP_NAME': 'Work Chat',
            'THANKS': 'Thank You for Subscribing',
            'CONFIRM_SUCCESS_MESSAGE': 'Your email has been successfully confirmed. Thanks for using our services.',
            'FOOTER': 'Work Chat, Sulman Baig, Pakistan'
        });
```
- You can also create new language translation by just adding another object like given above with language shortkey. Also change the preffered language in `app.js` as you like.
- Now compress back the `app.js` by any compressor to make `app.min.js`. I compress using [jscompress](https://jscompress.com)
- Now double click o `index.html` and you will see the confirmation message with browser preferred language. 


## Callouts
Thanks to the following, this was not possible without them:

- [@angular-translate](https://github.com/angular-translate) (Angular Translate)
