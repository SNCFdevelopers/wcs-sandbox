/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  ButtonType,
} from './components/button/button-type';
import {
  Color,
} from './interface';


export namespace Components {

  interface WcsButton {
    'color'?: Color;
    'href': string;
    'type': ButtonType;
  }
  interface WcsButtonAttributes extends StencilHTMLAttributes {
    'color'?: Color;
    'href'?: string;
    'type'?: ButtonType;
  }

  interface WcsCardBody {}
  interface WcsCardBodyAttributes extends StencilHTMLAttributes {}

  interface WcsCard {}
  interface WcsCardAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'WcsButton': Components.WcsButton;
    'WcsCardBody': Components.WcsCardBody;
    'WcsCard': Components.WcsCard;
  }

  interface StencilIntrinsicElements {
    'wcs-button': Components.WcsButtonAttributes;
    'wcs-card-body': Components.WcsCardBodyAttributes;
    'wcs-card': Components.WcsCardAttributes;
  }


  interface HTMLWcsButtonElement extends Components.WcsButton, HTMLStencilElement {}
  var HTMLWcsButtonElement: {
    prototype: HTMLWcsButtonElement;
    new (): HTMLWcsButtonElement;
  };

  interface HTMLWcsCardBodyElement extends Components.WcsCardBody, HTMLStencilElement {}
  var HTMLWcsCardBodyElement: {
    prototype: HTMLWcsCardBodyElement;
    new (): HTMLWcsCardBodyElement;
  };

  interface HTMLWcsCardElement extends Components.WcsCard, HTMLStencilElement {}
  var HTMLWcsCardElement: {
    prototype: HTMLWcsCardElement;
    new (): HTMLWcsCardElement;
  };

  interface HTMLElementTagNameMap {
    'wcs-button': HTMLWcsButtonElement
    'wcs-card-body': HTMLWcsCardBodyElement
    'wcs-card': HTMLWcsCardElement
  }

  interface ElementTagNameMap {
    'wcs-button': HTMLWcsButtonElement;
    'wcs-card-body': HTMLWcsCardBodyElement;
    'wcs-card': HTMLWcsCardElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
