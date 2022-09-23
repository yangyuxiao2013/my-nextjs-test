import React from "react";
import style from "./style.module.css"
import { useDependencies } from './dependencies'
// ______________________________________________________
//
export type Props = {
};
// ______________________________________________________
//
export const text: React.FC<Props> = (props) => {
  const deps = useDependencies(props)
  return (
    <div className={style.module}>
    </div>
  );
}
