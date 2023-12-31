import { Btn, IconWrap, Icon, Close } from "./Button.styled";

export const Button = ({ type, ariaLabel, label, onClick, id, style }) => {
  return (
    <Btn
      id={id}
      type={type}
      onClick={onClick}
      ariaLabel={ariaLabel}
      style={style}
    >
      {label}
    </Btn>
  );
};

export const ButtonIcon = ({
  type,
  ariaLabel,
  onClick,
  id,
  iconHref,
  style,
  isFavorite = false,
}) => {
  return (
    <IconWrap
      id={id}
      type={type}
      onClick={onClick}
      ariaLabel={ariaLabel}
      style={style}
    >
      <Icon>
        <use
          href={iconHref}
          fill={isFavorite ? "rgba(52, 112, 255, 1)" : "none"}
          stroke={isFavorite ? "rgba(52, 112, 255, 1)" : "currentColor"}
        />
      </Icon>
    </IconWrap>
  );
};

export const ButtonClose = ({
  type,
  ariaLabel,
  onClick,
  id,
  iconHref,
  style,
}) => {
  return (
    <Close
      id={id}
      type={type}
      onClick={onClick}
      ariaLabel={ariaLabel}
      style={style}
    >
      <Icon>
        <use href={iconHref} />
      </Icon>
    </Close>
  );
};

