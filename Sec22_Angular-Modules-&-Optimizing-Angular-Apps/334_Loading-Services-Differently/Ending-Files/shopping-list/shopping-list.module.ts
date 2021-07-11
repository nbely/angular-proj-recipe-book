import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
// import { LoggingService } from "../logging.service";
import { SharedModule } from "../shared/shared.module";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShoppingListComponent } from "./shopping-list.component";

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingEditComponent,
    ],
    imports: [
        RouterModule.forChild([
            { path: '', component: ShoppingListComponent },
        ]),
        SharedModule
    ],
    // providers: [LoggingService]
})
export class ShoppingListModule {}