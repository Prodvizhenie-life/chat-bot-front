import { FC, Fragment, ReactNode } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface FullScreenModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
    footer?: ReactNode;
}

export const FullScreenModal: FC<FullScreenModalProps> = ({
    isOpen,
    onClose,
    title,
    children,
    footer,
}) => (
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10000" onClose={onClose}>
            {/* Нет overlay! */}
            <div className="fixed inset-0 flex flex-col h-screen bg-base-300">
                <DialogPanel className="flex flex-col h-full w-full p-0">
                    <div className="flex items-center justify-between px-4 py-2 border-b-1 bg-base-100 border-base-300 rounded-b-xl">
                        <DialogTitle as="h3" className="text-lg text-center w-full font-semibold ">{title}</DialogTitle>
{/*                         <button className="btn btn-ghost btn-circle" onClick={onClose} aria-label="Закрыть">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
 */}                    </div>
                    <div className="p-4 flex-1 overflow-y-auto">{children}</div>
                    {footer && <div className="p-4 border-t rounded-t-xl bg-base-100 border-base-300">{footer}</div>}
                </DialogPanel>
            </div>
        </Dialog>
    </Transition>
);
