type EasyMessageType = 'success' | 'warning' | 'info' | 'error' | 'loading'|'none' | 'default'
type EasyMessageStyle = 'message' | 'toast'
type EasyMessagePlacement = 'top' | 'center' | 'bottom'
type IEasyMessageResult = () => void
interface IEasyMessageOptions {
    message?: string;
    duration?: number;
    background?: string;
    style?: EasyMessageStyle;
    type?: EasyMessageType;
    placement?: EasyMessagePlacement;
    onClose?: () => void;
}
type EasyMessageOption = IEasyMessageOptions | string
type EasyMessageResult = IEasyMessageResult
interface IEasyMessage {
    info: (options:EasyMessageOption) => EasyMessageResult,
    default: (options:EasyMessageOption) => EasyMessageResult,
    success: (options:EasyMessageOption) => EasyMessageResult,
    error: (options:EasyMessageOption) => EasyMessageResult,
    warning: (options:EasyMessageOption) => EasyMessageResult,
    none: (options:EasyMessageOption) => EasyMessageResult,
    loading: (options:OptEasyMessageOptionions) => EasyMessageResult,
}

// declare module '@/components/EasyMessage' {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     export const EasyMessage:IEasyMessage = (options: Options) => IEasyMessageResult
// }
