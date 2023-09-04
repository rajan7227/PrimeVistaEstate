import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates"
import './BookingModal.scss';
import { UserDetailContext } from "../components/context/Context";


function BookingModal({ opened, setOpened, email, id }) {

    const [value , setValue] = useState(null)
    

    const  { loggedInUser }  = useContext(UserDetailContext);

  function handleBook (){
    console.log(email,id,value);
  }
    //const { userDetails: token } = useContext(UserDetailContext)

    // const {mutate, isLoading} = useMutation({
    //     mutationFn: () => bookVisit(value, propertyId, email, token)
    // })
  return (
    <Modal
    opened={opened}
    onClose={() => setOpened(false)}
    title="Select your date of visit"
    centered
    >
        <div className="calender">
            <DatePicker value={value} onChange={setValue} minDate={new Date()}/>
            <Button disabled={!value} onClick={()=>handleBook()}>Book visit</Button>
        </div>

    </Modal>
  );
}

export default BookingModal;
