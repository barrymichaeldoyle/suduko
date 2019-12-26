import { AnyAction } from 'redux'

import { copyGrid, createFullGrid, removeNumbers, compareArrays } from 'utils'

import * as types from './types'
import { IReducer } from './interfaces'

const initialState: IReducer = {}

function reducer(state = initialState, action: AnyAction): IReducer {
  switch (action.type) {
    case types.CREATE_FULL_GRID: {
      const solvedGrid = createFullGrid()
      const copiedGrid = copyGrid(solvedGrid)
      const challengeGrid = removeNumbers(copiedGrid)
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid: copyGrid(challengeGrid),
      }
    }

    case types.FILL_BLOCK: {
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.coords[0]][action.coords[1]] !== action.value
        ) {
          alert('Incorrect option!')
          return state
        }
        state.workingGrid[action.coords[0]][action.coords[1]] = action.value
        if (compareArrays(state.workingGrid, state.solvedGrid))
          alert('Completed!')
        if (state.workingGrid) return { ...state }
      }
      return state
    }

    case types.SELECT_BLOCK:
      return { ...state, selectedBlock: action.coords }

    default:
      return state
  }
}

export default reducer