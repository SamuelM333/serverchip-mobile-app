// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { registerElement } from "nativescript-angular/element-registry";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";

import { AppModule } from "./app.module";

registerElement("CardView", () => require("nativescript-cardview").CardView);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);
platformNativeScriptDynamic().bootstrapModule(AppModule);
