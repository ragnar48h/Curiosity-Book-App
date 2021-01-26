"use strict";
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Singleton service designed to manage modal components.
 *
 * @type ModalServiceType
 *
 * @method {(element: React.ReactElement<ModalPresentingBased>, config: ModalPresentingConfig) => string} show -
 * Shows component in a modal window. Returns its id.
 *
 * @method {(identifier: string) => string} hide - Hides component from a modal window and returns empty string.
 *
 * @method {(identifier: string, children: React.ReactNode) => void} update - Updates component from a modal window.
 *
 * @example Simple Usage
 *
 * ```
 * import React from 'react';
 * import { Layout, Button, Text, ModalService } from '@ui-kitten/components';
 *
 * export const ModalServiceShowcase = () => {
 *
 *   const modalID = '';
 *
 *   const showModal = () => {
 *     const contentElement = this.renderModalContentElement();
 *     this.modalID = ModalService.show(contentElement, { onBackdropPress: this.hideModal });
 *   };
 *
 *   const hideModal = () => {
 *     ModalService.hide(this.modalID);
 *   };
 *
 *   const renderModalContentElement = () => {
 *     return (
 *       <Layout>
 *         <Text>Hi, I'm modal!</Text>
 *       </Layout>
 *     );
 *   };
 *
 *   return (
 *     <Layout>
 *       <Button onPress={showModal}>SHOW MODAL</Button>
 *       <Button onPress={hideModal}>HIDE MODAL</Button>
 *     </Layout>
 *   );
 * }
 * ```
 */
class ModalServiceType {
    constructor() {
        this.panel = null;
    }
    mount(panel) {
        this.panel = panel;
    }
    unmount() {
        this.panel = null;
    }
    show(element, config) {
        if (this.panel) {
            return this.panel.show(element, config);
        }
    }
    update(identifier, children) {
        if (this.panel) {
            this.panel.update(identifier, children);
        }
    }
    hide(identifier) {
        if (this.panel) {
            return this.panel.hide(identifier);
        }
    }
}
exports.ModalService = new ModalServiceType();
//# sourceMappingURL=modal.service.js.map