/* eslint-disable */
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
  SelectChangeEventDetail,
} from './components/select/select-interface';
import {
  SelectOptionChosedEvent,
} from './components/select-option/select-option-interface';
import {
  SwitchChangeEventDetail,
} from './components/switch/switch-interface';
import {
  WcsTabChangeEvent,
  WcsTabsAlignment,
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
  interface WcsFormField {}
  interface WcsHeader {}
  interface WcsIcon {
    'icon': string;
    'size': 'x5' | 'x75' | '1x' | '1x2' | '1x5' | '1x7' | '2x' | '3x' | '30px' | '50px' | '66px' | '90px' | '96px' | '140px';
  }
  interface WcsModal {
    /**
    * Specifies whether the component should display a backdrop on the entire page
    */
    'backdrop': boolean;
    /**
    * Displays the modal
    */
    'show': boolean;
    /**
    * Specifies whether the component should a close button
    */
    'showCloseButton': boolean;
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
  interface WcsSwitch {
    /**
    * If `true`, the switch is selected.
    */
    'checked': boolean;
    'name': string;
  }
  interface WcsTab {
    /**
    * The header you want to be displayed for this tab.
    */
    'header': string;
  }
  interface WcsTabs {
    /**
    * Tab headers alignment.
    */
    'align': WcsTabsAlignment;
    /**
    * Current selected tab index. Starts at 0.
    */
    'selectedIndex': number;
  }
}

declare global {


  interface HTMLWcsActionBarElement extends Components.WcsActionBar, HTMLStencilElement {}
  const HTMLWcsActionBarElement: {
    prototype: HTMLWcsActionBarElement;
    new (): HTMLWcsActionBarElement;
  };

  interface HTMLWcsAppElement extends Components.WcsApp, HTMLStencilElement {}
  const HTMLWcsAppElement: {
    prototype: HTMLWcsAppElement;
    new (): HTMLWcsAppElement;
  };

  interface HTMLWcsBadgeElement extends Components.WcsBadge, HTMLStencilElement {}
  const HTMLWcsBadgeElement: {
    prototype: HTMLWcsBadgeElement;
    new (): HTMLWcsBadgeElement;
  };

  interface HTMLWcsButtonElement extends Components.WcsButton, HTMLStencilElement {}
  const HTMLWcsButtonElement: {
    prototype: HTMLWcsButtonElement;
    new (): HTMLWcsButtonElement;
  };

  interface HTMLWcsCardElement extends Components.WcsCard, HTMLStencilElement {}
  const HTMLWcsCardElement: {
    prototype: HTMLWcsCardElement;
    new (): HTMLWcsCardElement;
  };

  interface HTMLWcsCardBodyElement extends Components.WcsCardBody, HTMLStencilElement {}
  const HTMLWcsCardBodyElement: {
    prototype: HTMLWcsCardBodyElement;
    new (): HTMLWcsCardBodyElement;
  };

  interface HTMLWcsCheckboxElement extends Components.WcsCheckbox, HTMLStencilElement {}
  const HTMLWcsCheckboxElement: {
    prototype: HTMLWcsCheckboxElement;
    new (): HTMLWcsCheckboxElement;
  };

  interface HTMLWcsDropdownElement extends Components.WcsDropdown, HTMLStencilElement {}
  const HTMLWcsDropdownElement: {
    prototype: HTMLWcsDropdownElement;
    new (): HTMLWcsDropdownElement;
  };

  interface HTMLWcsDropdownItemElement extends Components.WcsDropdownItem, HTMLStencilElement {}
  const HTMLWcsDropdownItemElement: {
    prototype: HTMLWcsDropdownItemElement;
    new (): HTMLWcsDropdownItemElement;
  };

  interface HTMLWcsFormFieldElement extends Components.WcsFormField, HTMLStencilElement {}
  const HTMLWcsFormFieldElement: {
    prototype: HTMLWcsFormFieldElement;
    new (): HTMLWcsFormFieldElement;
  };

  interface HTMLWcsHeaderElement extends Components.WcsHeader, HTMLStencilElement {}
  const HTMLWcsHeaderElement: {
    prototype: HTMLWcsHeaderElement;
    new (): HTMLWcsHeaderElement;
  };

  interface HTMLWcsIconElement extends Components.WcsIcon, HTMLStencilElement {}
  const HTMLWcsIconElement: {
    prototype: HTMLWcsIconElement;
    new (): HTMLWcsIconElement;
  };

  interface HTMLWcsModalElement extends Components.WcsModal, HTMLStencilElement {}
  const HTMLWcsModalElement: {
    prototype: HTMLWcsModalElement;
    new (): HTMLWcsModalElement;
  };

  interface HTMLWcsProgressBarElement extends Components.WcsProgressBar, HTMLStencilElement {}
  const HTMLWcsProgressBarElement: {
    prototype: HTMLWcsProgressBarElement;
    new (): HTMLWcsProgressBarElement;
  };

  interface HTMLWcsProgressRadialElement extends Components.WcsProgressRadial, HTMLStencilElement {}
  const HTMLWcsProgressRadialElement: {
    prototype: HTMLWcsProgressRadialElement;
    new (): HTMLWcsProgressRadialElement;
  };

  interface HTMLWcsSelectElement extends Components.WcsSelect, HTMLStencilElement {}
  const HTMLWcsSelectElement: {
    prototype: HTMLWcsSelectElement;
    new (): HTMLWcsSelectElement;
  };

  interface HTMLWcsSelectOptionElement extends Components.WcsSelectOption, HTMLStencilElement {}
  const HTMLWcsSelectOptionElement: {
    prototype: HTMLWcsSelectOptionElement;
    new (): HTMLWcsSelectOptionElement;
  };

  interface HTMLWcsSidebarElement extends Components.WcsSidebar, HTMLStencilElement {}
  const HTMLWcsSidebarElement: {
    prototype: HTMLWcsSidebarElement;
    new (): HTMLWcsSidebarElement;
  };

  interface HTMLWcsSpinnerElement extends Components.WcsSpinner, HTMLStencilElement {}
  const HTMLWcsSpinnerElement: {
    prototype: HTMLWcsSpinnerElement;
    new (): HTMLWcsSpinnerElement;
  };

  interface HTMLWcsSwitchElement extends Components.WcsSwitch, HTMLStencilElement {}
  const HTMLWcsSwitchElement: {
    prototype: HTMLWcsSwitchElement;
    new (): HTMLWcsSwitchElement;
  };

  interface HTMLWcsTabElement extends Components.WcsTab, HTMLStencilElement {}
  const HTMLWcsTabElement: {
    prototype: HTMLWcsTabElement;
    new (): HTMLWcsTabElement;
  };

  interface HTMLWcsTabsElement extends Components.WcsTabs, HTMLStencilElement {}
  const HTMLWcsTabsElement: {
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
    'wcs-form-field': HTMLWcsFormFieldElement;
    'wcs-header': HTMLWcsHeaderElement;
    'wcs-icon': HTMLWcsIconElement;
    'wcs-modal': HTMLWcsModalElement;
    'wcs-progress-bar': HTMLWcsProgressBarElement;
    'wcs-progress-radial': HTMLWcsProgressRadialElement;
    'wcs-select': HTMLWcsSelectElement;
    'wcs-select-option': HTMLWcsSelectOptionElement;
    'wcs-sidebar': HTMLWcsSidebarElement;
    'wcs-spinner': HTMLWcsSpinnerElement;
    'wcs-switch': HTMLWcsSwitchElement;
    'wcs-tab': HTMLWcsTabElement;
    'wcs-tabs': HTMLWcsTabsElement;
  }
}

declare namespace LocalJSX {
  interface WcsActionBar {}
  interface WcsApp {}
  interface WcsBadge {}
  interface WcsButton {
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
  interface WcsCard {}
  interface WcsCardBody {}
  interface WcsCheckbox {
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
  interface WcsDropdown {
    'disabled'?: boolean;
    'mode'?: WcsButtonMode;
    'shape'?: WcsButtonShape;
  }
  interface WcsDropdownItem {
    'onWcsDropdownItemClick'?: (event: CustomEvent<void>) => void;
  }
  interface WcsFormField {}
  interface WcsHeader {}
  interface WcsIcon {
    'icon'?: string;
    'size'?: 'x5' | 'x75' | '1x' | '1x2' | '1x5' | '1x7' | '2x' | '3x' | '30px' | '50px' | '66px' | '90px' | '96px' | '140px';
  }
  interface WcsModal {
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
    /**
    * Specifies whether the component should a close button
    */
    'showCloseButton'?: boolean;
  }
  interface WcsProgressBar {
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
  interface WcsProgressRadial {
    'showLabel'?: boolean;
    'size'?: number;
    'value'?: number;
  }
  interface WcsSelect {
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
  interface WcsSelectOption {
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
  interface WcsSidebar {}
  interface WcsSpinner {
    /**
    * Indicates the spinner display mode. Accepted values: `border` or `growing`
    */
    'mode'?: 'border' | 'growing';
  }
  interface WcsSwitch {
    /**
    * If `true`, the switch is selected.
    */
    'checked'?: boolean;
    'name'?: string;
    /**
    * Emitted when the checked property has changed.
    */
    'onWcsChange'?: (event: CustomEvent<SwitchChangeEventDetail>) => void;
  }
  interface WcsTab {
    /**
    * The header you want to be displayed for this tab.
    */
    'header'?: string;
    /**
    * Do not use, meant for internal use only.
    * @inner
    * @ignore
    */
    'onTabLoaded'?: (event: CustomEvent<void>) => void;
  }
  interface WcsTabs {
    /**
    * Tab headers alignment.
    */
    'align'?: WcsTabsAlignment;
    /**
    * Emitted when the selected tab change.
    */
    'onTabChange'?: (event: CustomEvent<WcsTabChangeEvent>) => void;
    /**
    * Current selected tab index. Starts at 0.
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
    'wcs-form-field': WcsFormField;
    'wcs-header': WcsHeader;
    'wcs-icon': WcsIcon;
    'wcs-modal': WcsModal;
    'wcs-progress-bar': WcsProgressBar;
    'wcs-progress-radial': WcsProgressRadial;
    'wcs-select': WcsSelect;
    'wcs-select-option': WcsSelectOption;
    'wcs-sidebar': WcsSidebar;
    'wcs-spinner': WcsSpinner;
    'wcs-switch': WcsSwitch;
    'wcs-tab': WcsTab;
    'wcs-tabs': WcsTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'wcs-action-bar': LocalJSX.WcsActionBar & JSXBase.HTMLAttributes<HTMLWcsActionBarElement>;
      'wcs-app': LocalJSX.WcsApp & JSXBase.HTMLAttributes<HTMLWcsAppElement>;
      'wcs-badge': LocalJSX.WcsBadge & JSXBase.HTMLAttributes<HTMLWcsBadgeElement>;
      'wcs-button': LocalJSX.WcsButton & JSXBase.HTMLAttributes<HTMLWcsButtonElement>;
      'wcs-card': LocalJSX.WcsCard & JSXBase.HTMLAttributes<HTMLWcsCardElement>;
      'wcs-card-body': LocalJSX.WcsCardBody & JSXBase.HTMLAttributes<HTMLWcsCardBodyElement>;
      'wcs-checkbox': LocalJSX.WcsCheckbox & JSXBase.HTMLAttributes<HTMLWcsCheckboxElement>;
      'wcs-dropdown': LocalJSX.WcsDropdown & JSXBase.HTMLAttributes<HTMLWcsDropdownElement>;
      'wcs-dropdown-item': LocalJSX.WcsDropdownItem & JSXBase.HTMLAttributes<HTMLWcsDropdownItemElement>;
      'wcs-form-field': LocalJSX.WcsFormField & JSXBase.HTMLAttributes<HTMLWcsFormFieldElement>;
      'wcs-header': LocalJSX.WcsHeader & JSXBase.HTMLAttributes<HTMLWcsHeaderElement>;
      'wcs-icon': LocalJSX.WcsIcon & JSXBase.HTMLAttributes<HTMLWcsIconElement>;
      'wcs-modal': LocalJSX.WcsModal & JSXBase.HTMLAttributes<HTMLWcsModalElement>;
      'wcs-progress-bar': LocalJSX.WcsProgressBar & JSXBase.HTMLAttributes<HTMLWcsProgressBarElement>;
      'wcs-progress-radial': LocalJSX.WcsProgressRadial & JSXBase.HTMLAttributes<HTMLWcsProgressRadialElement>;
      'wcs-select': LocalJSX.WcsSelect & JSXBase.HTMLAttributes<HTMLWcsSelectElement>;
      'wcs-select-option': LocalJSX.WcsSelectOption & JSXBase.HTMLAttributes<HTMLWcsSelectOptionElement>;
      'wcs-sidebar': LocalJSX.WcsSidebar & JSXBase.HTMLAttributes<HTMLWcsSidebarElement>;
      'wcs-spinner': LocalJSX.WcsSpinner & JSXBase.HTMLAttributes<HTMLWcsSpinnerElement>;
      'wcs-switch': LocalJSX.WcsSwitch & JSXBase.HTMLAttributes<HTMLWcsSwitchElement>;
      'wcs-tab': LocalJSX.WcsTab & JSXBase.HTMLAttributes<HTMLWcsTabElement>;
      'wcs-tabs': LocalJSX.WcsTabs & JSXBase.HTMLAttributes<HTMLWcsTabsElement>;
    }
  }
}


