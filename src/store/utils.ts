export function mutateStateWithPayload<Payload extends Record<string | number, unknown> = {}>(
  state: Record<string | number, unknown>,
  payload: Payload,
) {
  Object.entries(payload).forEach(([k, v]) => {
    state[k] = v;
  });
}
