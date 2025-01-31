export interface IOptionalGroupProps {
    fieldName: string;
    label: string;
    visible: boolean;
    visibilityChanged: (fieldName: string, visible: boolean) => void;
}
