import React from "react";

const truncateString = (start, end, string) => `${string.slice(start, end)}...`;

export default truncateString;
