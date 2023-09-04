import React, { useContext, useState } from "react";
import { Modal, Button } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import "./BookingModal.scss";
import { UserDetailContext } from "../components/context/Context";
import axios from "axios";
import dayjs from "dayjs";

function BookingModal({ opened, setOpened, email, id }) {
  const [value, setValue] = useState(null);
  const { loggedInUser } = useContext(UserDetailContext);
  async function handleBook() {
    
      const formattedDate = dayjs(value).format("DD/MM/YYYY")

    if (loggedInUser) {
      try {
        const apiUrl = `http://localhost:9090/user/bookvisit/${id}`;

        const response = await axios.post(
          apiUrl,
          { email : email, 
           date :  formattedDate}
        );
        console.log("POST Request Successful", response.data);
        // Handle the response as needed
      } catch (error) {
        console.error("Error sending POST request", error);
      }
    } else {
      alert("Please login to continue");
    }
  }

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      title="Select your date of visit"
      centered
    >
      <div className="calender">
        <DatePicker value={value} onChange={setValue} minDate={new Date()} />
        <Button disabled={!value} onClick={() => handleBook()}>
          Book visit
        </Button>
      </div>
    </Modal>
  );
}

export default BookingModal;
