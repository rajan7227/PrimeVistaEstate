import React from "react";
import { validateString } from "../../utils/slidersetting";
import { Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries";
import { useForm } from "@mantine/form";
import Map from "../map/map";
import "./AddLocation.scss"

function AddLocation({ propertyDetails, setPropertyDetails, nextStep }) {
  const { getAll } = useCountries();


  const form = useForm({
    initialValues: {
      country: propertyDetails?.country,
      city: propertyDetails?.city,
      address: propertyDetails?.address,
    },

    validate: {
      country: (value) => validateString(value),
      city: (value) => validateString(value),
      address: (value) => validateString(value),
    },
  });

  const { country, city, address } = form.values;

  const handleSubmit = ()=> {
    const {hasErrors} = form.validate();
    if(!hasErrors) {
        setPropertyDetails((prev)=> ({...prev, city, address, country}))
        nextStep()
    }
  }
  return (
    <form  onSubmit={(e)=>{e.preventDefault(),handleSubmit()}}className="form">
      <div className="form__wrapper">
        <div className="form__inputs">
          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="City"
            {...form.getInputProps("city", { type: "input" })}
          />
          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            {...form.getInputProps("address", { type: "input" })}
          />
        </div>

        <div className="form__map">
          <Map address={address} city={city} country={country} />
        </div>

        <Group>
            <button type="submit" className="input__button">Next</button>
        </Group>
      </div>
    </form>
  );
}

export default AddLocation;
