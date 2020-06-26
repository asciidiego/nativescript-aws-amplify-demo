// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app/app.module";

import API from "@aws-amplify/api";
import awsconfig from "./aws-exports";

API.configure(awsconfig);

platformNativeScriptDynamic().bootstrapModule(AppModule);
