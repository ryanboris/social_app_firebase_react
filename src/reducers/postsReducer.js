export default function(state, action) {
  switch (action.type) {
    case 'CREATE_POST':
      return {
        posts: [action.post, ...state.posts]
      }

    default:
      return state
  }
}
