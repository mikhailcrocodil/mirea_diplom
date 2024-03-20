export enum AppRoutes {
  AUTH = "auth",
  REGISTRATION = "registration",
  MAIN = "main",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.REGISTRATION]: "/registration",
  [AppRoutes.MAIN]: "",
};
