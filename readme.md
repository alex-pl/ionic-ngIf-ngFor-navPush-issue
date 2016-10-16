# ionic-ngIf-ngFor-navPush-issue

Test case for an Ionic 2 RC0/RC1 issue: https://github.com/driftyco/ionic/issues/8727

The test case is based on the Ionic tutorial template, rc.1: `ionic start ionic-modal-alert-issue tutorial --v2`

## Run and Reproduce

1. Run `ionic serve` and wait until the App opens in the web browser.

## What happens

The elements that are created delayed by `*ngIf` and `*ngFor` contain a sub element with a `[navPush]` attribute. This throws an exception:

```
Error: Error in ./Page class Page - inline template:13:4 caused by:
Expression has changed after it was checked. Previous value: 'undefined'. Current value: '#'.
```