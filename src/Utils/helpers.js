import axios from "axios";

export const httpGET = async (url) => {
  let response = await axios.get(process.env.REACT_APP_BASE_URL + url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "response-type": "application/json",
    },
  });
  return response.data;
};
export const generateSoftColorCode = () => {
  // min and max range to avoid solid colors
  const maxColorValue = 220;
  const minColorValue = 160;
  // Generate random colors within the range
  const red = Math.floor(
    Math.random() * (maxColorValue - minColorValue + 1) + minColorValue
  );
  const green = Math.floor(
    Math.random() * (maxColorValue - minColorValue + 1) + minColorValue
  );
  const blue = Math.floor(
    Math.random() * (maxColorValue - minColorValue + 1) + minColorValue
  );
  // generate hex code with combination
  const colorCode = `#${red.toString(16)}${green.toString(16)}${blue.toString(
    16
  )}`;

  return colorCode;
};

export const formatDate = (dateString) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const dateObj = new Date(dateString);
  const day = dateObj.getDate();
  const monthIndex = dateObj.getMonth();
  const year = dateObj.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]}, ${year}`;
  return formattedDate;
};
