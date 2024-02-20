import { CheckCircle, Circle, PlusCircle, Trash } from "phosphor-react";

import styles from "./Button.module.css";

interface ButtonProps {
  type: "create" | "delete" | "checkbox";
  checkbox?: boolean;
  onClickFunction?: () => void;
}

export function Button({
  type,
  checkbox = false,
  onClickFunction,
}: ButtonProps) {
  if (type === "create") {
    return (
      <button type="submit" className={styles.create}>
        <strong>Criar</strong>
        <PlusCircle size={16} color="#F2F2F2" />
      </button>
    );
  } else if (type === "delete") {
    return (
      <button className={styles.delete} onClick={onClickFunction}>
        <Trash />
      </button>
    );
  } else if (type === "checkbox") {
    if (checkbox) {
      return (
        <button className={styles.checkedCircle} onClick={onClickFunction}>
          <CheckCircle weight="fill" size={24} />
        </button>
      );
    } else {
      return (
        <button className={styles.uncheckCircle} onClick={onClickFunction}>
          <Circle size={24} />
        </button>
      );
    }
  }
}
