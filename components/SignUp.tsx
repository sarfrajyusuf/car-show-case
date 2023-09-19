"use client";
import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import Image from "next/image";
import { DialogContent, DialogContentText, DialogTitle } from "@mui/material";
interface ISignUp {
  isOpen: boolean;
  closeModal: () => void;
}
const SignUp = ({ isOpen, closeModal }: ISignUp) => {
  return (
    //  <div appear show={isOpen} as={Fragment}>
    // <Dialog
    //   aria-describedby="alert-dialog-slide-description"
    //   onClose={closeModal}
    // >
    //   <DialogTitle>{"Use Google's location service?"}</DialogTitle>
    //   <DialogContent>
    //     <DialogContentText id="alert-dialog-slide-description">
    //       Let Google help apps determine location. This means sending
    //       anonymous location data to Google, even when no apps are running.
    //     </DialogContentText>
    //   </DialogContent>
    // </Dialog>
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                <button
                  type="button"
                  onClick={closeModal}
                  className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                >
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={20}
                    height={20}
                    className="object-contains"
                  />
                </button>

                <div className="flex-1 flex flex-col gap-3">
                  <input type="text" />
                  <div className="flex gap-3">
                    <input type="text" />

                    <input type="text" />
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SignUp;
