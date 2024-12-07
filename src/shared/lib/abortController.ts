class AbortControllerSingleton {
  private static instance: AbortControllerSingleton;
  private controller: AbortController;

  private constructor() {
    this.controller = new AbortController();
  }

  static getInstance() {
    if (!AbortControllerSingleton.instance) {
      AbortControllerSingleton.instance = new AbortControllerSingleton();
    }
    return AbortControllerSingleton.instance;
  }

  getSignal() {
    return this.controller.signal;
  }

  abort() {
    this.controller.abort();
  }

  reinit() {
    this.controller = new AbortController();
  }
}

export const getControllerSignal = () => AbortControllerSingleton.getInstance().getSignal();
export const abortController = () => {
  AbortControllerSingleton.getInstance().abort();
  AbortControllerSingleton.getInstance().reinit();
};
