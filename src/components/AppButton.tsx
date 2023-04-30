import { Button, ButtonProps, CircularProgress } from "@mui/material";
import Link from "next/link";

interface AppButtonProps extends ButtonProps {
  isWorking?: boolean;
  href?: string;
}

const AppButton = (props: AppButtonProps) => {
  const { isWorking, href, ...buttonProps } = props;

  return (
    <Button
      {...buttonProps}
      LinkComponent={href ? Link : buttonProps.LinkComponent}
      href={href}
      startIcon={
        isWorking
          ? <CircularProgress color="secondary" size={24} />
          : buttonProps.startIcon
      }
    />
  )
}

export default AppButton;
