import { RouteProps } from 'react-router-dom'
import { Matches } from "../../../pages/matches";

export enum AppRoutes {
    MATCHES = 'matches'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.MATCHES]: '/',
}

export const routConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MATCHES]: {
        path: RoutePaths.matches,
        element: <Matches/>
    },
}
