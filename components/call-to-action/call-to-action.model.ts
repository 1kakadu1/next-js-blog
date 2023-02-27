export interface ICallToActionProps {
    classes?: { root?: string, background?: string }
    preview: string;
    title: string;
    subtile: string;
    link?: {
        onClick: () => void;
        label: string
    }
    full?: boolean
}