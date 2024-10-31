import * as React from 'react';
import { StackActions } from '@react-navigation/native';
​
export const navigationRef = React.createRef();
export const routeNameRef = React.createRef();
export const isReadyRef = React.createRef();
​
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params); 
  /*if (isReadyRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current?.navigate(name, params); 
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }*/
}
​
//export const push = (name, params) => navigationRef.current?.push(name, params);
export const push = (name, params) => {
  navigationRef.current && navigationRef.current.dispatch(StackActions.push(name, params));
}