/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by a Commercial license that can be found in the LICENSE file and at style-guidehttps://paperbits.io/license/mit.
 */

import { InputModel } from "./inputModel";

export class ResetInputModel extends InputModel {
    constructor() {
        super("reset");

        this.properties.push({ propertyName: "inputValue", propertyValue: undefined });
    }
}