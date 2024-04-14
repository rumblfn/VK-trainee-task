import {FC} from "react";

interface INewRating {
  readonly rating: number
}

export const NewRating: FC<INewRating> = ({rating}) => {
  return <div>
    <span style={{
      color: rating < 0 ? "#DEFC85" : "#C1F335"
    }}><strong>{rating}</strong></span>
  </div>
}