export const safelyParsing = (data) => {
  try {
    console.log(data)
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
}
