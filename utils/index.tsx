import axios from 'axios'
export async function getFooter() {
  try {
    const response = await axios.get(
      `${
        process.env.FOOTER_DATA ? process.env.FOOTER_DATA : '/data/data.json'
      }`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response?.data

    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getGameData() {
  try {
    const response = await axios.get(
      `${process.env.GAME_DATA ? process.env.GAME_DATA : '/data/game.json'}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response?.data

    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getHomeData() {
  try {
    const response = await axios.get(
      `${process.env.HOME_DATA ? process.env.HOME_DATA : '/data/home.json'}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response?.data
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getToyData() {
  try {
    const response = await axios.get(
      `${process.env.TOY_DATA ? process.env.TOY_DATA : '/data/toy.json'}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response?.data
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getFashionData() {
  try {
    const response = await axios.get(
      `${
        process.env.FASHION_DATA
          ? process.env.FASHION_DATA
          : '/data/Fashion.json'
      }`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response?.data
    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getKitchenData() {
  try {
    const response = await axios.get(
      `${
        process.env.KETCHEN_DATA
          ? process.env.KITCHEN_DATA
          : '/data/kitchen.json'
      }`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const result = await response?.data

    return result
  } catch (error) {
    console.log(error)
  }
}

export async function getBookData() {
  try {
    const response = await axios.get(
      `${process.env.BOOK_DATA ? process.env.BOOK_DATA : '/data/book.json'}`
    )
    const result = await response?.data

    return result
  } catch (error) {
    console.log(error)
  }
}
