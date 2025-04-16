declare enum Position {
    Top_Left = 0,
    Top_Right = 1,
    Top_Center = 2,
    Bottom_Left = 3,
    Bottom_Right = 4,
    Bottom_Center = 5
}
declare enum Alerttype {
    Success = 0,
    Error = 1
}
interface alertObj {
    type: Alerttype;
    position?: Position;
    message: string;
    timer?: number;
}
declare function customAlert(obj: alertObj): void;
export { customAlert, Position, Alerttype };
