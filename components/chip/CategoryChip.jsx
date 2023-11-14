import React from "react";
import {Chip} from "@nextui-org/react";
import {NotificationIcon} from "./NotificationIcon";
import {CheckIcon} from "./CheckIcon";

export default function CategoryChip() {
    return (
        <div className="flex gap-4">
            <Chip
                startContent={<CheckIcon size={18} />}
                variant="faded"
                color="success"
            >
                Chip
            </Chip>
            <Chip
                endContent={<NotificationIcon size={18} />}
                variant="flat"
                color="secondary"
            >
                Chip
            </Chip>
        </div>
    );
}
