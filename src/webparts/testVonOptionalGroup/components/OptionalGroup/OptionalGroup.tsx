import * as React from 'react';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { IOptionalGroupProps } from './IOptionalGroupProps';

const OptionalGroup: React.StatelessComponent<IOptionalGroupProps> = (props) => {
    
    return (
        <div>
            <Toggle label={props.label} onText="Ja" offText="Nein" onChanged={(checked) => props.visibilityChanged(props.fieldName, checked)} />
            {props.visible && props.children}
        </div>
    );
};

export default OptionalGroup;
