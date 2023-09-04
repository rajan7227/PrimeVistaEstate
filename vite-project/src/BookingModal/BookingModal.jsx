import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates"
import './BookingModal.scss';
import userDetailContext from "../components/context/Context";


function BookingModal({ opened, setOpened, email, propertyId }) {

    const [value , setValue] = useState(null)
    const { userDetails: token } = useContext(userDetailContext)

    const {mutate, isLoading} = useMutation({
        mutationFn: () => bookVisit(value, propertyId, email, token)
    })
  return (
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title="Select your date of visit"
    centered
    >
        <div className="calender">
            <DatePicker value={value} onChange={setValue} minDate={new Date()}/>
            <Button disabled={!value} onClick={()=>mutate()} className="calender__button">Book visit</Button>
        </div>

    </Modal>
  );
}

export default BookingModal;
