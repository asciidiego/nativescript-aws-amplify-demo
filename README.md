# Nativescript + Amplify


This repo attemps to show a demonstration of combining the power of NativeScript and AWS for the next generation of cross-platform mobile apps.

This repo contains a hello world application that tries to read and write a string (`hello world`) from the phone local storage, using AWS Amplify utilities for both iOS and Android, using NativeScript.

## How was this done?

This repository is nothing but the result of initializing a [NativeScript Angular App](https://docs.nativescript.org/angular/start/cli-basics#creating-applications), and following the [AWS Amplify for Angular installation documentation](https://docs.amplify.aws/start/getting-started/installation/q/integration/angular#option-1-watch-the-video-guide) until the step where you have to [configure the AWS Amplify API](https://docs.amplify.aws/start/getting-started/data-model/q/integration/angular#connect-frontend-to-api), where it fails.

## KNOWN BUGS

As of [this commit](https://github.com/diegovincent/nativescript-aws-amplify-demo/commit/bd80b2d86294fe54001d0baca8e961bd7e6a4995)...

For some reason, AWS Amplify cannot be correctly configured when using NativeScript. When executing the following command `tns debug ios` (and also having a simulator running, i.e. iPhone 8), [the following error appears in the console](https://pastebin.com/eEnWfPGZ).
