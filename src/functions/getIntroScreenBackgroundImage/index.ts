import { TimeOfDay } from "../timeToTimeOfDay";
import morning from "./morning.jpg";
import afternoon from "./afternoon.jpeg";
import evening from "./evening.jpg";
import night from "./night.jpg";

export const getIntroScreenBackgroundImage = (timeOfDay: TimeOfDay): string => {
  if (timeOfDay === "morning") {
    return `linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 34.6%), url(${morning})`;
  }

  if (timeOfDay === "afternoon") {
    return `linear-gradient(90deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%), url(${afternoon})`;
  }

  if (timeOfDay === "evening") {
    return `url(${evening})`;
  }

  if (timeOfDay === "night") {
    return `url(${night})`;
  }

  throw new Error(`Incorrect timeOfDay: ${timeOfDay}`);
};
