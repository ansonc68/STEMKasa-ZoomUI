import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { formatTimeTo12Hour } from "./helpers";

function MeetingForm({ onAddMeeting }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && date && time) {
      onAddMeeting({ title, date, time: formatTimeTo12Hour(time) });
      setTitle("");
      setDate("");
      setTime("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Meeting Title"
        variant="outlined"
        fullWidth
        margin="normal"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextField
        label="Date"
        type="date"
        variant="outlined"
        fullWidth
        margin="normal"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <TextField
        label="Time"
        type="time"
        variant="outlined"
        fullWidth
        margin="normal"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" color="primary">
        Add Meeting
      </Button>
    </form>
  );
}

export default MeetingForm;
