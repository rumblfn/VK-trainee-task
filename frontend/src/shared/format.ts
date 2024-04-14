export const handleDate = (date: string) => {
  const parsedDate = new Date(date)

  const year = parsedDate.getFullYear()
  const month = parsedDate.getUTCMonth()
  const day = parsedDate.getDate()

  const hours = parsedDate.getHours()
  const minutes = parsedDate.getMinutes()

  const today = new Date()
  let shortDate = `${day}/${month + 1}/${year}`

  if (day === today.getDate() && month === today.getUTCMonth() && year === today.getFullYear()) {
    shortDate = "Today"
  } else {
    const yesterday = new Date()
    yesterday.setDate(today.getDate() - 1)

    if (day === yesterday.getDate() && month === yesterday.getUTCMonth() && year === yesterday.getFullYear()) {
      shortDate = "Yesterday"
    }
  }

  return `${shortDate} at ${hours}:${minutes}`
}

export const truncateText = (text: string, maxLength: number = 350) => {
  if (text.length <= maxLength) {
    return text;
  } else {
    let truncatedText = text.substring(0, maxLength);
    const lastSpaceIndex = truncatedText.lastIndexOf(' ');
    return truncatedText.substring(0, lastSpaceIndex) + "...";
  }
}