import { isValid, format } from "date-fns";

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (isValid(date)) {
    return format(date, "MMM dd, yyyy");
  } else {
    return "";
  }
};

export const formatMinutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  const hoursString = hours > 0 ? `${hours}h` : "";
  const minutesString = remainingMinutes > 0 ? `${remainingMinutes}m` : "";

  return `${hoursString} ${minutesString}`.trim();
};



export const textTruncate = (text:string, maxLength:number ) => {
  let truncatedText = text;

  if (text.length > maxLength) {
    truncatedText = text.substring(0, maxLength) + '...';
  }

  return truncatedText;
};


