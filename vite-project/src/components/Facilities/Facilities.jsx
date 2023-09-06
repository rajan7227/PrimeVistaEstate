
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Facilities({
    prevStep,
    propertyDetails,
    setPropertyDetails,
    setOpened,
    setActiveStep,
  })  {
    const {user} = useAuth0();
    const form = useForm({
      initialValues: {
        bedrooms: propertyDetails.facilities.bedrooms,
        parkings: propertyDetails.facilities.parkings,
        bathrooms: propertyDetails.facilities.bathrooms,
      },
      validate: {
        bedrooms: (value) => (value < 1 ? "Must have at least one room" : null),
        bathrooms: (value) =>
          value < 1 ? "Must have at least one bathroom" : null,
      },
    });
  
    const { bedrooms, parkings, bathrooms } = form.values;
    const [isLoading, setIsLoading] = useState(false);
 
  
    const handleSubmit = () => {
      const { hasErrors } = form.validate();
      if (!hasErrors) {
        setPropertyDetails((prev) => ({
          ...prev,
          facilities: { bedrooms, parkings, bathrooms },
        }));
        axios
          .post(
            'http://localhost:9090/property/create',
            {
              data: {
                ...propertyDetails,
                facilities: { bedrooms, parkings, bathrooms },
                userEmail: user?.email,
              },
            }
          )
          .then((response) => {
            toast.success("Added Successfully", { position: "bottom-right" });
            setPropertyDetails({
              title: "",
              description: "",
              price: 0,
              country: "",
              city: "",
              address: "",
              image: null,
              facilities: {
                bedrooms: 0,
                parkings: 0,
                bathrooms: 0,
              },
              userEmail: user?.email,
            });
            setOpened(false);
            setActiveStep(0);
            refetchProperties();
          })
          .catch((error) => {
            toast.error(error.response?.data?.message || "An error occurred", {
              position: "bottom-right",
            });
          });
      }
    };
   
  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <NumberInput
          withAsterisk
          label="No of Bedrooms"
          min={0}
          {...form.getInputProps("bedrooms")}
        />
        <NumberInput
          label="No of Parkings"
          min={0}
          {...form.getInputProps("parkings")}
        />
        <NumberInput
          withAsterisk
          label="No of Bathrooms"
          min={0}
          {...form.getInputProps("bathrooms")}
        />
        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add Property"}
          </Button>
        </Group>
      </form>
    </Box>
  );
}

export default Facilities;
