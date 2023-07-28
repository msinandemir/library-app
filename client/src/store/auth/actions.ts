import {store} from '../index'
import { _removeUser,_setUser } from '.'

export const setUser = (user: any) => store.dispatch(_setUser(user));
export const removeUser = () => store.dispatch(_removeUser());