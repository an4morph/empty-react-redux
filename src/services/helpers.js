import { css } from 'styled-components'


export const formatDate = (dateStr) => {
  const zpad = num => ((num >= 0 && num < 10) ? `0${num}` : num)
  const date = new Date(dateStr)
  const day = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
  const time = `${zpad(date.getHours())}:${zpad(date.getMinutes())}`
  return `${day} ${time}`
}

export const removeBy = (arr, propertyName, propertyValue) => {
  const newArr = arr
  const ids = arr.map(item => item[propertyName])
  const finded = ids.find(item => item === propertyValue)
  if (!finded) throw new Error(`Can't remove by ${propertyName}. Item is absent`)
  const index = ids.indexOf(finded)
  newArr.splice(index, 1)
  return newArr
}

export const replaceBy = (arr, propertyName, propertyValue, newObj) => {
  const newArr = arr
  const ids = arr.map(item => item[propertyName])
  const finded = ids.find(item => item === propertyValue)
  if (!finded) throw new Error(`Can't remove by ${propertyName}. Item is absent`)
  const index = ids.indexOf(finded)
  newArr.splice(index, 1, newObj)
  return newArr
}

export const media = {
  phone: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (min-width: 576px and max-width 768px) {
      ${css(...args)}
    }
  `,
  desktop: (...args) => css`
    @media (min-width: 769px) {
      ${css(...args)}
    }
  `,
}
