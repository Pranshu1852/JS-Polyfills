# Custom-Alert

### Hello Everyone i created this Custom Alert package that can easily integrate with your website.

## How to Use:

### Step1:-
First install using this command: ```npm i @pranshupatel/custom-alert```

### Step2:-
Import the function by adding below line in the top of your script file.
```js
import customAlert from './node_modules/@pranshupatel/custom-alert/script.js';
```

Also add ```type='module'``` in your script declaration in HTML.
```HTML
<script defer type="module" src="./script.js"></script>
```
### Step3:-
Call the customAlert function in your script.

Here,
- first argument is type of the message (success,error).
- second argument is position of the message (top-left,top-center,top-right,bottom-left,bottom-center,bottom-right);
- third argument is the message you want to show.

```js
customAlert('success','top-right','hello');
```