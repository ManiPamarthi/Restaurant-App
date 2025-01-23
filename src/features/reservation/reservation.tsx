"use client"

import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

const Reservation = () => {
  const [email, setEmail] = useState("");
  const [time, setTime] = useState("");
  const [persons, setPersons] = useState("");

  const handleReservation = () => {
    console.log("Reservation Details:", { email, time, persons });
    alert("Reservation successfully made!");
  };

  // Dynamic Sections Configuration
  const sections = [
    {
      id: "email",
      label: "Email",
      placeholder: "Enter your email",
      value: email,
      onChange: (e) => setEmail(e.target.value),
      component: (props) => <Input {...props} />,
    },
    {
      id: "time",
      label: "Time",
      placeholder: "Select a time",
      value: time,
      onChange: setTime,
      component: (props) => (
        <Select onValueChange={props.onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Time</SelectLabel>
              {["12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"].map(
                (time) => (
                  <SelectItem key={time} value={time}>
                    {time}
                  </SelectItem>
                )
              )}
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
    {
      id: "persons",
      label: "Number of Persons",
      placeholder: "Select number of persons",
      value: persons,
      onChange: setPersons,
      component: (props) => (
        <Select onValueChange={props.onChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Persons</SelectLabel>
              {["1", "2", "3", "4", "5+"].map((person) => (
                <SelectItem key={person} value={person}>
                  {person} {person === "1" ? "Person" : "Persons"}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <div className="bg-red-200 p-10 w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Make a Reservation</h1>
        <p className="text-gray-600 text-center mb-6">Get in touch with the restaurant</p>

        {/* Render Sections Dynamically */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {sections.map((section) => (
            <div key={section.id}>
              {section.label && <label className="block mb-2 font-medium">{section.label}</label>}
              {section.component({
                placeholder: section.placeholder,
                value: section.value,
                onChange: section.onChange,
              })}
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="bg-green-800 text-white border-none px-8 py-3"
            onClick={handleReservation}
            disabled={!email || !time || !persons}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Reservation;