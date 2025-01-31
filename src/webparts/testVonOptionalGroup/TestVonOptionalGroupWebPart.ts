import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'TestVonOptionalGroupWebPartStrings';
import TestVonOptionalGroup from './components/TestVonOptionalGroup';
import { ITestVonOptionalGroupProps } from './components/ITestVonOptionalGroupProps';

export interface ITestVonOptionalGroupWebPartProps {
  description: string;
}

export default class TestVonOptionalGroupWebPart extends BaseClientSideWebPart<ITestVonOptionalGroupWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ITestVonOptionalGroupProps > = React.createElement(
      TestVonOptionalGroup,
      {
        mitTaeterGeschimpft: false,
        taserEingesetzt: false,
        nameDesOpfers: '',
        nameDesTaeters: '',
        gradDerVertzungen: 'nicht so schlimm'
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  /// @ts-ignore
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
