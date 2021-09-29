import React from "react";
import "./Button.css";

interface ButtonProps {
  id: string,
  className?: string,
  size: "sm" | "md" | "lg",
  variant?: "default" | "outline" | "text",
  disabled?: boolean,
  disableShadow?: boolean,
  boxShadow?: "none" | string,
  helperText?: string | HTMLElement,
  startIcon?: HTMLElement,
  endIcon?: HTMLElement,
  children?: string | HTMLElement
};

export const Button = (props: ButtonProps) => {
  let className: string = `${props.size} ${props.variant || "default"}`;

  if (props.className) {
    className += ` ${props.className}`;
  }

  if (props.disabled) {
    className += " disabled";
  }

  if (props.disableShadow) {
    className += " disableShadow"
  }

  return (
    <div className="button-wrapper">
      <p>{props.helperText}</p>
      {props.startIcon}
      <button
        id={props.id}
        disabled={props.disabled}
        className={className}
      >
        {props.children}
      </button>
      {props.endIcon}
    </div>
  );
};
