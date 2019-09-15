import SET_CONTEXT from './configuration_action_types';
export function set_context(context_file_name) {
  return {
      type: SET_CONTEXT,
      payload: fetch(`/${context_file_name}`)
                .then(response => response.text())
  }
}