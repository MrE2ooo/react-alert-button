import { ReactNode } from "react";

interface AlertProps{
    children:ReactNode;
    onClose: () => void;
}
const Alert = ({children,onClose}:AlertProps) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{children}</strong> You should check in on some of those fields below.
  <button onClick={onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default Alert