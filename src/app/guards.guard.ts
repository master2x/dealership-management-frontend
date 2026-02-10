import { CanActivateFn } from '@angular/router';

export const guardsGuard: CanActivateFn = (route, state) => {
  return true;
  // implementar logica de que si esta logueado pueda accerder o no
};
