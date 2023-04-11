import { SignIn } from "@clerk/remix";
import * as Dialog from "@radix-ui/react-dialog";
import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";

import { SUBSCRIBED_USER_MESSAGES } from "~/utils/payment";
import { UserProfile } from "~/utils/types";
import ErrorMessage from "../core/ErrorMessage";
import BulletPoint from "../landing-page/SubBulletPoint";

const LoginModal = ({
  open,
  onClose,
  redirect,
  variant = "default",
}: {
  open: boolean;
  onClose: (open: boolean) => void;
  variant?: "default" | "pricing";
  redirect?: string;
}) => {
  const fetcher = useFetcher();
  const [error, setError] = useState("");
  const [referrer, setReferrer] = useState("");

  useEffect(() => {
    setReferrer(document.referrer);
  }, []);

  useEffect(() => {
    if (fetcher.data?.success) window.location.reload();
  }, [fetcher]);

  return (
    <Dialog.Root open={open} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-slate-500 opacity-30" />
        <Dialog.Content className="fixed left-[50%] top-[50%] flex w-[90vw] max-w-xl translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded-lg bg-white px-6 py-10">
          <DefaultContent error={error} />
          <Dialog.Close asChild className="absolute right-2 top-2 ">
            <button aria-label="Close">
              <IoMdClose className="fill-slate-400" size="30" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const DefaultContent = ({ error }: { error: string }) => {
  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="flex flex-col items-center justify-center gap-4">
          <SignIn />

          {error && <ErrorMessage error={error} />}
        </div>
      </div>
    </>
  );
};

export default LoginModal;
