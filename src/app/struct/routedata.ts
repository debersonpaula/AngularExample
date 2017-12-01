import { Page1Component } from '../page1/page1.component';
import { Page2Component } from '../page2/page2.component';

export class TRouteData {
    caption: string;
    href: string;
    comp: any;
}

export const RouteData: TRouteData[] = [
    {caption: 'Page 1', href: 'page1', comp: Page1Component},
    {caption: 'Page 2', href: 'page2', comp: Page2Component}
];
