import { Product } from "../../Screens/ShopPage/types";

export interface ModalProps {
    visible: boolean;
    onClose?: () => void;
    handleCloseModal: () => void;
  }

export interface ProductModalProps extends ModalProps{
    item: Product
}