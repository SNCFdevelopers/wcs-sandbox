/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  WcsButtonMode,
  WcsButtonShape,
  WcsButtonType,
} from './components/button/button-interface';
import {
  CheckboxChangeEventDetail,
} from './components/checkbox/checkbox-interface';
import {
  InputChangeEventDetail,
  TextFieldTypes,
} from './components/input/input-interface';
import {
  WcsNavItemPosition,
} from './components/nav-item/nav-item-interface';
import {
  SelectChangeEventDetail,
} from './components/select/select-interface';
import {
  SelectOptionChosedEvent,
} from './components/select-option/select-option-interface';
import {
  WcsTabsAlignment,
  WcsTabsChangeEvent,
} from './components/tabs/tabs-interface';

export namespace Components {
  interface WcsActionBar {}
  interface WcsApp {}
  interface WcsBadge {}
  interface WcsButton {
    /**
    * Specify wether the button is disabled or not.
    */
    'disabled': boolean;
    /**
    * Set a URL to point to. If specified use a `a` tag instead of `btn`.
    */
    'href'?: string;
    /**
    * This attribute specify the appearance of the button.
    */
    'mode': WcsButtonMode;
    /**
    * Specify wether the button should have a ripple effect or not.
    */
    'ripple': boolean;
    /**
    * Specify the shape of the button.
    */
    'shape': WcsButtonShape;
    /**
    * Specify the button type.
    */
    'type': WcsButtonType;
  }
  interface WcsCard {}
  interface WcsCardBody {}
  interface WcsCheckbox {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked': boolean;
    /**
    * If `true` the checkbox is in indeterminate state.
    */
    'indeterminate': boolean;
    'name': string;
  }
  interface WcsDropdown {
    'disabled': boolean;
    'mode': WcsButtonMode;
    'shape': WcsButtonShape;
  }
  interface WcsDropdownItem {}
  interface WcsHeader {}
  interface WcsIcon {
    'icon': string;
    'size': 'x5' | 'x75' | '1x' | '1x2' | '1x5' | '1x7' | '2x' | '3x' | '30px' | '50px' | '66px' | '90px' | '96px' | '140px';
  }
  interface WcsInput {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize': string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete': 'on' | 'off';
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect': 'on' | 'off';
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus': boolean;
    'background': 'normal' | 'white';
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled': boolean;
    /**
    * Returns the native `<input>` element used under the hood.
    */
    'getInputElement': () => Promise<HTMLInputElement>;
    /**
    * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
    */
    'inputmode'?: string;
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name': string;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required': boolean;
    /**
    * Sets focus on the specified `wcs-input`. Use this method instead of the global `input.focus()`.
    */
    'setFocus': () => Promise<void>;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck': boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type': TextFieldTypes;
    'value': string | null;
  }
  interface WcsInputGroup {}
  interface WcsModal {
    /**
    * Specifies whether the component should display a backdrop on the entire page
    */
    'backdrop': boolean;
    /**
    * Displays the modal
    */
    'show': boolean;
    'showCloseButton': boolean;
  }
  interface WcsNav {}
  interface WcsNavItem {
    /**
    * This attribute specify the position of the item.
    */
    'position': WcsNavItemPosition;
    /**
    * This attribute specify the text of the item.
    */
    'text': string;
  }
  interface WcsProgressBar {
    /**
    * Whether it displays a label indicating the percentage of progress above the bar.
    */
    'showLabel': boolean;
    /**
    * Whether the component display the small version
    */
    'small': boolean;
    /**
    * The actual value of the progress. Ranging from 0 to 100.
    */
    'value': number;
  }
  interface WcsProgressRadial {
    'showLabel': boolean;
    'size': number;
    'value': number;
  }
  interface WcsSelect {
    /**
    * Close the component.
    */
    'close': () => Promise<void>;
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled': boolean;
    /**
    * If `true`, the user can select multiple values at once.
    */
    'multiple': boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * Open the component.
    */
    'open': () => Promise<void>;
    /**
    * The text to display when the select is empty.
    */
    'placeholder'?: string | null;
    /**
    * The currently selected value.
    */
    'value'?: any | null;
  }
  interface WcsSelectOption {
    /**
    * Wether this option can be selected.
    */
    'disabled': boolean;
    /**
    * This property musn't be set by hand, it is used by the `wcs-select` component. If you want a multiple select, set `multiple` attribute on the parent select instead.
    * @ignore
    */
    'multiple': boolean;
    /**
    * Wether this option is selected.
    */
    'selected': boolean;
    /**
    * The option value, not what's displayed, use inner text instead.
    */
    'value'?: any;
  }
  interface WcsSidebar {}
  interface WcsSpinner {
    /**
    * Indicates the spinner display mode. Accepted values: `border` or `growing`
    */
    'mode': 'border' | 'growing';
  }
  interface WcsTab {
    /**
    * The header you want to be displayed for this tab.
    */
    'header': string;
  }
  interface WcsTabs {
    'align': WcsTabsAlignment;
    /**
    * Current selected tab index
    */
    'selectedIndex': number;
  }
}

declare global {


  interface HTMLWcsActionBarElement extends Components.WcsActionBar, HTMLStencilElement {}
  var HTMLWcsActionBarElement: {
    prototype: HTMLWcsActionBarElement;
    new (): HTMLWcsActionBarElement;
  };

  interface HTMLWcsAppElement extends Components.WcsApp, HTMLStencilElement {}
  var HTMLWcsAppElement: {
    prototype: HTMLWcsAppElement;
    new (): HTMLWcsAppElement;
  };

  interface HTMLWcsBadgeElement extends Components.WcsBadge, HTMLStencilElement {}
  var HTMLWcsBadgeElement: {
    prototype: HTMLWcsBadgeElement;
    new (): HTMLWcsBadgeElement;
  };

  interface HTMLWcsButtonElement extends Components.WcsButton, HTMLStencilElement {}
  var HTMLWcsButtonElement: {
    prototype: HTMLWcsButtonElement;
    new (): HTMLWcsButtonElement;
  };

  interface HTMLWcsCardElement extends Components.WcsCard, HTMLStencilElement {}
  var HTMLWcsCardElement: {
    prototype: HTMLWcsCardElement;
    new (): HTMLWcsCardElement;
  };

  interface HTMLWcsCardBodyElement extends Components.WcsCardBody, HTMLStencilElement {}
  var HTMLWcsCardBodyElement: {
    prototype: HTMLWcsCardBodyElement;
    new (): HTMLWcsCardBodyElement;
  };

  interface HTMLWcsCheckboxElement extends Components.WcsCheckbox, HTMLStencilElement {}
  var HTMLWcsCheckboxElement: {
    prototype: HTMLWcsCheckboxElement;
    new (): HTMLWcsCheckboxElement;
  };

  interface HTMLWcsDropdownElement extends Components.WcsDropdown, HTMLStencilElement {}
  var HTMLWcsDropdownElement: {
    prototype: HTMLWcsDropdownElement;
    new (): HTMLWcsDropdownElement;
  };

  interface HTMLWcsDropdownItemElement extends Components.WcsDropdownItem, HTMLStencilElement {}
  var HTMLWcsDropdownItemElement: {
    prototype: HTMLWcsDropdownItemElement;
    new (): HTMLWcsDropdownItemElement;
  };

  interface HTMLWcsHeaderElement extends Components.WcsHeader, HTMLStencilElement {}
  var HTMLWcsHeaderElement: {
    prototype: HTMLWcsHeaderElement;
    new (): HTMLWcsHeaderElement;
  };

  interface HTMLWcsIconElement extends Components.WcsIcon, HTMLStencilElement {}
  var HTMLWcsIconElement: {
    prototype: HTMLWcsIconElement;
    new (): HTMLWcsIconElement;
  };

  interface HTMLWcsInputElement extends Components.WcsInput, HTMLStencilElement {}
  var HTMLWcsInputElement: {
    prototype: HTMLWcsInputElement;
    new (): HTMLWcsInputElement;
  };

  interface HTMLWcsInputGroupElement extends Components.WcsInputGroup, HTMLStencilElement {}
  var HTMLWcsInputGroupElement: {
    prototype: HTMLWcsInputGroupElement;
    new (): HTMLWcsInputGroupElement;
  };

  interface HTMLWcsModalElement extends Components.WcsModal, HTMLStencilElement {}
  var HTMLWcsModalElement: {
    prototype: HTMLWcsModalElement;
    new (): HTMLWcsModalElement;
  };

  interface HTMLWcsNavElement extends Components.WcsNav, HTMLStencilElement {}
  var HTMLWcsNavElement: {
    prototype: HTMLWcsNavElement;
    new (): HTMLWcsNavElement;
  };

  interface HTMLWcsNavItemElement extends Components.WcsNavItem, HTMLStencilElement {}
  var HTMLWcsNavItemElement: {
    prototype: HTMLWcsNavItemElement;
    new (): HTMLWcsNavItemElement;
  };

  interface HTMLWcsProgressBarElement extends Components.WcsProgressBar, HTMLStencilElement {}
  var HTMLWcsProgressBarElement: {
    prototype: HTMLWcsProgressBarElement;
    new (): HTMLWcsProgressBarElement;
  };

  interface HTMLWcsProgressRadialElement extends Components.WcsProgressRadial, HTMLStencilElement {}
  var HTMLWcsProgressRadialElement: {
    prototype: HTMLWcsProgressRadialElement;
    new (): HTMLWcsProgressRadialElement;
  };

  interface HTMLWcsSelectElement extends Components.WcsSelect, HTMLStencilElement {}
  var HTMLWcsSelectElement: {
    prototype: HTMLWcsSelectElement;
    new (): HTMLWcsSelectElement;
  };

  interface HTMLWcsSelectOptionElement extends Components.WcsSelectOption, HTMLStencilElement {}
  var HTMLWcsSelectOptionElement: {
    prototype: HTMLWcsSelectOptionElement;
    new (): HTMLWcsSelectOptionElement;
  };

  interface HTMLWcsSidebarElement extends Components.WcsSidebar, HTMLStencilElement {}
  var HTMLWcsSidebarElement: {
    prototype: HTMLWcsSidebarElement;
    new (): HTMLWcsSidebarElement;
  };

  interface HTMLWcsSpinnerElement extends Components.WcsSpinner, HTMLStencilElement {}
  var HTMLWcsSpinnerElement: {
    prototype: HTMLWcsSpinnerElement;
    new (): HTMLWcsSpinnerElement;
  };

  interface HTMLWcsTabElement extends Components.WcsTab, HTMLStencilElement {}
  var HTMLWcsTabElement: {
    prototype: HTMLWcsTabElement;
    new (): HTMLWcsTabElement;
  };

  interface HTMLWcsTabsElement extends Components.WcsTabs, HTMLStencilElement {}
  var HTMLWcsTabsElement: {
    prototype: HTMLWcsTabsElement;
    new (): HTMLWcsTabsElement;
  };
  interface HTMLElementTagNameMap {
    'wcs-action-bar': HTMLWcsActionBarElement;
    'wcs-app': HTMLWcsAppElement;
    'wcs-badge': HTMLWcsBadgeElement;
    'wcs-button': HTMLWcsButtonElement;
    'wcs-card': HTMLWcsCardElement;
    'wcs-card-body': HTMLWcsCardBodyElement;
    'wcs-checkbox': HTMLWcsCheckboxElement;
    'wcs-dropdown': HTMLWcsDropdownElement;
    'wcs-dropdown-item': HTMLWcsDropdownItemElement;
    'wcs-header': HTMLWcsHeaderElement;
    'wcs-icon': HTMLWcsIconElement;
    'wcs-input': HTMLWcsInputElement;
    'wcs-input-group': HTMLWcsInputGroupElement;
    'wcs-modal': HTMLWcsModalElement;
    'wcs-nav': HTMLWcsNavElement;
    'wcs-nav-item': HTMLWcsNavItemElement;
    'wcs-progress-bar': HTMLWcsProgressBarElement;
    'wcs-progress-radial': HTMLWcsProgressRadialElement;
    'wcs-select': HTMLWcsSelectElement;
    'wcs-select-option': HTMLWcsSelectOptionElement;
    'wcs-sidebar': HTMLWcsSidebarElement;
    'wcs-spinner': HTMLWcsSpinnerElement;
    'wcs-tab': HTMLWcsTabElement;
    'wcs-tabs': HTMLWcsTabsElement;
  }
}

declare namespace LocalJSX {
  interface WcsActionBar extends JSXBase.HTMLAttributes<HTMLWcsActionBarElement> {}
  interface WcsApp extends JSXBase.HTMLAttributes<HTMLWcsAppElement> {}
  interface WcsBadge extends JSXBase.HTMLAttributes<HTMLWcsBadgeElement> {}
  interface WcsButton extends JSXBase.HTMLAttributes<HTMLWcsButtonElement> {
    /**
    * Specify wether the button is disabled or not.
    */
    'disabled'?: boolean;
    /**
    * Set a URL to point to. If specified use a `a` tag instead of `btn`.
    */
    'href'?: string;
    /**
    * This attribute specify the appearance of the button.
    */
    'mode'?: WcsButtonMode;
    /**
    * Specify wether the button should have a ripple effect or not.
    */
    'ripple'?: boolean;
    /**
    * Specify the shape of the button.
    */
    'shape'?: WcsButtonShape;
    /**
    * Specify the button type.
    */
    'type'?: WcsButtonType;
  }
  interface WcsCard extends JSXBase.HTMLAttributes<HTMLWcsCardElement> {}
  interface WcsCardBody extends JSXBase.HTMLAttributes<HTMLWcsCardBodyElement> {}
  interface WcsCheckbox extends JSXBase.HTMLAttributes<HTMLWcsCheckboxElement> {
    /**
    * If `true`, the checkbox is selected.
    */
    'checked'?: boolean;
    /**
    * If `true` the checkbox is in indeterminate state.
    */
    'indeterminate'?: boolean;
    'name'?: string;
    /**
    * Emitted when the checked property has changed.
    */
    'onWcsChange'?: (event: CustomEvent<CheckboxChangeEventDetail>) => void;
  }
  interface WcsDropdown extends JSXBase.HTMLAttributes<HTMLWcsDropdownElement> {
    'disabled'?: boolean;
    'mode'?: WcsButtonMode;
    'shape'?: WcsButtonShape;
  }
  interface WcsDropdownItem extends JSXBase.HTMLAttributes<HTMLWcsDropdownItemElement> {
    'onWcsDropdownItemClick'?: (event: CustomEvent<void>) => void;
  }
  interface WcsHeader extends JSXBase.HTMLAttributes<HTMLWcsHeaderElement> {}
  interface WcsIcon extends JSXBase.HTMLAttributes<HTMLWcsIconElement> {
    'icon'?: string;
    'size'?: 'x5' | 'x75' | '1x' | '1x2' | '1x5' | '1x7' | '2x' | '3x' | '30px' | '50px' | '66px' | '90px' | '96px' | '140px';
  }
  interface WcsInput extends JSXBase.HTMLAttributes<HTMLWcsInputElement> {
    /**
    * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
    */
    'accept'?: string;
    /**
    * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
    */
    'autocapitalize'?: string;
    /**
    * Indicates whether the value of the control can be automatically completed by the browser.
    */
    'autocomplete'?: 'on' | 'off';
    /**
    * Whether auto correction should be enabled when the user is entering/editing the text value.
    */
    'autocorrect'?: 'on' | 'off';
    /**
    * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
    */
    'autofocus'?: boolean;
    'background'?: 'normal' | 'white';
    /**
    * If `true`, the user cannot interact with the input.
    */
    'disabled'?: boolean;
    /**
    * A hint to the browser for which keyboard to display. This attribute applies when the value of the type attribute is `"text"`, `"password"`, `"email"`, or `"url"`. Possible values are: `"verbatim"`, `"latin"`, `"latin-name"`, `"latin-prose"`, `"full-width-latin"`, `"kana"`, `"katakana"`, `"numeric"`, `"tel"`, `"email"`, `"url"`.
    */
    'inputmode'?: string;
    /**
    * The maximum value, which must not be less than its minimum (min attribute) value.
    */
    'max'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
    */
    'maxlength'?: number;
    /**
    * The minimum value, which must not be greater than its maximum (max attribute) value.
    */
    'min'?: string;
    /**
    * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
    */
    'minlength'?: number;
    /**
    * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    'onWcsChange'?: (event: CustomEvent<InputChangeEventDetail>) => void;
    /**
    * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'pattern'?: string;
    /**
    * If `true`, the user must fill in a value before submitting a form.
    */
    'required'?: boolean;
    /**
    * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
    */
    'size'?: number;
    /**
    * If `true`, the element will have its spelling and grammar checked.
    */
    'spellcheck'?: boolean;
    /**
    * Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.
    */
    'step'?: string;
    /**
    * The type of control to display. The default type is text.
    */
    'type'?: TextFieldTypes;
    'value'?: string | null;
  }
  interface WcsInputGroup extends JSXBase.HTMLAttributes<HTMLWcsInputGroupElement> {}
  interface WcsModal extends JSXBase.HTMLAttributes<HTMLWcsModalElement> {
    /**
    * Specifies whether the component should display a backdrop on the entire page
    */
    'backdrop'?: boolean;
    /**
    * Triggered when the user leaves the dialog with the closing button.
    */
    'onWcs-dialog-closed'?: (event: CustomEvent<void>) => void;
    /**
    * Displays the modal
    */
    'show'?: boolean;
    'showCloseButton'?: boolean;
  }
  interface WcsNav extends JSXBase.HTMLAttributes<HTMLWcsNavElement> {}
  interface WcsNavItem extends JSXBase.HTMLAttributes<HTMLWcsNavItemElement> {
    /**
    * This attribute specify the position of the item.
    */
    'position'?: WcsNavItemPosition;
    /**
    * This attribute specify the text of the item.
    */
    'text'?: string;
  }
  interface WcsProgressBar extends JSXBase.HTMLAttributes<HTMLWcsProgressBarElement> {
    /**
    * Whether it displays a label indicating the percentage of progress above the bar.
    */
    'showLabel'?: boolean;
    /**
    * Whether the component display the small version
    */
    'small'?: boolean;
    /**
    * The actual value of the progress. Ranging from 0 to 100.
    */
    'value'?: number;
  }
  interface WcsProgressRadial extends JSXBase.HTMLAttributes<HTMLWcsProgressRadialElement> {
    'showLabel'?: boolean;
    'size'?: number;
    'value'?: number;
  }
  interface WcsSelect extends JSXBase.HTMLAttributes<HTMLWcsSelectElement> {
    /**
    * If `true`, the user cannot interact with the select.
    */
    'disabled'?: boolean;
    /**
    * If `true`, the user can select multiple values at once.
    */
    'multiple'?: boolean;
    /**
    * The name of the control, which is submitted with the form data.
    */
    'name'?: string;
    /**
    * Emitted when the select loses focus.
    */
    'onWcsBlur'?: (event: CustomEvent<void>) => void;
    /**
    * Emitted when the value has changed.
    */
    'onWcsChange'?: (event: CustomEvent<SelectChangeEventDetail>) => void;
    /**
    * Emitted when the select has focus.
    */
    'onWcsFocus'?: (event: CustomEvent<void>) => void;
    /**
    * The text to display when the select is empty.
    */
    'placeholder'?: string | null;
    /**
    * The currently selected value.
    */
    'value'?: any | null;
  }
  interface WcsSelectOption extends JSXBase.HTMLAttributes<HTMLWcsSelectOptionElement> {
    /**
    * Wether this option can be selected.
    */
    'disabled'?: boolean;
    'onWcsSelectOptionClick'?: (event: CustomEvent<SelectOptionChosedEvent>) => void;
    /**
    * Wether this option is selected.
    */
    'selected'?: boolean;
    /**
    * The option value, not what's displayed, use inner text instead.
    */
    'value'?: any;
  }
  interface WcsSidebar extends JSXBase.HTMLAttributes<HTMLWcsSidebarElement> {}
  interface WcsSpinner extends JSXBase.HTMLAttributes<HTMLWcsSpinnerElement> {
    /**
    * Indicates the spinner display mode. Accepted values: `border` or `growing`
    */
    'mode'?: 'border' | 'growing';
  }
  interface WcsTab extends JSXBase.HTMLAttributes<HTMLWcsTabElement> {
    /**
    * The header you want to be displayed for this tab.
    */
    'header'?: string;
  }
  interface WcsTabs extends JSXBase.HTMLAttributes<HTMLWcsTabsElement> {
    'align'?: WcsTabsAlignment;
    /**
    * Emitted when the selected tab change
    */
    'onWcsTabsChange'?: (event: CustomEvent<WcsTabsChangeEvent>) => void;
    /**
    * Current selected tab index
    */
    'selectedIndex'?: number;
  }

  interface IntrinsicElements {
    'wcs-action-bar': WcsActionBar;
    'wcs-app': WcsApp;
    'wcs-badge': WcsBadge;
    'wcs-button': WcsButton;
    'wcs-card': WcsCard;
    'wcs-card-body': WcsCardBody;
    'wcs-checkbox': WcsCheckbox;
    'wcs-dropdown': WcsDropdown;
    'wcs-dropdown-item': WcsDropdownItem;
    'wcs-header': WcsHeader;
    'wcs-icon': WcsIcon;
    'wcs-input': WcsInput;
    'wcs-input-group': WcsInputGroup;
    'wcs-modal': WcsModal;
    'wcs-nav': WcsNav;
    'wcs-nav-item': WcsNavItem;
    'wcs-progress-bar': WcsProgressBar;
    'wcs-progress-radial': WcsProgressRadial;
    'wcs-select': WcsSelect;
    'wcs-select-option': WcsSelectOption;
    'wcs-sidebar': WcsSidebar;
    'wcs-spinner': WcsSpinner;
    'wcs-tab': WcsTab;
    'wcs-tabs': WcsTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


