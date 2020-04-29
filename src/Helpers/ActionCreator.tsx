class ActionCreator {
  context: string

  constructor(context: string) {
    this.context = context;
  }

  create(type: string, payload: any) {
    return {
      type: `@${this.context}/${type}`,
      payload
    }
  }
}

export default ActionCreator;