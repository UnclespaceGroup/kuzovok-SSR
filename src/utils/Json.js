export const safelyParsing = (data) => {
  try {
    return JSON.parse(data)
  } catch (e) {
    console.log(e)
  }
}
