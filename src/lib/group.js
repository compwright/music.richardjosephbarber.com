import get from 'lodash/get'
import groupBy from 'lodash/groupBy'
import sortBy from 'lodash/sortBy'

export function extractFirstLetter(str) {
  try {
    return /([a-z]{1})/i.exec(str)[0].toUpperCase()
  } catch (e) {
    return ''
  }
}

const convertEntryToObject = ([key, nodes]) => ({ key, nodes })

export function groupAlphabetically(edges, path) {
  return sortBy(
    Object.entries(groupBy(edges, edge => extractFirstLetter(get(edge, path)))),
    entry => entry[0]
  ).map(convertEntryToObject)
}

export function groupCategorically(edges, path) {
  return sortBy(
    Object.entries(
      edges.reduce((groups, edge) => {
        let categories = get(edge, path)
        if (!categories || categories === 'null') {
          categories = 'Other'
        }
        if (!Array.isArray(categories)) {
          categories = [categories]
        }
        for (let category of categories || []) {
          groups[category] = groups[category] || []
          groups[category].push(edge)
        }
        return groups
      }, {})
    ),
    entry => entry[0]
  ).map(convertEntryToObject)
}

export function excludeOther({ key }) {
  return key !== 'Other'
}
