"use client";

import Button from "@/components/ui/button";
import IconButton from "@/components/ui/icon-button";
import { Dialog } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { relative } from "path";
import { useState } from "react";
import Filter from "./filter";

interface MobileFiltersProps {
  tyre: string[];
  model: string[];
  condition: string[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
  tyre,
  model,
  condition,
}) => {
  const [open, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        open={open}
        as="div"
        className="relative z-40 lg:hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-40 flex">
          <Dialog.Panel
            className="relative ml-auto flex h-fll w-full max-w-xs
                  flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl"
          >
            <div className="flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <Filter valueKey="tyre" name="Tyre" data={tyre} />
              <Filter valueKey="model" name="Model" data={model} />
              <Filter valueKey="condition" name="Condition" data={condition} />
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MobileFilters;
