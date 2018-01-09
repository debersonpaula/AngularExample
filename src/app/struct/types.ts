export class TRouteData {
    caption: string;
    href: string;
    comp: any;
    hideMenu: boolean;
}
export class TUserLogin {
    username: string;
    userpass: string;
}
export class TUserRegister {
    username: string;
    userpass: string;
    userpass2: string;
}
export class TServerResponse {
    messages: any[];
    status: number;
}
